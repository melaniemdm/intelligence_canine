import "./style.scss";
import {proTrust} from '../../datas/pro';


console.log(proTrust)

function Pro() {
  return (
   

  <div className="containerProTrust" id="pro">
<h1 >Eleveurs, Vétérinaires, ils me font confiance</h1>

<div className="containerNamePro">

 { proTrust.map(((pro,index)=> <div className="trust" key={index}><div className="content" ><div  className='containerOnePresta'> 
 
 <div className="namePro">{pro.namePro}</div><br></br>
  <div className="villePro"> {pro.ville} </div> <br></br>
  
  <div className="detailPro"> {pro.détail}  </div>
 
  </div> </div> </div>))}

 
  </div>
 
 </div>)


}
export default Pro;
