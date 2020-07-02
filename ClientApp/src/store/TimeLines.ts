import { TLEvent } from "../utils/TLEvent";

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


export const tlPeriod = (function () {

  return {
    create: (period: {name: string, begin: TLEvent, end: TLEvent, periods: TLPeriod[]}) => {
      return {
        id: Math.floor(Math.random() * Math.floor(1000000000)),
        name: period.name,
        begin: TLEvent.Create(
          period.begin.Name,
          period.begin.Century,
          period.begin.Decade,
          period.begin.Year,
          period.begin.Month,
          period.begin.Day
        ),
        end: TLEvent.Create(
          period.end.Name,
          period.end.Century,
          period.end.Decade,
          period.end.Year,
          period.end.Month,
          period.end.Day
        ),
        beginDay:
      }
    }
  }

})();