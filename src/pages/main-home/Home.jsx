import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const HomeMain = () => {
  return (
    <div className='link-container'>
      <p><Link to='/acura-home'>Acura</Link></p>
      <p><Link to='/honda-home'>Honda</Link></p>


    </div>
  )
}

export default HomeMain
