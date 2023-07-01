import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.component.css'
import {Button, LogoContainer,  ShoppingCart} from '../index'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';


const Menu = () => {
  return (
        <ul className='nav__list-links'>
          <li>
            <NavLink to="/acura-home" activeClassName="active">Acura</NavLink>
          </li>
          <li>
            <NavLink to="/acura-home2" >Acura2</NavLink>
          </li>
          <li>
            <NavLink to="/tires">Tires</NavLink>
          </li>
          <li>
            <NavLink to="/wheels">Wheels</NavLink>
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
