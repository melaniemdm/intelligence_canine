import './style.scss';
import {useEffect} from 'react';

function Services(){
const txt =["Bonjour, je suis Laurence pour mes clients et tata Laurence pour vos 4 pattes.",<br></br>,
"Je suis éducatrice canin Comportementaliste diplômée, déclarée et recommandée par des professionnels.",<br></br>,
" Je suis l’heureuse propriétaire de Nagano mon bras droit, un magnifique labrador typé lignée américaine avec ses 44 kg.",<br></br>, 
"Nagano est un chien professeur depuis l’âge de ses 1 an, c’est mon binôme indispensable sur les cours d’éducation.",<br></br>,
"Sa zen attitude me permet de travailler tout type de troubles de comportement canin.",<br></br>,
"Quant à moi, je suis avant tout une passionnée et comme je n’aime pas parler de moi mais plutôt de mon chien ou des vôtres , ce sont mes clients qui parleront le mieux de moi alors je vous laisse parcourir les avis laissés par mes clients. Ma pub c’est vous et rien que vous.",<br></br>,
"Caninement vôtre Laurence et Nagano"];

  useEffect(() => {
    activateModal()   
}) 
    return (<div className="containerGlobalBinome">
<h1 id="services">Présentation du bînome</h1>

<div className="containerBinome">

 <div className="binome" ><div className="contentBinome" ><div  className='containerOneServices'> 
 
 <h2 >En quelques mots... </h2>
 <div className="txtPres">{txt }</div>
 
 
  </div> </div> </div>

  
  
  </div>
 
 



    </div>)
}
export default Services;

const activateModal = ()=>{
 
  const openModal = document.querySelectorAll(".binome");
  console.log(openModal.length)
  openModal.forEach(modal=>{
   modal.addEventListener("click",openModalPrestation)
}) 
}


function openModalPrestation(e){ 
  const closeModal = document.querySelectorAll(".containerModal");  
  closeModal.forEach(modal=>modal.style.display="none")
   document.querySelector('.'+ e.currentTarget.id ).style.display = "flex"; 
  
}