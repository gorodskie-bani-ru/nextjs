import React, { Component } from 'react'

import PropTypes from 'prop-types'

import SvgIcon from 'material-ui/SvgIcon'

export default class ManIcon extends Component {
  static propTypes = {}

  static contextTypes = {}

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { viewBox, ...other } = this.props

    return (
      <SvgIcon viewBox="0 0 280.16 280.16" {...other}>
        <g>
          <path d="m190.579,131.953c11.746-13.99 19.106-32.749 19.106-53.648 0-43.503-31.322-78.305-69.605-78.305s-69.605,34.802-69.605,78.305c0,20.899 7.343,39.657 19.106,53.648-35.272,6.717-62.609,38.126-62.609,75.121v59.164c0,5.22 3.48,8.701 8.701,8.701s8.701-3.48 8.701-8.701v-59.164c0-33.062 26.102-59.164 59.164-59.164h5.273c0.452,0.261 0.887,0.574 1.34,0.818-1.601,3.445-3.01,8.127-1.392,11.363l3.48,12.181c2.001,4.994 5.847,9.223 10.614,12.094l-15.835,69.692c-1.74,3.48 0,6.96 3.48,8.701l24.362,15.661c1.74,1.74 3.48,1.74 5.22,1.74 1.74,0 3.48,0 5.22-1.74l24.362-15.661c3.48-1.74 3.48-5.22 3.48-8.701l-15.783-69.448c4.82-2.854 9.205-7.187 12.303-12.338l3.48-12.181c1.74-3.48 0-8.701-1.74-12.181h5.22c33.062,0 59.164,26.102 59.164,59.164v59.164c0,5.22 3.48,8.701 8.701,8.701 5.22,0 8.701-3.48 8.701-8.701v-59.164c0-36.994-27.337-68.404-62.609-75.121zm-40.058,35.099c0,1.74-3.48,3.48-5.22,3.48h-12.181c-1.74,0-5.22-1.74-5.22-3.48l-1.74-6.96h26.102l-1.741,6.96zm-10.441-149.651c29.582-1.06581e-14 52.204,27.842 52.204,60.904s-22.621,60.904-52.204,60.904-52.204-27.842-52.204-60.904 22.623-60.904 52.204-60.904zm0,245.357l-13.921-10.441 13.921-62.644 13.921,62.644-13.921,10.441z" />
        </g>
      </SvgIcon>
    )
  }
}
