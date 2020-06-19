import { DateUtils } from './dateutils';

type NullableNumber = number | null

export enum EnumPeriod {
  day = 1, month = 2, year = 3, decade = 4, century = 5
}

export abstract class TLEvent {
  Name: string
  Day: NullableNumber
  Month: NullableNumber
  Year: NullableNumber
  Decade: NullableNumber
  Century: NullableNumber
  Type: EnumPeriod = EnumPeriod.day
  constructor(name: string) {
    this.Name = name
    this.Day = null
    this.Month = null
    this.Year = null
    this.Decade = null
    this.Century = null
  }

  public toJSON() {
    return Object.assign({}, {
      Name: this.Name,
      Day: this.Day,
      Month: this.Month,
      Year: this.Year,
      Decade: this.Decade,
      Century: this.Century,
      Type: this.Type
    })
  }
  
  protected DecadeFromYear(year: number): number {
    return year / 10 + (year / Math.abs(year))
  }
  protected CenturyFromDecade(decade: number): number {
    return decade / 10 + (decade / Math.abs(decade))
  }
  protected YearFromMonth(month: number): number {
    return (month - 1) / 12 + (month / Math.abs(month))
  }
  static GetType(o: TLEvent): EnumPeriod {
    if (o.Day !== null) return EnumPeriod.day
    if (o.Month !== null) return EnumPeriod.month
    if (o.Year !== null) return EnumPeriod.year
    if (o.Decade !== null) return EnumPeriod.decade
    if (o.Century !== null) return EnumPeriod.century
    throw Error()
  }
  /**
   * Попадает ли событие this в текущее значение ОВ
   * @param period
   * Текущая дробность отображения для ЛВ
   * @param vl
   * Текущее значение ОВ, которое в данный момент отрисовывается
   */
  static Equal(o1: TLEvent, o2: TLEvent): boolean {
    let rt = false
    if (o1.Century === o2.Century
      && o1.Decade === o2.Decade
      && o1.Year === o2.Year
      && o1.Month === o2.Month
      && o1.Day === o2.Day
    ) rt = true
    return rt
  }

  public Format(): string {
    let rt: string
    switch (this.Type) {
      case EnumPeriod.day:
        if (this.Day)
          rt = DateUtils.formatDay(this.Day)
        else
          throw Error()
        break;
      case EnumPeriod.month:
        if (this.Month)
          rt = DateUtils.formatMonth(this.Month)
        else
          throw Error()
        break;
      case EnumPeriod.year:
        if (this.Year)
          rt = DateUtils.formatYear(this.Year)
        else
          throw Error()
        break;
      case EnumPeriod.decade:
        if (this.Decade)
          rt = DateUtils.formatDecade(this.Decade)
        else
          throw Error()
        break;
      case EnumPeriod.century:
        if (this.Century)
          rt = DateUtils.formatCentury(this.Century)
        else
          throw Error()
        break;
    }
    return rt
  }
}

export class TLEventDay extends TLEvent {

  public static CreateTLEventDay(name: string, day: number, month: number, year: number, decade: number, century: number): TLEventDay {
    const rt = new TLEventDay(name)
    rt.Day = day
    rt.Month = month
    rt.Year = year
    rt.Decade = decade
    rt.Century = century
    rt.Type = EnumPeriod.day
    return rt
  }

  public static CreateTLEventDay1(name: string, day: number): TLEventDay {
    const ymd = DateUtils.YMDFromAD(day)
    const month: number = DateUtils.getMonthFromYMD(ymd)
    const year: number = DateUtils.getYearFromYMD(ymd)
    const decade: number = DateUtils.getDecadeFromYMD(ymd)
    const century: number = DateUtils.getCenturyFromYMD(ymd)
    return TLEventDay.CreateTLEventDay(name, day, month, year, decade, century)
  }

  
}

export class TLEventMonth extends TLEvent {

  public static CreateTLEventMonth(name: string, month: number, year: number, decade: number, century: number): TLEventDay {
    const rt = new TLEventDay(name)
    rt.Day = null
    rt.Month = month
    rt.Year = year
    rt.Decade = decade
    rt.Century = century
    rt.Type = EnumPeriod.month
    return rt
  }

  public static CreateTLEventMonth1(name: string, month: number): TLEventMonth {
    const ymd = DateUtils.getYMDFromMonth(month)
    const year: number = DateUtils.getYearFromYMD(ymd)
    const decade: number = DateUtils.getDecadeFromYMD(ymd)
    const century: number = DateUtils.getCenturyFromYMD(ymd)
    return TLEventMonth.CreateTLEventMonth(name, month, year, decade, century)
  }
}

export class TLEventYear extends TLEvent {

  public static CreateTLEventYear(name: string, year: number, decade: number, century: number): TLEventDay {
    const rt = new TLEventDay(name)
    rt.Day = null
    rt.Month = null
    rt.Year = year
    rt.Decade = decade
    rt.Century = century
    rt.Type = EnumPeriod.year
    return rt
  }

  public static CreateTLEventYear1(name: string, year: number): TLEventYear {
    const ymd = DateUtils.getYMDFromYear(year)
    const decade: number = DateUtils.getDecadeFromYMD(ymd)
    const century: number = DateUtils.getCenturyFromYMD(ymd)
    return TLEventYear.CreateTLEventYear(name, year, decade, century)
  }
}

export class TLEventDecade extends TLEvent {
  
  public static CreateTLEventDecade(name: string, decade: number, century: number): TLEventDay {
    const rt = new TLEventDay(name)
    rt.Day = null
    rt.Month = null
    rt.Year = null
    rt.Decade = decade
    rt.Century = century
    rt.Type = EnumPeriod.decade
    return rt
  }

  public static CreateTLEventDecade1(name: string, decade: number): TLEventYear {
    const ymd = DateUtils.getYMDFromDecade(decade)
    const century: number = DateUtils.getCenturyFromYMD(ymd)
    return TLEventDecade.CreateTLEventDecade(name, decade, century)
  }
}

export class TLEventCentury extends TLEvent {

  public static CreateTLEventCentury(name: string, century: number): TLEventDay {
    const rt = new TLEventDay(name)
    rt.Day = null
    rt.Month = null
    rt.Year = null
    rt.Decade = null
    rt.Century = century
    rt.Type = EnumPeriod.century
    return rt
  }
}

