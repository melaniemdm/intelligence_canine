import './style.scss';
import {nosPrestations} from '../../datas/presta';

console.log(nosPrestations)

function Prestations(){
   
    return (<div className="containerGlobal">
<h1 id="services">Mes services</h1>

<div className="containerPrestations">

 { nosPrestations.map((prestation,index)=> <div className="presta" key={index}><div className="content" ><div  className='containerOnePresta'> 
 
 <h2 >{prestation.titlePresta}</h2>
    <p>{prestation.prix}</p>
 
 
  </div> </div> </div>)}

  </div>
 




    </div>)
}
export default Prestations;