import './style.scss';
import {nagano} from '../../datas/nag';

import React from 'react';
import { Slide   } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


console.log(nagano)

function Banner(){
 
    const images = nagano.picturesBanner;
    
   
        return (
          <div className="slide-container">
            <Slide   duration={1000} transitionDuration={3000}  cssClass='slideShow'  arrows={false} slidesToShow={2}>
              {
                images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt="images de nagano " className="slideShowImg"/>)
              }
            </Slide>
          </div>
        )
    }



export default Banner