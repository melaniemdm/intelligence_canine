import './style.scss';
import {useEffect} from 'react';

function ModalPrestations(props){
    useEffect(() => {
        activateBtn()   
    }) 
    return(
        <div className={"containerModal service_"+ props.idService}>
<div className="modal">
    <div className="containerIconModal">
    <div className="iconModal">!</div></div>
    <div className="contentModal">
      <div className="titlePrestaDetail">{props.title}</div>
      <div className="text">{props.detail}</div>
    
    </div>
    <div className="close-button">  ✖  </div>
    
  </div>




        </div>
    )
}
export default ModalPrestations;


const activateBtn = ()=>{
   const closeModal = document.querySelectorAll(".close-button");
closeModal.forEach(modal=>{
    modal.addEventListener("click",closeModalPrestation)
}) 
}


function closeModalPrestation(){
    const closeModal = document.querySelectorAll(".containerModal");  
    closeModal.forEach(modal=>modal.style.display="none")
   
}