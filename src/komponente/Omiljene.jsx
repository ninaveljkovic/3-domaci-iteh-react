import Kartica from "./Kartica";

function Omiljene({frizure,kriterijum,izbaci}) {
    return (
    <div className="row">
        {kriterijum==""
        ?
        frizure.map((f)=> <div   key={f.id} className="col-sm-3"><Kartica  key={f.id} f={f} mod={2} izbaci={izbaci}></Kartica><br /></div>)
        :
        <>
        {frizure
        .filter((f)=>f.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((f)=> <div   key={f.id} className="col-sm-3"><Kartica  key={f.id} f={f} mod={2} izbaci={izbaci}></Kartica><br /></div>)}

        </>
        }
           
      </div>
    );
  }
  
  export default Omiljene;
  