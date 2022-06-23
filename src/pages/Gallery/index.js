
import {picturesGallery} from '../../datas/gallery';
import './style.scss';


  
  // function Gallery() {
  //   return( <div className="containerGallery">
  //    items={picturesGallery} 


    
    
  //   </div>
  //   )
  // }
  // export default Gallery;

  import React from 'react'
import Carousel from 'better-react-carousel'

const Gallery = () => {
  return (<div className="containerGallery">
  <Carousel cols={2} rows={1} gap={10} loop >
      { picturesGallery.map((picture, index) => {
        if (picture.original.includes("mp4")){
      //video
      return <Carousel.Item>
      <video className='videoDog' controls autoplay="true">
        <source  height="100%" src={picture.original}
        type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </Carousel.Item>} 
    
    //image
      return <Carousel.Item>
       <img className='imgDog' width="100%" src={picture.original} alt=""/>
     </Carousel.Item>
            
      }) }
 
    </Carousel></div>)
}
export default Gallery;