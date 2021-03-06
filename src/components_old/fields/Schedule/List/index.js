/*
	Выводим список рксписаний в карточке
*/

import React, { Component } from 'react'

import PropTypes from 'prop-types'

import Grid from 'material-ui/Grid'

import {
  WWW as SiteIcon,
  Mail as EmailIcon,
  Phone as PhoneIcon,
  Address as AddressIcon,
  Metro as MetroIcon,
  Clock as ClockIcon,
  Price as PriceIcon,
  Man as ManIcon,
  Woman as WomanIcon,
  Family as FamilyIcon,
} from 'modules/Site/components/IconPack'

import Site from 'modules/Site/components/fields/Site'

import Schedule from 'modules/Site/components/fields/Schedule'

export default class SchedulesList extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    scheduleBlockProps: PropTypes.object.isRequired,
  }

  static contextTypes = {}

  static defaultProps = {
    scheduleBlockProps: {
      item: true,
      xs: 12,
      sm: true,
    },
  }

  constructor(props) {
    super(props)

    this.state = {}
  }

  iconSprite(PrimaryIcon, SecondaryIcon) {
    return (
      <span
        style={{
          position: 'relative',
          display: 'inline-block',
          width: 25,
          height: 28,
          marginRight: 15,
        }}
      >
        <SecondaryIcon
          style={{
            position: 'absolute',
            color: 'rgba(0,0,0,0.5)',
            bottom: 6,
            right: -15,
            width: '74%',
          }}
        />
        <PrimaryIcon
          style={{
            position: 'absolute',
            bottom: 0,
          }}
        />
      </span>
    )
  }

  render() {
    const { item, scheduleBlockProps, ...other } = this.props

    if (!item) {
      return null
    }

    const { id, schedule, schedule_men, schedule_women, schedule_family } = item

    let schedulesContent = null

    const schedules = []

    // const scheduleBlockProps = {
    // 	item: true,
    // 	xs: 12,
    // 	sm: true,
    // };

    schedule &&
      schedules.push(
        <Grid key="schedule" {...scheduleBlockProps}>
          <Grid container gutter={0}>
            <ClockIcon />

            <span
              style={{
                paddingLeft: 5,
                paddingRight: 3,
              }}
            >
              Время работы
            </span>
          </Grid>

          <Schedule
            item={item}
            field="schedule"
            style={{
              padding: 2,
            }}
          />
        </Grid>
      )

    schedule_men &&
      schedules.push(
        <Grid key="schedule_men" {...scheduleBlockProps}>
          <Grid container gutter={0}>
            {this.iconSprite(ManIcon, ClockIcon)}

            <span
              style={{
                paddingLeft: 5,
                paddingRight: 3,
              }}
            >
              Мужские дни
            </span>
          </Grid>

          <Schedule
            item={item}
            field="schedule_men"
            showOffDates={false}
            style={{
              padding: 2,
            }}
          />
        </Grid>
      )

    schedule_women &&
      schedules.push(
        <Grid key="schedule_women" {...scheduleBlockProps}>
          <Grid container gutter={0}>
            {this.iconSprite(WomanIcon, ClockIcon)}

            <span
              style={{
                paddingLeft: 5,
                paddingRight: 3,
              }}
            >
              Женские дни
            </span>
          </Grid>

          <Schedule
            item={item}
            field="schedule_women"
            showOffDates={false}
            style={{
              padding: 2,
            }}
          />
        </Grid>
      )

    schedule_family &&
      schedules.push(
        <Grid key="schedule_family" {...scheduleBlockProps}>
          <Grid container gutter={0}>
            {this.iconSprite(FamilyIcon, ClockIcon)}

            <span
              style={{
                paddingLeft: 5,
                paddingRight: 3,
              }}
            >
              Семейные дни
            </span>
          </Grid>

          <Schedule
            item={item}
            field="schedule_family"
            showOffDates={false}
            style={{
              padding: 2,
            }}
          />
        </Grid>
      )

    if (schedules && schedules.length) {
      schedulesContent = (
        <Grid container gutter={16} {...other}>
          {schedules}
        </Grid>
      )
    }

    return schedulesContent
  }
}
