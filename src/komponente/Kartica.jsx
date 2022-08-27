function Kartica({f}) {


    return (
    <div className="card"   >
        <img src={f.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{f.naziv}</h5>
          <p className="card-text">{f.opis} <br /> Cena: {f.cena}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
  
  export default Kartica;
  


