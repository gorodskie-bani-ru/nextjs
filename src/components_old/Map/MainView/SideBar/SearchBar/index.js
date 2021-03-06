// import './styles/styles.less';

import React, { Component } from 'react'

import PropTypes from 'prop-types'
// import customPropTypes from 'material-ui/utils/customPropTypes';

import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import CloseIcon from 'material-ui-icons/Clear'
import PlaceIcon from 'material-ui-icons/Place'

import Control from 'google-map-react-control'

// import Prototype from '../layout.js';

import YandexSearch from 'modules/Site/components/YandexMap/Search'

// import lodash from 'lodash';

const Prototype = {}

// let contextTypes = Prototype.contextTypes && lodash.cloneDeep(Prototype.contextTypes) || {}

const contextTypes = Object.assign({}, Prototype.contextTypes || {}, {
  connector_url: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  triggerGoal: PropTypes.func.isRequired,
})

// let propTypes = Prototype.propTypes && lodash.cloneDeep(Prototype.propTypes) || {};

const propTypes = Object.assign({}, Prototype.propTypes || {}, {
  map: PropTypes.object.isRequired,
  maps: PropTypes.object.isRequired,
})

export default class SearchBar extends Component {
  static contextTypes = contextTypes
  static propTypes = propTypes

  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }
  }

  triggerGoal(goal) {
    const { triggerGoal } = this.context

    triggerGoal(goal)
  }

  render() {
    const {
      map,
      maps,
      position,
      // createPlace,
      ...other
    } = this.props

    const {
      classes,
      connector_url,
      user,
      userActions,
      // styleManager,
    } = this.context

    const { expanded } = this.state

    // const {
    // 	theme,
    // } = styleManager;

    // const {
    // 	breakpoints,
    // } = theme;

    // const sm = theme.breakpoints.down('md');

    const content = null

    return (
      <Control
        map={map}
        maps={maps}
        position="LEFT_TOP"
        className={[
          'SearchBar--block',
          classes.SearchBar,
          expanded ? 'expanded' : '',
        ].join(' ')}
      >
        <Grid
          container
          gutter={0}
          className={classes.SearchBarGrid}
          align="center"
        >
          <Grid
            item
            style={{
              height: 46,
            }}
          >
            <IconButton
              onClick={() => {
                // ???????? ???????????????????????? ???????????????????? ??????????, ???????????????????? ???????????????????? ????????
                if (!expanded) {
                  this.triggerGoal('searchButtonClicked')
                }

                this.setState({
                  expanded: !expanded,
                })
              }}
              style={{
                borderRadius: '50%',
                backgroundColor: expanded ? '' : 'rgba(255,255,255,0.5)',
                width: 35,
                height: 35,
                marginRight: 5,
                marginTop: 5,
              }}
              accent
            >
              {expanded ? <CloseIcon /> : <SearchIcon />}
            </IconButton>
          </Grid>

          {
            expanded ? (
              <Grid
                item
                xs
                // sm={6}
                // md={4}
                // lg={3}
              >
                <YandexSearch
                  includeSiteData={true}
                  // onNewRequest={(event, value, item) => {

                  // 	// onNewRequest && onNewRequest(event, value, item);
                  // }}
                  // onChange={(value) => {

                  // }}
                  map={map}
                  maps={maps}
                  placeholder="??????????"
                  textFieldProps={{
                    // style: {
                    // 	fontSize: 13,
                    // 	backgroundColor: "rgba(255,255,255,0.8)",
                    // },
                    className: 'textField',
                  }}
                />
              </Grid>
            ) : null
            // <Grid
            // 	item
            // 	onClick={() => this.setState({
            // 		expanded: !expanded,
            // 	})}
            // >
            // 	??????????
            // </Grid>
          }
        </Grid>
      </Control>
    )

    return content
  }
}
