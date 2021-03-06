import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { DragSource } from 'react-dnd'

import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Grid from 'material-ui/Grid'
import Checkbox from 'material-ui/Checkbox'
import DeleteIcon from 'material-ui-icons/Clear'

const defaultProps = {}

const knightSource = {
  beginDrag(props) {
    const { onStartDrag, image } = props

    onStartDrag(image)

    // this.setState({
    // 	dragging: true,
    // });
    return {}
  },

  endDrag(props) {
    const { onEndDrag, image } = props

    onEndDrag(image)

    // this.setState({
    // 	dragging: true,
    // });
    return {}
  },
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

class GalleryImage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {}

  componentDidMount() {}

  componentDidUpdate() {
    if (this.props.debug) {
    }
  }

  render() {
    const { image, checked, onSelectImage, handleDelete } = this.props

    const { dragging } = this.state

    const { connectDragSource, isDragging, isDragging2 } = this.props

    const style = {}

    // if(isDragging){
    if (isDragging2) {
      Object.assign(style, {
        // display: 'none',
        border: '2px dashed #ddd',
      })
    }

    return (
      <div style={style}>
        <div>
          {/*<Checkbox 
					checked={checked}
					onChange={(event, checked) => {
						onSelectImage(event, checked, image);
					}}
				/>*/}

          {(handleDelete && (
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          )) ||
            null}
        </div>

        {connectDragSource(
          <img
            style={{
              // opacity: isDragging ? 0.5 : 1,
              opacity: isDragging2 ? 0.5 : 1,
              // cursor: dragging ? 'move' : 'default',
              cursor: 'move',
            }}
            src={image.src}
          />
        )}
      </div>
    )
  }
}

GalleryImage.defaultProps = defaultProps

GalleryImage.propTypes = {
  image: PropTypes.object.isRequired,
  onSelectImage: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  onStartDrag: PropTypes.func.isRequired,
  onEndDrag: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
}

export default DragSource('GalleryImage', knightSource, collect)(GalleryImage)
