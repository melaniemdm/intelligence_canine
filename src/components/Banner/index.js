import './style.scss';
import React from 'react';
import { Slide   } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


function Banner(props){
 
   
   
        return (
          <div className="slide-container">
            <Slide   duration={1000} transitionDuration={3000}  cssClass='slideShow'  arrows={false} slidesToShow={1}>
              {
                props.data.map((each, index) => <img key={index} style={{width: "100%"}} src={ each} alt="images de chiens " className="slideShowImg"/>)
              }
            </Slide>
           
          </div>
        )
    }



export default Banner