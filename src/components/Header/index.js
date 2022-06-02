import './style.scss';
import logoImg from '../../assets/logo.png';
import Navigate from '../Navigate'

function Header(){

    return (
        <header>
        <div className="containerHeader">
            <div className="containerLogo">
                <img src={logoImg} alt="logo intelligence Canine" className="logoImg" id="home"/>
               <div className="nom">Intelligence Canine </div> 
            </div>
            <Navigate/>
             </div></header>
    )
}
export default Header