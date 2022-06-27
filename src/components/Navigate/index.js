import './style.scss';
import { HashLink as Link } from 'react-router-hash-link'

function Navigate(){

    return(
        <div className='containerNav'>
<div className="container black circleBehind">

<nav className="navigate">
     <div className="navItem"><Link to="/accueil" className="accueil">ACCUEIL</Link> </div>
     <div className="navItem"> <Link to="/accueil#services" className="services">SERVICES</Link></div>
     <div className="navItem"> <Link to="/accueil#pro" className="pro">PROFESSIONNELS</Link></div>
     <div className="navItem"> <Link to="/accueil#particuliers" className="particuliers">PARTICULIERS</Link></div>
     <div className="navItem"> <Link to="/gallery" className="gallery">GALLERY</Link></div>
     <div className="navItem"> <Link to="/accueil#contactMe" className="contact">CONTACT</Link></div>
    </nav>

 
</div>



        </div>
    )
}
export default Navigate