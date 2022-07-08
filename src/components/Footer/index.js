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
<img src={process.env.PUBLIC_URL + '/assets/facebook.png'}  alt="lien facebook" className="logoFacebook"/>
<div>&nbsp; Abonnez vous à la page facebook et venez voir par vous même  ! &nbsp;</div>
<img src={process.env.PUBLIC_URL + '/assets/like.png'} alt="lien facebook" className="like"/></a>

</div><div className="mdm"> <a href="https://mdm-development.netlify.app/" alt="lien mdm">Create in partnership with mdm_delopement</a></div>
</div>

        </footer>
    )
}
export default Footer;