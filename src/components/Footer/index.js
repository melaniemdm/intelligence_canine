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
</div>
        </footer>
    )
}
export default Footer;