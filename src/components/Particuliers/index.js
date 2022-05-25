import './style.scss';
import {particuliers} from '../../datas/particuliers';

import React from 'react';
import { Zoom    } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


console.log(particuliers)

function BannerParticuliers(){
 
    const images = particuliers.picturesBannerPart;
    
   
        return (
          <div className="slide-container">
              <h1 className="titleTrustPart">Ils m'ont fait confiance ! </h1>
            <Zoom    duration={1000} transitionDuration={3000}  cssClass='slideShow'  arrows={false} >
              {
                images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt="images des élèves " className="slideShowImgPart"/>)
              }
            </Zoom>
          </div>
        )
    }



export default BannerParticuliers