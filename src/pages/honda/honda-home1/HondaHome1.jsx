import React from 'react'
import Tires from '../../../assets/tires.jpg'
import { Footer, Navbar, Toggler, SizeInput, Button } from '../../../components'
import './honda-home1.css'
import HondaNavbar from '../components/Navbar/Navbar'
import { Col, Container, Row } from 'react-bootstrap'

const HondaHome1 = () => {
  
  return (
    <div className='honda-container'>
      <HondaNavbar />
      <div className='image-container'>
        <div className='image-container__text'>
          <h1>Taking off winter tires?<br />We offer tire storage</h1>
        </div>
        <div className='image-container__image'>
          <img src={Tires} alt="tire-image" />
        </div>
      </div>
      <div className='input-container'>
        <div className='toggle-button'>
          <Toggler toggleText1="Search by Vehicle" toggleText2="Search by Tire Size" />
        </div>
        <div className='map-input'>
          <SizeInput />
        </div>

      </div>
      <div className='foot-container'>
        <Footer />
      </div>

    </div>
    
      
      
      
      
    
  )
}

export default HondaHome1
