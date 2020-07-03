import { DateUtils, YearMonthDay } from './dateutils';

export enum EnumPeriod {
  day = 1, month = 2, year = 3, decade = 4, century = 5
}

export interface TLEvent {
  Name: string
  Day: number
  Month: number
  Year: number
  Decade: number
  Century: number
  Type: EnumPeriod
}

export interface TLEventActions {
  create: (name: string, century: number, decade: number, year: number, month: number, day: number) => TLEvent
  create1: (name: string, value: number, type: EnumPeriod) => TLEvent
  format: (ev: TLEvent) => string
}

export const CEvent = (function (): TLEventActions {
  function fcreate(
    name: string,
    century: number,
    decade: number = null,
    year: number = null,
    month: number = null,
    day: number = null
  ): TLEvent {
    let type: EnumPeriod
    if (decade === null) {
      type = EnumPeriod.century
    } else if (year === null) {
      type = EnumPeriod.decade
    } else if (month === null) {
      type = EnumPeriod.year
    } else if (day === null) {
      type = EnumPeriod.month
    } else {
      type = EnumPeriod.day
    }
    return {
      Name: name,
      Day: day,
      Month: month,
      Year: year,
      Decade: decade,
      Century: century,
      Type: type
    }
  }
  return {
    create: fcreate,
    create1: (name: string, value: number, type: EnumPeriod) => {
      let ymd: YearMonthDay
      let month: number, year: number, decade: number, century: number;
      switch (type) {
        case EnumPeriod.day:
          ymd = DateUtils.YMDFromAD(value)
          month = DateUtils.getMonthFromYMD(ymd)
          year = DateUtils.getYearFromYMD(ymd)
          decade = DateUtils.getDecadeFromYMD(ymd)
          century = DateUtils.getCenturyFromYMD(ymd)
          return fcreate(name, century, decade, year, month, value)
        case EnumPeriod.month:
          ymd = DateUtils.getYMDFromMonth(value)
          year = DateUtils.getYearFromYMD(ymd)
          decade = DateUtils.getDecadeFromYMD(ymd)
          century = DateUtils.getCenturyFromYMD(ymd)
          return fcreate(name, century, decade, year, value)
        case EnumPeriod.year:
          ymd = DateUtils.getYMDFromYear(value)
          decade = DateUtils.getDecadeFromYMD(ymd)
          century = DateUtils.getCenturyFromYMD(ymd)
          return fcreate(name, century, decade, value)
        case EnumPeriod.decade:
          ymd = DateUtils.getYMDFromDecade(value)
          century = DateUtils.getCenturyFromYMD(ymd)
          return fcreate(name, century, value)
        case EnumPeriod.century:
          return fcreate(name, value)
      }
    },
    format: (ev: TLEvent) => {
      let rt: string
      switch (ev.Type) {
        case EnumPeriod.day:
          rt = DateUtils.formatDay(ev.Day)
          break;
        case EnumPeriod.month:
          rt = DateUtils.formatMonth(ev.Month)
          break;
        case EnumPeriod.year:
          rt = DateUtils.formatYear(ev.Year)
          break;
        case EnumPeriod.decade:
          rt = DateUtils.formatDecade(ev.Decade)
          break;
        case EnumPeriod.century:
          rt = DateUtils.formatCentury(ev.Century)
          break;
      }
      return rt
    }
  }

})();
