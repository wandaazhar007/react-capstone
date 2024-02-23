import './navbar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSignIn, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleNavbar = () => {
    setActive(!active);
  }
  const handleClickMenu = () => {
    setActive(false);
  }

  return (
    <header className="header">
      <div className="wrapContainer">
        <div className="headerContainer">
          <div className="colLeft">
            <div className="logo">
              <img src="/assets/images/logo-indopodwer-tangsel.png" width={100} height={100} alt="Indopowder Tangsel Logo" />
            </div>
            <div className="title"><h2>Little Lemon</h2></div>
          </div>

          <div className={`colMid ${active ? 'on' : ''}`}>
            <div className="close" onClick={handleNavbar}>
              <FontAwesomeIcon icon={faClose} className="icon" />
            </div>
            <nav>
              <ul className={active ? 'on' : ''}>
                <li><Link to="/" className="on" onClick={handleClickMenu}>Home</Link></li>
                <li><Link to="/booking" className="on" onClick={handleClickMenu}>Booking</Link></li>
                <li><Link to="#">Menu</Link></li>
                <li><Link to="#">Contact</Link></li>
                <li><Link to="#">Faq</Link></li>
                <li><Link to="#">Location</Link></li>
              </ul>
            </nav>
          </div>

          <div className={`colRight  ${active ? 'on' : ''}`}>
            <ul>
              <li>
                <a href="/cart">
                  <button className="btn btnCart"><FontAwesomeIcon icon={faCartShopping} className="icon" /> Cart</button>
                </a>
              </li>
              <li>
                <a href="/cart">
                  <button className="btn btnLogin"><FontAwesomeIcon icon={faSignIn} className="icon" /> Login</button>
                </a>
              </li>
            </ul>
          </div>

          <div className="btnMenu" onClick={handleNavbar}>
            <FontAwesomeIcon icon={faBars} className="iconMenu" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;