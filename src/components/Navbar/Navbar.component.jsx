import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.component.css'
import {Button, ShoppingCart} from '../index'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const Menu = () => {
  return(
    <ul className='nav__list-links'>
          <li>
            <NavLink to="/" activeClassName="active">Acura</NavLink>
          </li>
          <li>
            <NavLink to="/acura-home2" activeClassName="active">Acura2</NavLink>
          </li>
          <li>
            <NavLink to="/honda-home" activeClassName="active">Honda</NavLink>
          </li>
          <li>
            <NavLink to="/honda-home2" activeClassName="active">Honda2</NavLink>
          </li>
          <li>
            <NavLink to="/tires" activeClassName="active">Tires</NavLink>
          </li>
          <li>
            <NavLink to="/wheels" activeClassName="active">Wheels</NavLink>
          </li>
          <li>
            <NavLink to="/accessories" activeClassName="active">Accessories</NavLink>
          </li>
          <li>
            <NavLink to="/packages" activeClassName="active">Packages</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
          </li>
          
        </ul>
  )
}

const Navbar = ({color}) => {
  const styles = {
    backgroundColor: color
  }
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav>
      <div className='nav-link-items' style={styles}>
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
