import Kartica from "./Kartica";

function Omiljene({frizure,kriterijum}) {
    return (
    <div className="row">
        {kriterijum==""
        ?
        frizure.map((f)=> <div className="col-sm-3"><Kartica  key={f.id} f={f}></Kartica><br /></div>)
        :
        <>
        {frizure
        .filter((f)=>f.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((f)=> <div className="col-sm-3"><Kartica  key={f.id} f={f}></Kartica><br /></div>)}

        </>
        }
           
      </div>
    );
  }
  
  export default Omiljene;
  