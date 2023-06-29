import React from 'react'
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import './shopping-cart.component.css'

const ShoppingCart = ({value}) => {
  return (
    <div className='shopping-cart-container'>
      <PiShoppingCartSimpleLight className='shopping-cart-icon'/>
      <div className='shopping-cart-value'>
        <p>{value}</p>
      </div>
    </div>
  )
}

export default ShoppingCart
