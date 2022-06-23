
import './style.scss';

function PresentationLaurence(){

    return (
        <div className="containerPresentation">
<div id="card">
    <div id="card-title">
      <h1>Carte d'identité</h1>
    </div>
    <div id="card-id">
      <div id="card-number">
        <p className="cardtitle"> </p>
       
      </div>
      
    </div>
    <div id="card-information">
      <div id="photoProfilLaurence">
<img src={process.env.PUBLIC_URL + '/assets/love.jpg'} alt="photoNag" />

      </div>
      <div id="card-text">
      <div id="card-name">
        <div className="card-box"></div>
        <p className="cardtitle">Nom :</p>
        <p>Laurence</p>
        <div className="card-box"></div>
        <p className="cardtitle">Petit nom :</p>
        <p>Tata</p>
        <div className="card-box"></div>
        <p className="cardtitle">Profession :</p>
        <p>Apprentie Educteur Canin</p>
      </div>
      <div id="card-detail">
            
        
      </div>
      <div id="card-sign">
        <p className="cardtitle">Signature du titulaire :</p>
        <div >
        <img src={process.env.PUBLIC_URL +'/assets/empreinteHumaine.webp' }alt="photoNag" className="signatureLaurence"/>
        </div>
      </div> 
      </div>
    </div>
    <div id="card-code">
      <div> &rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;  &rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;</div>
    </div>
  </div>

        </div>
    )
}
export default  PresentationLaurence;