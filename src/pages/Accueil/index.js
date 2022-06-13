import ScrollToTop from "react-scroll-to-top";
import Banner from "../../components/Banner";
import Presentation from "../../components/Presentation";
import Services from "../../components/Services";
import Pro from "../../components/Pro";
import Particulier from "../../components/Particuliers";
import Avis from "../../components/Avis";
import Contact from "../../components/Contact";



function Accueil(){
    return (<div>

<Banner />
        <Presentation />
        <Services />
        <Pro />
        <Particulier />
        <Avis />
        <Contact />
      
        <ScrollToTop />


    </div>);
}
export default Accueil;