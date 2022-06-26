import './style.scss';
import React from 'react'
import Carousel from 'better-react-carousel'

const Gallery = (props) => {
  return (<div className="containerGallery">
  <Carousel cols={2} rows={1} gap={10} loop >
      {props.data.map((picture, index) => {
        if (picture.original.includes("mp4")){
      //video
      return <Carousel.Item key={index}>
      <video className='videoDog' controls autoPlay={false}>
        <source  height="100%" src={picture.original}
        type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </Carousel.Item>} 
    
    //image
      return <Carousel.Item key={index}>
       <img className='imgDog' width="100%" src={picture.original} alt=""/>
     </Carousel.Item>
            
      }) }
 
    </Carousel>
   
    
    </div>)
}
export default Gallery;