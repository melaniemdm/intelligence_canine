import './style.scss';


function PresentationNag(){

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
  <div id="photoProfilNag">
<img src={process.env.PUBLIC_URL + '/assets/nag.jpg'} alt="photoNag" />

  </div>
  <div id="card-text">
  <div id="card-name">
    <div className="card-box"></div>
    <p className="cardtitle">Nom :</p>
    <p>Nagano</p>
    <div className="card-box"></div>
    <p className="cardtitle">Petit nom :</p>
    <p>Nag</p>
    <div className="card-box"></div>
    <p className="cardtitle">Profession :</p>
    <p>Professeur Canin</p>
  </div>
  <div id="card-detail">
        
    
  </div>
  <div id="card-sign">
    <p className="cardtitle">Signature du titulaire :</p>
    <div >
    <img src={process.env.PUBLIC_URL +'/assets/empreinte.png' }alt="photoNag" className="signatureNag"/>
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
export default  PresentationNag;