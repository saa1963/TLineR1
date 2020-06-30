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
    create: (period) => {
      return {
        id: Math.floor(Math.random() * Math.floor(1000000000)),
        name: period.name,
        begin: 
      }
    }
  }

})();