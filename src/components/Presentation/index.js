import PresentationNag from '../PresentationNag';
import PresentationLaurence from '../PresentationLaurence';
import Binome from '../Binome';
import './style.scss';


function Presentation(){
  
    return (<div>
        <h1 className="titlePresentation">Présentation</h1>
<div className="containerPresentations"><PresentationNag/>
  <PresentationLaurence/>
  </div> 

<Binome/>
    </div>)
}
export default Presentation;

