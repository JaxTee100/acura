import React from 'react'
import './button.component.css'

const Button = ({text, color, width, height, radius}) => {
  const styles = {
    backgroundColor: color,
    padding: '8px',
    outline: 'none',
    border: 'none',
    borderRadius: radius,
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    width: width,
    height: height,
  };

  return (
    <button className='btn' style={styles}>
        {text}
    </button>
  )
}

export default Button
