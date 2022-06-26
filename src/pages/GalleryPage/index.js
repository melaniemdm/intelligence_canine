import {picturesGallery} from '../../datas/galleryImg';
import {videosGallery} from '../../datas/galleryMp4';
import Gallery from '../../components/Gallery';
import './style.scss';

function GalleryPages(){
  return(
    <div>
<div className="separator"></div>
<Gallery data={videosGallery}/>
<div className="separator"></div>
<Gallery data={picturesGallery}/>
<div className="separator"></div>
    </div>
  )
}
export default GalleryPages;