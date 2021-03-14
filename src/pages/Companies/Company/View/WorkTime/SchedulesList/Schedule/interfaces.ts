import { Schedules, ScheduleFragment } from 'src/modules/gql/generated'

// export type ScheduleData = {
//   day: number
//   hour: number
//   minute: number
//   month: number
//   second: number
//   weekDay: number
//   year: number
// }

// export type ScheduleItem = {
//   start: ScheduleData
//   end?: ScheduleData
// }

export type ScheduleProps = {
  showOffDates: boolean

  Schedules: Array<ScheduleFragment | null>

  name: keyof Schedules
}
