import { CompanyViewProps } from '../../interfaces'

export type SchedulesListProps = {
  Schedules: NonNullable<CompanyViewProps['company']['Schedules']>

  /**
   * Если да, то выводится информация Выходной
   */
  showOffDates: boolean
}
