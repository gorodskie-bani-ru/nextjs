import { objectType } from 'nexus'

export const ScheduleData = objectType({
  name: 'ScheduleData',
  description: 'Данные времени работы',
  definition(t) {
    t.int('year')
    t.int('month')
    t.int('day')
    t.int('hour')
    t.int('minute')
    t.int('second')
    t.int('weekDay')
  },
})

export const Schedule = objectType({
  name: 'Schedule',
  description: 'Время работы',
  definition(t) {
    t.nonNull.field('start', {
      type: 'ScheduleData',
    })
    t.field('end', {
      type: 'ScheduleData',
    })
  },
})

export const Schedules = objectType({
  name: 'Schedules',
  description: 'Все варианты расписания',
  definition(t) {
    t.list.field('Schedule', {
      type: 'Schedule',
      description: 'Общее расписание',
    })
    t.list.field('ScheduleMen', {
      type: 'Schedule',
      description: 'Расписание для мужчин',
    })
    t.list.field('ScheduleWomen', {
      type: 'Schedule',
      description: 'Расписание для женщин',
    })
    t.list.field('ScheduleFamily', {
      type: 'Schedule',
      description: 'Расписание для семьи',
    })
  },
})
