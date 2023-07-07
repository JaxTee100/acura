import React from 'react'
import Tires from '../../../assets/tires.jpg'
import { Footer, Toggler, SizeInput } from '../../../components'
import './honda-home2.css'
import HondaNavbar from '../components/Navbar/Navbar'

const HondaHome2 = () => {
  return (
    // 
    <div className='honda2-container'>
      <HondaNavbar />
      <div className='image-container2'>
        <div className='image-container2__text'>
          <h1>Taking off winter tires?<br />We offer tire storage.</h1>
        </div>
        <div className='image-container2__image'>
          <img src={Tires} alt="tire-image" />
        </div>

      </div>
      <div className='input-container2'>
        <div className='toggle-button2'>
          <Toggler toggleText1="Search by Vehicle" toggleText2="Search by Tire Size" />
        </div>
        <div className='map-input2'>
          <SizeInput />
        </div>

      </div>
      <div className='foot-container'>
        <Footer />
      </div>

    </div>
  )
}

export default HondaHome2
