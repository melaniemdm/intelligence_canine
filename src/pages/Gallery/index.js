import ImageGallery from 'react-image-gallery';
import {picturesGallery} from '../../datas/gallery';
import './style.scss';
import "react-image-gallery/styles/css/image-gallery.css";


  
  function Gallery() {
    return( <div className="containerGallery">
    <ImageGallery  showBullets='true' items={picturesGallery} />


    
    
    </div>
    )
  }
  export default Gallery;