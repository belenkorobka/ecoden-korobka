import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <nav className="navbarContainer">
        <Link to="/"><img src={logo} alt="logo" className="navbarContainer__logo"/></Link>
        <ul className="navbarContainer__menu">
          <li className="navbarContainer__menu--item">
            <Link to="/">productos</Link>
            <ul className="submenu">
              <li className="submenu__item"><Link to="/category/1">Kits ecológicos</Link></li>
              <li className="submenu__item"><Link to="/category/2">Cepillos de dientes</Link></li>
              <li className="submenu__item"><Link to="/category/3">Pastas de dientes</Link></li>
              <li className="submenu__item"><Link to="/category/4">Hilos dentales</Link></li>
              <li className="submenu__item"><Link to="/category/5">Accesorios</Link></li>
            </ul>
          </li>
          <li className="navbarContainer__menu--item"><a href="index.html">wishlist</a></li>
          <li className="navbarContainer__menu--item"><a href="index.html">contacto</a></li>
        </ul>
        <ul className="navbarContainer__buttons">
          <li className="navbarContainer__buttons--search">
            <input type="text" className="search__input" placeholder="Buscar un producto"/>
            <button type="button" className="search__button"></button>
          </li>
          <CartWidget count={0}/>
        </ul>
    </nav>
  );
}

export default NavBar;
