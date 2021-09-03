import logo from '../../img/logo.svg'

function NavBar() {
  return (
    <nav className="navbarContainer">
        <img src={logo} alt="logo" className="navbarContainer__logo"/>
        <ul className="navbarContainer__menu">
          <li className="navbarContainer__menu--item"><a href="index.html">productos</a></li>
          <li className="navbarContainer__menu--item"><a href="index.html">wishlist</a></li>
          <li className="navbarContainer__menu--item"><a href="index.html">carrito</a></li>
          <li className="navbarContainer__menu--search">
            <input type="text" className="search__input" placeholder="Buscar un producto"/>
            <button type="button" className="search__button"></button>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
