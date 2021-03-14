/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type ScheduleDataFragment = { __typename?: 'ScheduleData', year: number, month: number, day: number, hour: number, minute: number, second: number, weekDay: number };

export const ScheduleDataFragmentDoc = gql`
    fragment scheduleData on ScheduleData {
  year
  month
  day
  hour
  minute
  second
  weekDay
}
    `;