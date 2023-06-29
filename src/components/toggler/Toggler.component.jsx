import React, {useState} from 'react'
import './toggler.component.css'

const Toggler = ({toggleText1, toggleText2}) => {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(prev => !prev)
  }
  return (
    <div className='toggler__container'>
      <div className={!darkMode ? 'toggler__container-vehicle': 'dark-mode'} onClick={handleClick}>{toggleText1}</div>
      <div className={darkMode ? 'toggler__container-size' : 'dark-mode'} onClick={handleClick}>{toggleText2}</div>
    </div>
  )
}

export default Toggler
