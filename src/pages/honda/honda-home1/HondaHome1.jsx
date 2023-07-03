import React from 'react'
import Tires from '../../../assets/tires.jpg'
import { Footer, Navbar, Toggler, SizeInput, Button } from '../../../components'
import './honda-home1.css'
import HondaNavbar from '../components/Navbar/Navbar'

const HondaHome1 = () => {
  return (
    <div className='honda-home-main-container'>
      <HondaNavbar fontColor={'red'} btnColor={'#ce4e4e'} Brand={'HONDA'} paragraph={'The power of dreams'} />
      <div className='honda-home__container'>
        <div className='honda-home__container-honda-image'>
          <div className='honda-home__container-honda-image-text'>
            <h1>Taking off winter tires?<br />We offer tire storage</h1>
            
          </div>
          <div className='honda-home__container-honda-image-img'>
            <img src={Tires} />
          </div>
          
        </div>
        <div className='honda-home__container-inputs'>
          <div className='honda-home__container-toggler'>
            <Toggler toggleText1="Search by Vehicle" toggleText2="Search by Tire Size" />
          </div>
          <div className='honda-home__container-inputs-map'>
            <SizeInput />
          </div>
        </div>
        
      
      
      </div>
      <div className='honda-footer-container'>
        <Footer />
      </div>
      
    </div>
  )
}

export default HondaHome1
