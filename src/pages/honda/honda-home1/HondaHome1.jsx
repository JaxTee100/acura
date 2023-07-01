import React from 'react'
import Tires from '../../../assets/tires.jpg'
import { Footer, Navbar, Toggler, SizeInput, Button } from '../../../components'
import './honda-home1.css'

const HondaHome1 = () => {
  return (
    <div className='honda-home-container'>
      <Navbar />
      <div className='home__container'>
        <div className='home__container-honda-image'>
          <div className='home__container-honda-image-text'>
            <h1>Taking off winter tires?</h1>
            <h1>We offer tire storage</h1>
          </div>
          <div className='home__container-honda-image-img'>
            <img src={Tires} />
          </div>
          <div className='home__container-honda-image-name'>
            <div className='texts'>
              <h2>Destination</h2>
              <p>BURNABY <span>HONDA</span></p>
            </div>
          </div>
        </div>
        <div className='home__container-inputs'>
          <div className='home__container-toggler'>
            <Toggler toggleText1="Search by Vehicle" toggleText2="Search by Tire Size" />
          </div>
          <div className='home__container-inputs-map'>
            <SizeInput />
          </div>
        </div>
        
      
      
      </div>
      <Footer />
    </div>
  )
}

export default HondaHome1
