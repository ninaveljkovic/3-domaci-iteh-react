import logo from './logo.svg';
import './App.css';
import NavBar from './komponente/NavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar></NavBar>
       </BrowserRouter>
    </div>
  );
}

export default App;
