import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import './main-navbar.css'
import ShoppingCart from '../shopping-cart/ShoppingCart.component'

const MainNavbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleChange = () =>{
        setShowMenu(prev => !prev)
    }
  return (
    <nav className='nav-container'>
        <div className='nav-container__logo'>
            <h1>Logo</h1>
        </div>
        <ul>
            <NavLink to='/acura-home' activeclassname='active'>Home</NavLink>
            <NavLink to='/tires'>Tires</NavLink>
            <NavLink to='wheels'>Wheels</NavLink>
            <NavLink to='accessories'>Accessories</NavLink>
            <NavLink to='packages'>Packages</NavLink>
            <NavLink to='contact'>Contact Us</NavLink>
        </ul>
        <div className='btn-container'>
            <button>
                Shop Now
            </button>
            <ShoppingCart />

        </div>

        <div className='dropdown-container'>
            { showMenu 
                ? <AiOutlineClose color='#000' size={27} onClick={handleChange}/>
                :  <AiOutlineMenu color='#000' size={27} onClick={handleChange}/> }
            {showMenu && <div className='link-dropdown'>
                <div className='link-dropdown__links'>
                    <NavLink to='/acura-home' activeclassname='active'>Home</NavLink>
                    <NavLink to='/tires'>Tires</NavLink>
                    <NavLink to='wheels'>Wheels</NavLink>
                    <NavLink to='accessories'>Accessories</NavLink>
                    <NavLink to='packages'>Packages</NavLink>
                    <NavLink to='contact'>Contact Us</NavLink>

                </div>
                <div className='link-dropdown__btn'>
                    <button>
                    Shop Now
                    </button>
                    <ShoppingCart />
                </div>
            </div>}
        </div>
        
    </nav>
  )
}

export default MainNavbar
