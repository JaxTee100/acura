import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import './shopping-cart.component.css'

const ShoppingCart = ({value, color}) => {
  const styles = {
    backgroundColor: color,
  }
  return (
    <div className='shopping-cart-container'>
      <FaShoppingCart color='#000' size={27}/>
      <div className='shopping-cart-value' style={styles} >
        <p>10</p>
      </div>
    </div>
  )
}

export default ShoppingCart
