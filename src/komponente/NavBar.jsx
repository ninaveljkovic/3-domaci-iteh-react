import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
function NavBar() {
  return (
    <div>
        <nav className="nav">
            <div className="nav__title">LOREM</div>
                <ul className="nav__list">
                 
                    <li className="nav__item">   <Link to='/'>Pocetna</Link></li>
                    <li className="nav__item"> <Link to='/frizure'>Frizure</Link></li>
                    <li className="nav__item"> 
                    
                        <input type="text" id="kriterijum" placeholder="Search.." name="search"/>
                        <button type="submit" className='dugmePretraga'  >   <BsSearch></BsSearch> </button>
                    

                    
                    </li>
                </ul>
        </nav>
    </div>
  );
}

export default NavBar;