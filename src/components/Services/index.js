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

 { nosPrestations.map((prestation,index)=> <div className="prestaServices" key={index} id={"service_"+ prestation.idService}><div className="contentServices" ><div  className='containerOneServices'> 
 
 <h2 >{prestation.titlePresta}</h2>
    <p>{prestation.prix}</p>
 
 
  </div> </div> </div>)}
  <div>
{ nosPrestations.map((services,index)=><ModalServices key={index} title={services.titlePresta} detail={services.detail} idService={services.idService}/>)}
  </div></div>
 




    </div>)
}
export default Services;

const activateModal = ()=>{
 
  const openModal = document.querySelectorAll(".prestaServices");
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