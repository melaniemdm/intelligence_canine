import PresentationNag from '../PresentationNag';
import PresentationLaurence from '../PresentationLaurence';
import './style.scss';


function Presentation(){
  
    return (<div>
        <h1 className="titlePresentation">Présentation</h1>
<div className="containerPresentations"><PresentationNag/>
  <PresentationLaurence/>
  </div> 


    </div>)
}
export default Presentation;

