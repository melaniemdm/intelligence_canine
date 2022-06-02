import logo from '../../assets/logo.png';

import './style.scss';

function Footer(){

    return (
        <footer>
<div className="containerLogoFooter">
    <img  alt="logo mdm development" src={logo} className="logoFooter" />
</div>

<div className="containerNavFooter"><div class="container teal borderYtoX">
<a href="#home">HOME</a>
  <a href="#services">SERVICES</a>
  <a href="#pro">PROFESSIONNELS</a>
  <a href="#particuliers">PARTICULIERS</a>
  <a href="#contactMe">Me contacter</a>
</div>
<div className="textFooter">
<a href="https://www.facebook.com/Intelligencecanine">
<img src="./assets/facebook.png" alt="lien facebook" className="logoFacebook"/>
<div>&nbsp; Abonnez vous à la page facebook et venez voir par vous même  ! &nbsp;</div>
<img src="./assets/like.png" alt="lien facebook" className="like"/></a>

</div>
</div>
        </footer>
    )
}
export default Footer;