import './style.scss';
import {nosPrestations} from '../../datas/presta';
import ModalPrestations from '../ModalPrestations';
import {useEffect} from 'react';

function Prestations(){
  useEffect(() => {
    activateModal()   
}) 
    return (<div className="containerGlobalServices">
<h1 id="services">Mes services</h1>

<div className="containerServices">

 { nosPrestations.map((prestation,index)=> <div className="presta" key={index}><div className="content" ><div  className='containerOneServices'> 
 
 <h2 >{prestation.titlePresta}</h2>
    <p>{prestation.prix}</p>
 
 
  </div> </div> </div>)}
<ModalPrestations/>
  </div>
 




    </div>)
}
export default Prestations;

const activateModal = ()=>{
 
  const openModal = document.querySelectorAll(".containerOnePresta");
  console.log(openModal.length)
  openModal.forEach(modal=>{
   modal.addEventListener("click",openModalPrestation)
}) 
}


function openModalPrestation(){
   document.querySelector(".containerModal").style.display = "flex"; 
   console.log(document.querySelector(".containerModal")) 
   console.log("toto")
}