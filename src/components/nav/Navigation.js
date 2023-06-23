import React, { useState, useRef, useContext } from 'react';
import { CartContext } from '../../context/Cart/CartContext';
import { Link, NavLink } from 'react-router-dom';
import cartSvg from '../../img/icon/cart.svg';
import hamburguerSvg from '../../img/icon/hamburguer.svg';
import closeSvg from '../../img/icon/close.svg';

const Navigation = () => {
  const navItemsRef = useRef(null);
  const [newIcon, setNewIcon] = useState(false);
  const { cart } = useContext(CartContext);

  const hoverLink = {
    color: '#53D5B6',
    backgroundColor: '#000000',
  };

  const handleClick = () => {
    newIcon ? setNewIcon(false) : setNewIcon(true);
    navItemsRef.current.classList.toggle('show-nav');
  };

  const getNavLinkStyle = ({ isActive }) => (isActive ? hoverLink : null);

  return (
    <div className="navigation">
      <nav>
        <div className="nav-logo">
          <Link to="." className="nav-text">
            STORE <span>100% '</span> REAL
          </Link>
        </div>

        <div className="nav-menu">
          <div className="nav-items" ref={navItemsRef}>
            <NavLink to="/" style={getNavLinkStyle}>
              Home
            </NavLink>
            <NavLink to="products" style={getNavLinkStyle}>
              Products
            </NavLink>

            <NavLink to="cart" style={getNavLinkStyle}>
              Cart
            </NavLink>
          </div>

          <Link to="cart">
            <div className="cart-icon-container">
              <img className="icon" src={cartSvg} alt="" />
              <span>{cart.length}</span>
            </div>
          </Link>

          <button onClick={handleClick} id="hamburguer">
            <img
              className="icon"
              src={newIcon ? closeSvg : hamburguerSvg}
              alt=""
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
