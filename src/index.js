import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import ScrollToTop from "react-scroll-to-top";
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';
import Presentation from '../src/components/Presentation';
import Prestations from '../src/components/Prestations';
import Pro from '../src/components/Pro';
import Particulier from '../src/components/Particuliers';
import Avis from '../src/components/Avis';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
  <Header/>
  <Banner/>
 <Presentation/>
  <Prestations/>
  <Pro/>
  <Particulier/>
  <Avis/>
  <Contact/>
  <Footer/>
 <ScrollToTop /></div>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
