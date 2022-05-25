import "./style.scss";
import { avisClient } from "../../datas/avis";

console.log(avisClient);

function Avis() {
  const client = avisClient;
  return (
   <div>
        <h1 className="titleAvis">Ma meilleure Pub c'est vous !</h1>
       <div className="containerAvis"> 
      {client.map((avis, index) => (
        <div
          key={index}
          class="talk-bubble tri-right border round btm-left-in "
        >
          <div class="talktext">
            <p>{avis.textAvis}</p> <p className="date">{avis.date}</p>
          </div>
        </div>
      )
      )}
    </div></div>
  );
}
export default Avis;
