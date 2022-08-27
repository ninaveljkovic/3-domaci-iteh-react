import Kartica from "./Kartica";

function Frizure({frizure}) {
    return (
    <div className="row">
          {frizure.map((f)=> <div className="col-sm-3"><Kartica  key={f.id} f={f}></Kartica><br /></div>)}
      </div>
    );
  }
  
  export default Frizure;
  