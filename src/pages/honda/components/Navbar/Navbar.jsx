import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import {Button, LogoContainer,  ShoppingCart} from '../../../../components'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';


const Menu = () => {
  return (
        <ul className='nav__list-links'>
          <li>
            <NavLink to="/honda-home" activeClassName="active">Honda</NavLink>
          </li>
          <li>
            <NavLink to="/honda-home2" >Honda2</NavLink>
          </li>
          <li>
            <NavLink to="/honda-tires">Tires</NavLink>
          </li>
          <li>
            <NavLink to="/honda-wheels">Wheels</NavLink>
          </li>
          <li>
            <NavLink to="/honda-accessories">Accessories</NavLink>
          </li>
          <li>
            <NavLink to="/honda-packages" >Packages</NavLink>
          </li>
          <li>
            <NavLink to="/honda-contact" >Contact Us</NavLink>
          </li>
          
        </ul>
  )
}



const HondaNavbar = ({color, btnColor, letter, Brand, paragraph, fontColor}) => {
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
          <ShoppingCart value="03" color={'red'}/>
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

export default HondaNavbar;
