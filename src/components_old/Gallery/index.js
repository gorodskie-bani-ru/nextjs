import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Editor as Gallery } from 'react-cms/src/app/components/Gallery'

export default Gallery

// import { DragDropContext } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';

// import Button from 'material-ui/Button';
// import Grid from 'material-ui/Grid';
// import AddIcon from 'material-ui-icons/Add';

// import Uploader from './Component';

// import './styles/styles.less';
// import GalleryImageWrapper from './Image/wrapper';

// class Gallery extends Component{

//   static propTypes = {
//     onSelectContactImage: PropTypes.func.isRequired,
//     updateItem: PropTypes.func.isRequired,
//     item: PropTypes.object.isRequired,
//   };

//   static contextTypes = {
//     connector_url: PropTypes.string.isRequired,
//     localQuery: PropTypes.func.isRequired,
//   };

// 	constructor(props){

// 		super(props);

// 		this.state = {
// 			expanded: false,
// 		}
// 	}

// 	componentWillMount(){

// 	}

// 	componentDidMount(){

// 	}

//   componentDidUpdate(){

//     if(this.props.debug){

//     }
//   }

//   updateItem(data){

//     const {
//       item,
//       updateItem,
//     } = this.props;

//     updateItem(item, data);

//   }

//   uploadImageCallBack = (file) => {

//   	let {
//       // store,
//   		item,
//   	} = this.props;

//     let {
//       connector_url,
//       localQuery,
//     } = this.context;

//     const {
//       id,
//     } = item;

//     return new Promise(
//       (resolve, reject) => {

//         var body = new FormData();

//         body.append('file', file);

//         fetch(connector_url +'?pub_action=images/upload',{
//           credentials: 'same-origin',
//           method: "POST",
//           body: body,
//         })
//           .then(function (response) {
//             return response.json()
//           })
//           .then(function (data) { ;

//             if(data.success){

//               if(data.object && data.object.url){

//                 let link = data.object.url;

//                 resolve({
//                   data: {
//                     link: link,
//                   }
//                 });

//                 // this.setState({
//                 //   url: data.object.url,
//                 // })

//                 // store.getDispatcher().dispatch(store.actions['CREATE'], {
//                 // 	src: data.object.url,
//                 // });

//                 // const {
//                 //   item,
//                 // } = this.props;

//                 localQuery({
//                   operationName: "addCompanyGalleryImage",
//                   variables: {
//                     companyId: id,
//                     image: link,
//                   },
//                 });

//                 this.setState({
//                 	expanded: false,
//                 });
//               }
//             }
//           }.bind(this))
//           .catch(function (error) {
//               console.error('Request failed', error);
//               // alert("???????????? ???????????????????? ??????????????");
//             }
//           );
//       }
//     );
//   }

//   onSelectImage = (event, checked, image) => {

//     let {
//       onSelectContactImage,
//       item,
//     } = this.props;

//     let {
//       _selectedImages,
//     } = item;

//     _selectedImages = _selectedImages || [];

//     if(checked){
//       _selectedImages.push(image.src);
//     }
//     else{
//       // let selectedImage = _selectedImages.indexOf(i => {return i === image});
//       let selectedImage = _selectedImages.indexOf(image);

//       if(selectedImage != -1){
//         _selectedImages.splice(selectedImage, 1);
//       }
//     }

//     // onSelectContactImage(image);

//     this.updateItem({
//       _selectedImages,
//     }, true);

//     this.forceUpdate();
//   }

//   handleDelete(event, index){

//     const {
//       item,
//     } = this.props;

//     if(!item){
//       return false;
//     }

//     let {
//       gallery,
//     } = item;

//     if(!gallery){
//       return;
//     }

//     // const index = gallery.indexOf(image);

//     if(index !== -1){
//       gallery.splice(index, 1);

//       this.updateItem({
//         gallery,
//       });
//     }

//   }

// 	render(){

// 		let {
// 			classes,
//       // store,
// 			item,
//       onSelectContactImage,
//       ...other
// 		} = this.props;

//     if(!item){
//       return null;
//     }

//     // return <div>sdfsdf</div>;

// 		let {
//       expanded,
//       draggableImage,
//       hoveredImage,
// 			positionIndex,
// 		} = this.state;

//     let newIndex;

//     if(positionIndex !== undefined && positionIndex != -1){
//       newIndex = positionIndex;
//     }

// 		let images = [];

//     // if(!item._selectedImages){
//     //   item._selectedImages = [];
//     // }

//     // let {_selectedImages} = item;

//     let {
//       // extended,
//       gallery,
//       _selectedImages,
//     } = item;

//     _selectedImages = _selectedImages || [];

//     // let {
//     //   gallery,
//     // } = extended || {};

//     let imagesArray = [];

//     gallery && gallery.map(n => {

//       const {
//         imageFormats,
//       } = n;

//       const {
//         slider_thumb: image,
//       } = imageFormats || {};

//       imagesArray.push({
//         src: image,
//       });

//     });

//     /*
//       ???????? ?????????????? ??????????????????, ???? ???????????????????? ?????? ?? ??????????????
//     */
//     if(newIndex !== undefined && imagesArray && imagesArray.length){
//       let oldIndex = imagesArray.findIndex(n => n.src == draggableImage);
//       // let newIndex = imagesArray.indexOf(hoveredImage);

//       if(oldIndex != -1){
//         let movedItem = imagesArray.splice(oldIndex, 1)[0];

//         imagesArray.splice(newIndex, 0, movedItem);
//       }
//     }

// 		imagesArray.map((image, index) => {
// 			images.push(<GalleryImageWrapper
//         // key={image.src || images.length}
// 				key={index}
//         image={image}
//         onSelectImage={this.onSelectImage}
//         checked={_selectedImages.find(i => {return i == image.src}) ? true : false}
//         draggableImage={draggableImage}
//         onStartDrag={(image) => {

//           this.setState({
//             draggableImage: image.src,
//           });
//         }}
//         handleDelete={event => {
//           this.handleDelete(event, index);
//         }}
//         onEndDrag={(image) => {

//           /*
//             ???????? ?????????? ???????????? ???????????????????? ???? ??????????????????, ?????????????????? ??????????????????
//           */
//           if(newIndex !== undefined){

//             // ???????????????????? ???????????????????????? ???????????? ???????????????????????? ????????????????
//             // let originalIndex = store.getState().indexOf(draggableImage);
//             let originalIndex = gallery.indexOf(n => n === draggableImage);

//             if(newIndex != originalIndex){

//               gallery.splice(newIndex, 0, gallery.splice(index, 1)[0]);

//               this.updateItem({
//                 gallery,
//               });

//             }

//           }

//           this.setState({
//             draggableImage: null,
//             hoveredImage: null,
//             positionIndex: undefined,
//           });
//         }}
//         onDdHover={(image) => {

//           if(draggableImage != image.src){

//             // let positionIndex = store.getState().indexOf(image);
//             let positionIndex = imagesArray.indexOf(image);

//             this.setState({
//               // hoveredImage: image,
//               positionIndex
//             });
//           }
//             // this.setState({
//             //   hoveredImage: image,
//             // });

//           // this.forceUpdate();
//         }}
//         isDragging2={draggableImage && draggableImage == image.src}
// 			>
// 			</GalleryImageWrapper>);
// 		});

//     // item && item.extends && item.extends.gallery && item.extends.gallery.map(image => {
//     //   images.push(<div
//     //     key={images.length}
//     //   >
//     //     <img
//     //       src={image}
//     //     />
//     //   </div>);
//     // });

// 		return <div
//       {...other}
//     >

//       <Uploader
//       	expanded={expanded}
//       	config={{
// 	    		uploadEnabled: true,
// 	    		urlEnabled: false,
//       		defaultSize: {
//       			height: 'auto',
//       			width: 'auto',
//       		},
//         	uploadCallback: this.uploadImageCallBack,
//       	}}
//       	onExpandEvent={() => {

//       	}}
//       	doCollapse={() => {
//       		this.setState({
//       			expanded: !this.state.expanded,
//       		});
//       	}}
//       	translations = {{
// 				  'generic.add': '????????????????',
// 				  'generic.cancel': '????????????????',
// 				  'components.controls.image.fileUpload': '??????????',
// 				  'components.controls.image.byURL': 'URL',
// 				  'components.controls.image.dropFileText': '?????????????????????? ?? ?????? ?????????????? ?????????? ?????? ???????????????? ?????? ????????????????',
//       	}}
//       >
//         <Button
//           fab
//           accent
//           raised
//           className={classes.createButton}
//           style={{
//             height: 30,
//             width: 30,
//             marginRight: 5,
//           }}
//           onClick={() => this.setState({
//             expanded: true,
//           })}
//         >
//           <AddIcon
//           />
//         </Button>  <span
//           style={{
//             cursor: "pointer",
//           }}
//           onClick={() => this.setState({
//           	expanded: true,
//           })}
//         >???????????????? ??????????????????????</span>
//       </Uploader>

//       <Grid
//         container
//       	className="gallery-wrapper"
//       >

//         {images}

//       </Grid>
// 		</div>;
// 	}
// }

// export default DragDropContext(HTML5Backend)(Gallery);
