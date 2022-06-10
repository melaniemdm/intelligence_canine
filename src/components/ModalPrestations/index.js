import './style.scss';
import {useEffect} from 'react'
function ModalPrestations(){
    useEffect(() => {
        activateBtn()   
    }) 
    return(
        <div className="containerModal">
<div className="modal">
    <div className="icon">!</div>
    <div className="content">
      <div className="header">Are you sure you want to do that?</div>
      <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi id soluta, numquam minima rerum doloremque eveniet aspernatur beatae commodi. Cupiditate recusandae ad repellendus quidem consectetur sequi amet aspernatur cumque!</div>
    
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
    document.querySelector(".containerModal").style.display = "none";  
}