import "./style.scss";
import { avisClient } from "../../datas/avis";

console.log(avisClient);

function Avis() {
  const client = avisClient;
  return (
   <div className="containerAvis">
        <h1 className="titleAvis">Ma meilleure Pub c'est vous !</h1>
       <div className="cardAvis"> 
      {client.map((avis, index) => (
        <div
          key={index}
          className="talk-bubble tri-right border round btm-left-in "
        >
          <div className="talktext">
            <p>{avis.textAvis}</p> <p className="date">{avis.date}</p>
          </div>
        </div>
      )
      )}
     

    </div>
    <div className="containerLienAvis"><a href="https://www.facebook.com/Intelligencecanine">
     <div className="infoSupp">Retrouvez plus d'avis sur ma page Facebook......</div>

       </a></div>
    
    </div>
  );
}
export default Avis;
