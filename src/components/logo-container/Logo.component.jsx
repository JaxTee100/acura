import React from 'react'
import './logo.component.css'

const Logo = ({letter, Brand, paragraph, fontColor}) => {
  const styles = {
    color: fontColor
  }
  return (
    <div className='nav__logo'>
        <div className='nav__logo-text'>
        {letter && <div><h1>{letter}</h1></div>}
        <h1 style={styles}>{Brand}</h1>
        </div>
        <p>{paragraph}</p>
        
    </div>
  )
}

export default Logo
