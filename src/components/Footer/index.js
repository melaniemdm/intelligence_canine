import logo from '../../assets/logo.png';
import './style.scss';

function Footer(){

    return (
        <footer>
<div className="containerLogoFooter">
    <img  alt="logo mdm development" src={logo} className="logoFooter" />
</div>

<div className="containerNavFooter"><div class="container teal borderYtoX">
<a href=" ">HOME</a>
  <a href=" ">SERVICES</a>
  <a href=" ">PROFESSIONNELS</a>
  <a href=" ">PARTICULIERS</a>
  <a href=" ">Me contacter</a>
</div>
</div>
        </footer>
    )
}
export default Footer;