import Kartica from "./Kartica";

function Frizure({frizure,kriterijum,dodaj}) {
    return (
    <div className="row">
        {kriterijum==""
        ?
        frizure.map((f)=> <div  key={f.id} className="col-sm-3"><Kartica dodaj={dodaj} key={f.id} f={f} mod={1}></Kartica><br /></div>)
        :
        <>
        {frizure
        .filter((f)=>f.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((f)=> <div  key={f.id} className="col-sm-3"><Kartica dodaj={dodaj}  key={f.id} f={f} mod={1}></Kartica><br /></div>)}

        </>
        }
           
      </div>
    );
  }
  
  export default Frizure;
  