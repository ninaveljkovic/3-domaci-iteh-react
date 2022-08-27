import logo from './logo.svg';
import './App.css';
import NavBar from './komponente/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './komponente/Pocetna';
import Frizure from './komponente/Frizure';
import Footer from './komponente/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Pocetna></Pocetna>}></Route>
            <Route path="/frizure" element={<Frizure></Frizure>}></Route>

          </Routes>
          <Footer></Footer>
       </BrowserRouter>
    </div>
  );
}

export default App;
