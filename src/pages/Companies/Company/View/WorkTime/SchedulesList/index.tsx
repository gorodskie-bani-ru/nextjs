import React, { useMemo } from 'react'
import { SchedulesListProps } from './interfaces'
import Schedule from './Schedule'
import { SchedulesListStyled } from './styles'

const SchedulesList: React.FC<SchedulesListProps> = ({
  Schedules,
  showOffDates,
  ...other
}) => {
  return useMemo(() => {
    const schedules: JSX.Element[] = []

    if (Schedules.Schedule && Schedules.Schedule.filter((n) => n).length > 0) {
      schedules.push(
        <Schedule
          key="Schedules"
          name="Schedule"
          Schedules={Schedules.Schedule}
          showOffDates={showOffDates}
        />
      )
    }

    if (
      Schedules.ScheduleMen &&
      Schedules.ScheduleMen.filter((n) => n).length > 0
    ) {
      schedules.push(
        <Schedule
          key="ScheduleMen"
          name="ScheduleMen"
          Schedules={Schedules.ScheduleMen}
          showOffDates={showOffDates}
        />
      )
    }

    if (
      Schedules.ScheduleWomen &&
      Schedules.ScheduleWomen.filter((n) => n).length > 0
    ) {
      schedules.push(
        <Schedule
          key="ScheduleWomen"
          name="ScheduleWomen"
          Schedules={Schedules.ScheduleWomen}
          showOffDates={showOffDates}
        />
      )
    }

    if (
      Schedules.ScheduleFamily &&
      Schedules.ScheduleFamily.filter((n) => n).length > 0
    ) {
      schedules.push(
        <Schedule
          key="ScheduleFamily"
          name="ScheduleFamily"
          Schedules={Schedules.ScheduleFamily}
          showOffDates={showOffDates}
        />
      )
    }

    return schedules.length ? (
      <SchedulesListStyled {...other}>{schedules}</SchedulesListStyled>
    ) : null
  }, [Schedules, other, showOffDates])
}

export default SchedulesList
