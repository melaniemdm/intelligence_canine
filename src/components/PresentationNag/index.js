import './style.scss';


function PresentationNag(){

    return (
        <div>
<div id="card">
    <div id="card-title">
      <h1>Carte d'identité</h1>
    </div>
    <div id="card-id">
      <div id="card-number">
        <p className="cardtitle">Carte nationale d'identité </p>
       
      </div>
      
    </div>
    <div id="card-information">
      <div id="photoProfilNag">
<img src={process.env.PUBLIC_URL + '/assets/adultNag.jpg'} alt="photoNag" />

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
        <p>Educteur Canin</p>
      </div>
      <div id="card-detail">
        <div className="card-box">
          <p className="cardtitle">Sexe :</p>
          <p>M</p>
        </div>
       
        
      </div>
      <div>
        <p className="cardtitle">Signature du titulaire :</p>
        <div id="cardsign">
        <img src={process.env.PUBLIC_URL + '/assets/empreinte.png'} alt="photoNag" className="signatureNag"/>
        </div>
      </div> 
      </div>
    </div>
    <div id="card-code">
      <div> &rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;  &rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;  &rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;&rsaquo;</div>
    </div>
  </div>

        </div>
    )
}
export default  PresentationNag;