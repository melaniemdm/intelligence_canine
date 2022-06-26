import ScrollToTop from "react-scroll-to-top";
import Banner from "../../components/Banner";
import Presentation from "../../components/Presentation";
import Services from "../../components/Services";
import Pro from "../../components/Pro";
import {nagano} from '../../datas/nag';
import {particuliers} from '../../datas/particuliers';
import Avis from "../../components/Avis";
import Contact from "../../components/Contact";

function Accueil() {
  return (
    <div>
      <Banner data={nagano.picturesBanner}/>
      <Presentation />
      <Services />
      <Pro />
      <Banner  data={particuliers.picturesBannerPart}/>
      <Avis />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
export default Accueil;
