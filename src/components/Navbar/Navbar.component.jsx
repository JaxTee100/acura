import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.component.css'
import {Button, LogoContainer,  ShoppingCart} from '../index'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';


const Menu = () => {
  return (
        <ul className='nav__list-links'>
          <li>
            <NavLink to="/acura-home" className='nav-link' activeClassName="active">Acura</NavLink>
          </li>
          <li>
            <NavLink to="/acura-home2" className='nav-link' activeClassName="active" >Acura2</NavLink>
          </li>
          <li>
            <NavLink to="/tires" className='nav-link' activeClassName="active">Tires</NavLink>
          </li>
          <li>
            <NavLink to="/wheels" className='nav-link' activeClassName="active">Wheels</NavLink>
          </li>
          <li>
            <NavLink to="/accessories" className='nav-link' activeClassName="active">Accessories</NavLink>
          </li>
          <li>
            <NavLink to="/packages" className='nav-link' activeClassName="active">Packages</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className='nav-link' activeClassName="active">Contact Us</NavLink>
          </li>
          
        </ul>
  )
}



const Navbar = ({color, btnColor, letter, Brand, paragraph, fontColor}) => {
  const styles = {
    backgroundColor: color,
  }
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav>
      <div className='nav-link-items' style={styles}>
          <Link to='/'><LogoContainer letter={letter} Brand={Brand} paragraph={paragraph} fontColor={fontColor}/></Link>
        
          <Menu />
        
        <div className='nav__click-items'>
          <Button text="Sign in" color={btnColor} radius={'20px'}/>
          <ShoppingCart value="03" color={'#4285F4'}/>
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
                  <Button text="Sign in" color={btnColor} radius={'20px'}/>
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
