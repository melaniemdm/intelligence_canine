import './style.scss';
import { HashLink as Link } from 'react-router-hash-link'

function Navigate(){

    return(
        <div className='containerNav'>
<div className="container black circleBehind">

<nav className="navigate">
      <Link to="/accueil" className="accueil">ACCUEIL</Link> 
      <Link to="/accueil#services" className="services">SERVICES</Link>
      <Link to="/accueil#pro" className="pro">PROFESSIONNELS</Link>
      <Link to="/accueil#particuliers" className="particuliers">PARTICULIERS</Link>
      <Link to="/gallery" className="gallery">GALLERY</Link>
      <Link to="/accueil#contactMe" className="contact">CONTACT</Link>
    </nav>

 
</div>



        </div>
    )
}
export default Navigate