import React, { Component } from 'react'

import PropTypes from 'prop-types'

import Tabs, { Tab } from 'material-ui/Tabs'

import Editor from 'modules/Site/components/fields/Editor'

import ScheduleType from './Type'

export default class ScheduleEditorField extends Component {
  static propTypes = {}

  static contextTypes = {}

  constructor(props) {
    super(props)

    this.state = {
      tabIndex: 0,
    }
  }

  handleTabIndexChange(event, tabIndex) {
    this.setState({ tabIndex })
  }

  onScheduleChange(value, field) {
    let data = {}

    // data[field] = value;

    this.onChange({
      target: {
        name: field,
        value,
      },
    })
  }

  onChange(event) {
    const {
      target: { name, value },
    } = event

    let data = {}

    data[name] = value

    const { onChange, item } = this.props

    onChange && onChange(item, data)
  }

  render() {
    const { item, onFocus, onChange, ...other } = this.props

    if (!item) {
      return null
    }

    const { tabIndex } = this.state

    const { schedule, tvs, _errors: errors } = item

    const { work_time } = tvs || {}

    let tabContent

    switch (tabIndex) {
      case 0:
        tabContent = (
          <ScheduleType
            item={item}
            field="schedule"
            onChange={(days) => {
              this.onScheduleChange(days, 'schedule')
            }}
          />
        )

        break

      case 1:
        tabContent = (
          <ScheduleType
            item={item}
            field="schedule_men"
            onChange={(days) => {
              this.onScheduleChange(days, 'schedule_men')
            }}
          />
        )

        break

      case 2:
        tabContent = (
          <ScheduleType
            item={item}
            field="schedule_women"
            onChange={(days) => {
              this.onScheduleChange(days, 'schedule_women')
            }}
          />
        )

        break

      case 3:
        tabContent = (
          <ScheduleType
            item={item}
            field="schedule_family"
            onChange={(days) => {
              this.onScheduleChange(days, 'schedule_family')
            }}
          />
        )

        break
    }

    return (
      <div>
        <Tabs
          index={tabIndex}
          onChange={::this.handleTabIndexChange}
          textColor="accent"
        >
          <Tab label="???????????????? ????????????" />
          <Tab label="?????????????? ??????" />
          <Tab label="?????????????? ??????" />
          <Tab label="???????????????? ??????" />
        </Tabs>

        {tabContent}
      </div>
    )
  }
}
