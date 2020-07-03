import { DateUtils } from "../utils/dateutils";

type NullableNumber = number | null

export enum EnumPeriod {
  day = 1, month = 2, year = 3, decade = 4, century = 5
}

// state

export interface ITPeriod {
  indexOfTL: number
  period: TLPeriod
  il: number
  ir: number
}

export interface TLEvent {
  name: string
  day: NullableNumber
  month: NullableNumber
  year: NullableNumber
  decade: NullableNumber
  century: NullableNumber
  type: EnumPeriod
}

export interface TLPeriod {
  id: number
  name: string
  begin: TLEvent
  end: TLEvent
  beginDay: number
  endDay: number
  periods: TLPeriod[]
  parent: TLPeriod
  isShowAll: boolean
}

export interface TimeLines {
  timelines: TLPeriod[]
}

/**
   * Первый день интервала
   * */
 function GetBeginDate(begin: TLEvent): number {
  let dt: number;
  switch (begin.Type) {
    case EnumPeriod.day:
      dt = begin.Day;
      break;
    case EnumPeriod.month:
      dt = DateUtils.FirstDayOfMonth(begin.Month);
      break;
    case EnumPeriod.year:
      dt = DateUtils.FirstDayOfYear(begin.Year);
      break;
    case EnumPeriod.decade:
      dt = DateUtils.FirstDayOfDecade(begin.Decade);
      break;
    case EnumPeriod.century:
      dt = DateUtils.FirstDayOfCentury(begin.Century);
      break;
  }
  return dt;
}
  /**
   * Последний день интервала
   * */
function GetEndDate(end: TLEvent): number {
  let dt: number;
  switch (end.Type) {
    case EnumPeriod.day:
      dt = end.Day;
      break;
    case EnumPeriod.month:
      dt = DateUtils.FirstDayOfMonth(end.Month + 1) - 1;
      break;
    case EnumPeriod.year:
      dt = DateUtils.FirstDayOfYear(end.Year + 1) - 1;
      break;
    case EnumPeriod.decade:
      dt = DateUtils.FirstDayOfDecade(end.Decade + 1) - 1;
      break;
    case EnumPeriod.century:
      dt = DateUtils.FirstDayOfCentury(end.Century + 1) - 1;
      break;
  }
  return dt;
}


export const tlPeriod = (function () {

  return {
    create: (period: { name: string, begin: TLEvent, end: TLEvent, periods: TLPeriod[] }) => {
      const begin = TLEvent.Create(
        period.begin.Name,
        period.begin.Century,
        period.begin.Decade,
        period.begin.Year,
        period.begin.Month,
        period.begin.Day
      )
      const end = TLEvent.Create(
        period.end.Name,
        period.end.Century,
        period.end.Decade,
        period.end.Year,
        period.end.Month,
        period.end.Day
      )
      return {
        id: Math.floor(Math.random() * Math.floor(1000000000)),
        name: period.name,
        begin: begin,
        end: end,
        beginDay: GetBeginDate(begin),
        endDay: GetEndDate(end),
      }
      
    }
  }

})();