/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ScheduleDataFragment } from './scheduleData';
import { gql } from '@apollo/client';
import { ScheduleDataFragmentDoc } from './scheduleData';
export type ScheduleFragment = { __typename?: 'Schedule', start: (
    { __typename?: 'ScheduleData' }
    & ScheduleDataFragment
  ), end: (
    { __typename?: 'ScheduleData' }
    & ScheduleDataFragment
  ) };

export const ScheduleFragmentDoc = gql`
    fragment schedule on Schedule {
  start {
    ...scheduleData
  }
  end {
    ...scheduleData
  }
}
    ${ScheduleDataFragmentDoc}`;