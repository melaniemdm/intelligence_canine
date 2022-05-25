import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';
import Prestations from '../src/components/Prestations';
import Pro from '../src/components/Pro';
import Particulier from '../src/components/Particuliers';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Header/>
  <Banner/>
  <Prestations/>
  <Pro/>
  <Particulier/>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
