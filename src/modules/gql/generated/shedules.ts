/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ScheduleFragment } from './schedule';
import { gql } from '@apollo/client';
import { ScheduleFragmentDoc } from './schedule';
export type ShedulesFragment = { __typename?: 'Schedules', Schedule?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Schedule' }
    & ScheduleFragment
  )>>>, ScheduleMen?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Schedule' }
    & ScheduleFragment
  )>>>, ScheduleWomen?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Schedule' }
    & ScheduleFragment
  )>>>, ScheduleFamily?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Schedule' }
    & ScheduleFragment
  )>>> };

export const ShedulesFragmentDoc = gql`
    fragment shedules on Schedules {
  Schedule {
    ...schedule
  }
  ScheduleMen {
    ...schedule
  }
  ScheduleWomen {
    ...schedule
  }
  ScheduleFamily {
    ...schedule
  }
}
    ${ScheduleFragmentDoc}`;