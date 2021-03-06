import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "../pages/Accueil";
import GalleryPage from "../pages/GalleryPage";
import Header from "../components/Header";

import Footer from "../components/Footer";

function CustomsRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/accueil" element={<Accueil />} />
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/gallery" element={<GalleryPage />} />

        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default CustomsRoutes;
