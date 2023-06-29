import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.component.css'
import {Button, ShoppingCart} from '../index'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const Menu = () => {
  return(
    <ul className='nav__list-links'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tires">Tires</Link>
          </li>
          <li>
            <Link to="/wheels">Wheels</Link>
          </li>
          <li>
            <Link to="/accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/packages">Packages</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav>
      <div className='nav-link-items'>
        <div className='nav__logo'>
          <div className='nav__logo-text'>
            <div><h1>A</h1></div>
            <h1>ACURA</h1>
          </div>
          <p>PRECISION CRAFTED PERFORMANCE</p>
        </div>
        
          <Menu />
        
        <div className='nav__click-items'>
          <Button text="Sign in" color='#4285F4' radius={'20px'}/>
          <ShoppingCart value="03"/>
        </div>
      </div>
      
      <div className='navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine  size={27} onClick={() =>setToggleMenu(false) } />
          : <RiMenu3Line  size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className='navbar-menu-container'>
              <div className='navbar-menu-links'>
                <Menu />
                <div className='nav__click-items'>
                  <Button text="Sign in" color='#4285F4' radius={'20px'}/>
                  <ShoppingCart value="03"/>
                </div>
              </div>

            </div>
          )
        }
      </div>
      
    </nav>
  );
};

export default Navbar;
