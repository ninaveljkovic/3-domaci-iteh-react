function Kartica({f,dodaj}) {


    return (
    <div className="card"   >
        <img src={f.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{f.naziv}</h5>
          <p className="card-text">{f.opis} <br /> Cena: {f.cena}</p>
          <button className="btn btn-primary" onClick={()=>dodaj(f.id)}>Dodaj u omiljene</button>
        </div>
      </div>
    );
  }
  
  export default Kartica;
  


