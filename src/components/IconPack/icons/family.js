import React, { Component } from 'react'

import PropTypes from 'prop-types'

import SvgIcon from 'material-ui/SvgIcon'

export default class FamilyIcon extends Component {
  static propTypes = {}

  static contextTypes = {}

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { viewBox, ...other } = this.props

    return (
      <SvgIcon viewBox="0 0 412.053 412.053" {...other}>
        <path
          id="XMLID_173_"
          d="M396.399,67.735c-2.731-14.978-9.574-28.905-19.791-40.284c-0.02-0.022-0.039-0.045-0.059-0.067
	c-5.233-5.909-13.905-14.033-25.497-19.181l-0.264-0.117C339.6,2.72,327.594,0,315.105,0c-18.47,0-35.94,5.962-50.522,17.243
	c-0.014,0.011-0.08,0.063-0.098,0.076c-12.536,9.789-20.809,23.777-21.833,25.559h0c-0.046,0.078-0.091,0.157-0.134,0.236
	c-6.577,12.058-10.053,25.726-10.053,39.527c0,2.866,0.15,5.767,0.448,8.621c0.277,2.667,1.873,5.017,4.248,6.26
	c1.504,0.787,3.076,1.442,4.691,1.96c6.438,19.706,20.499,35.466,38.375,44.329c-7.663,3.914-14.545,9.089-20.498,15.418
	c-3.027,3.218-2.872,8.281,0.347,11.308c3.218,3.026,8.281,2.871,11.308-0.347c2.861-3.042,5.992-5.744,9.369-8.088
	c4.843,13.721,17.325,23.773,31.522,23.773h1.194c14.221,0,26.691-10.773,31.248-25.35c16.893,10.59,27.701,29.458,27.701,49.641
	v83.099l-72.764,47.215c-3.707,2.405-4.762,7.359-2.356,11.065c1.532,2.361,4.099,3.646,6.718,3.646c1.493,0,3.002-0.417,4.347-1.29
	l76.409-49.58c2.273-1.475,3.646-4.001,3.646-6.711v-87.444c0-28.331-15.816-53.725-40.812-66.396
	c23.671-11.814,40.41-35.658,42.05-63.429c2.258-2.047,4.221-4.452,5.791-7.157C396.404,71.54,396.741,69.607,396.399,67.735z
	 M313.47,169.876h-1.194c-9.574,0-17.663-9.28-17.663-20.265c0-0.137-0.003-0.273-0.01-0.409c6.203,1.631,12.691,2.494,19.344,2.494
	c5.686,0,11.235-0.634,16.572-1.835C329.893,160.677,322.195,169.876,313.47,169.876z M313.946,135.696
	c-24.123,0-45.512-14.37-54.882-35.91c11.108-3.142,19.605-12.566,21.397-24.173c4.773,0.613,9.61,0.922,14.463,0.922
	c16.272,0,31.948-3.411,45.987-9.943c3.618,12.425,15.11,21.531,28.688,21.531c0.99,0,1.974-0.05,2.949-0.148
	C366.907,115.155,342.701,135.696,313.946,135.696z M369.599,72.124c-7.649,0-13.872-6.221-13.872-13.869v-4.452
	c0-2.911-1.581-5.592-4.129-7.001c-2.549-1.41-5.661-1.323-8.125,0.226c-14.077,8.837-30.865,13.508-48.55,13.508
	c-6.916,0-13.786-0.729-20.419-2.167c-2.363-0.513-4.833,0.072-6.717,1.591c-1.883,1.519-2.978,3.808-2.978,6.227v4.853
	c0,7.647-6.222,13.869-13.87,13.869c-0.524,0-1.042-0.029-1.554-0.086c-0.119-0.018-0.238-0.033-0.357-0.045
	c-0.179-0.024-0.356-0.053-0.533-0.084c-0.021-0.686-0.032-1.37-0.032-2.052c0-11.1,2.785-22.088,8.055-31.783
	c0.021-0.039,0.043-0.077,0.06-0.106c0.068-0.123,7.294-12.65,17.741-20.813c0.021-0.017,0.048-0.037,0.053-0.041
	C286.126,20.806,300.211,16,315.105,16c10.075,0,19.753,2.191,28.764,6.512c0.156,0.075,0.387,0.18,0.689,0.313
	c8.897,3.952,15.728,10.348,19.918,15.059c0.046,0.054,0.093,0.107,0.141,0.161c7.55,8.377,12.826,18.469,15.374,29.354
	C377.374,70.363,373.59,72.124,369.599,72.124z M245.81,276.808c18.128-10.667,30.322-30.386,30.322-52.897
	c0-10.13-2.47-19.696-6.837-28.125c-0.157-0.354-0.336-0.691-0.536-1.011c-10.386-19.154-30.676-32.191-53.954-32.191
	c-23.283,0-43.577,13.041-53.96,32.204c-0.194,0.312-0.369,0.641-0.522,0.985c-4.373,8.432-6.844,18.002-6.844,28.138
	c0,22.507,12.188,42.222,30.311,52.89c-22.433,11.597-36.643,34.617-36.643,60.093v29.178c0,2.735,1.397,5.28,3.704,6.749
	l59.659,37.98c1.311,0.834,2.803,1.251,4.296,1.251c1.484,0,2.968-0.412,4.273-1.237l59.8-37.781
	c2.332-1.473,3.74-4.043,3.727-6.801l-0.141-29.377C282.343,311.32,268.148,288.376,245.81,276.808z M214.805,178.584
	c13.925,0,26.401,6.31,34.723,16.222c-10.78,3.089-22.602,4.7-34.721,4.7c-12.123,0-23.946-1.611-34.725-4.7
	C188.404,184.894,200.881,178.584,214.805,178.584z M169.478,223.911c0-5.197,0.879-10.194,2.497-14.847
	c13.201,4.228,27.85,6.442,42.832,6.442c14.978,0,29.625-2.214,42.828-6.442c1.618,4.653,2.497,9.65,2.497,14.847
	c0,24.993-20.333,45.327-45.327,45.327C189.812,269.238,169.478,248.904,169.478,223.911z M229.005,283.579
	c-1,7.568-7.638,12.684-13.644,12.684h-0.974c-6.361,0-13.425-5.38-14.34-12.82c4.728,1.172,9.672,1.795,14.757,1.795
	C219.69,285.238,224.446,284.663,229.005,283.579z M214.822,394.58l-51.676-32.898v-24.787c0-17.591,8.888-33.653,23.275-43.119
	c4.999,11.407,16.783,18.487,27.966,18.487h0.974c12.073,0,22.745-7.857,27.355-18.773c14.595,9.41,23.663,25.598,23.748,43.443
	l0.12,24.944L214.822,394.58z M157.359,179.842c2.332-3.753,1.18-8.686-2.572-11.018c-2.436-1.514-4.962-2.887-7.554-4.109
	c9.886-5.054,18.631-12.293,25.573-21.348c2.859,0.992,5.928,1.532,9.12,1.532c15.373,0,27.88-12.507,27.88-27.88V97.138
	c0-25.272-9.654-49.207-27.183-67.394C165.144,11.61,141.678,1.076,116.548,0.082c-0.002,0-0.005,0-0.007,0
	c-2.184-0.084-4.217-0.104-6.216-0.055c-25.018,0.604-48.617,10.73-66.45,28.512c-18.283,18.23-28.352,42.593-28.352,68.6v19.881
	c0,15.373,12.507,27.88,27.881,27.88c3.192,0,6.26-0.539,9.118-1.531c7.647,9.974,17.483,17.745,28.622,22.819
	c-24.685,12.982-39.953,38.112-39.953,65.94v65.484c0,2.71,1.372,5.236,3.646,6.711l72.575,47.091
	c1.345,0.873,2.854,1.29,4.347,1.29c2.619,0,5.187-1.286,6.718-3.646c2.405-3.707,1.35-8.661-2.356-11.065l-68.93-44.726v-61.139
	c0-18.51,8.619-35.505,23.058-46.472c4.952,14.37,17.668,25.167,31.728,25.167h1.194c15.27,0,27.458-13.822,31.75-29.264
	c0.477,0.278,0.95,0.563,1.419,0.854C150.094,184.747,155.027,183.594,157.359,179.842z M63.19,68.063
	c-5.172,8.784-7.906,18.838-7.906,29.076v19.881c0,3.79-1.784,7.171-4.557,9.348c-0.238,0.155-0.465,0.321-0.681,0.497
	c-1.897,1.285-4.184,2.035-6.643,2.035c-6.551,0-11.88-5.329-11.88-11.88V97.138c0-44.413,34.784-80.043,79.185-81.117
	c1.66-0.041,3.365-0.023,5.213,0.048c43.673,1.731,77.884,37.34,77.884,81.069v19.881c0,6.551-5.33,11.88-11.881,11.88
	c-2.459,0-4.747-0.751-6.645-2.036c-0.215-0.175-0.441-0.34-0.678-0.495c-2.773-2.177-4.558-5.559-4.558-9.349V97.138
	c0-28.238-21.036-52.64-48.932-56.761c-2.193-0.326-4.422,0.276-6.155,1.658c-1.733,1.382-2.816,3.42-2.99,5.63
	c-0.439,5.592-1.453,11.106-3.022,16.457H70.083C67.25,64.122,64.627,65.621,63.19,68.063z M113.171,194.823h-1.194
	c-9.044,0-17.921-10.979-17.921-22.166c0-0.69-0.089-1.369-0.259-2.02c6.076,1.545,12.403,2.35,18.868,2.35
	c6.12,0,12.118-0.722,17.895-2.109C130.016,182.511,121.212,194.823,113.171,194.823z M112.665,156.987
	c-18.646,0-35.855-8.489-47.161-22.99c3.622-4.705,5.779-10.595,5.779-16.978V97.138c0-5.893,1.254-11.698,3.652-17.016h39.783
	c3.349,0,6.343-2.085,7.504-5.227c2-5.41,3.509-10.991,4.513-16.675c16.017,5.83,27.309,21.343,27.309,38.918v19.881
	c0,6.383,2.157,12.273,5.78,16.978C148.519,148.499,131.311,156.987,112.665,156.987z"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </SvgIcon>
    )
  }
}
