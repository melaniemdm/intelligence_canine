import './style.scss';
import {nosPrestations} from '../../datas/presta';
import ModalServices from '../ModalServices';
import {useEffect} from 'react';

function Services(){
  useEffect(() => {
    activateModal()   
}) 
    return (<div className="containerGlobalServices">
<h1 id="services">Mes services</h1>

<div className="containerServices">

 { nosPrestations.map((prestation,index)=> <div className="prestaServices" key={index}><div className="contentServices" ><div  className='containerOneServices'> 
 
 <h2 >{prestation.titlePresta}</h2>
    <p>{prestation.prix}</p>
 
 
  </div> </div> </div>)}
  <div>
{ nosPrestations.map((services,index)=><ModalServices title={services.titlePresta} detail={services.detail}/>)}
  </div></div>
 




    </div>)
}
export default Services;

const activateModal = ()=>{
 
  const openModal = document.querySelectorAll(".containerOneServices");
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