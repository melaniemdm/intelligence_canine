import logo from '../../assets/logo.png';
import { HashLink as Link } from 'react-router-hash-link'
import './style.scss';

function Footer(){

    return (
        <footer>
<div className="containerLogoFooter">
    <img  alt="logo mdm development" src={logo} className="logoFooter" />
</div>

<div className="containerNavFooter"><div className="container teal borderYtoX">
<Link to="/accueil#ancreHeader" className="accueil">ACCUEIL</Link> 
      <Link to="/accueil#services" className="services">SERVICES</Link>
      <Link to="/accueil#pro" className="pro">PROFESSIONNELS</Link>
      <Link to="/accueil#particuliers" className="particuliers">PARTICULIERS</Link>
      <Link to="/gallery" className="gallery">GALLERY</Link>
      <Link to="/accueil#contactMe" className="contact">CONTACT</Link>
</div>
<div className="textFooter">
<a href="https://www.facebook.com/Intelligencecanine">
<img src='https://res.cloudinary.com/dja64divh/image/upload/v1673891089/INTELLIGENCE_CANINE/facebook_kzzqba_w4y7ic.webp'  alt="lien facebook" className="logoFacebook"/>
<div>&nbsp; Abonnez vous à la page facebook et venez voir par vous même  ! &nbsp;</div>
<img src='https://res.cloudinary.com/dja64divh/image/upload/v1673891117/INTELLIGENCE_CANINE/like_dv2lrq_e0jrnq.webp' alt="lien facebook" className="like"/></a>

</div><div className="mdm"> <a href="https://mdm-development.netlify.app/" alt="lien mdm">Site créé en partenariat avec mdm_development</a></div>
</div>

        </footer>
    )
}
export default Footer;