import React from 'react'
import './home.page.css'
import {Button, Footer, Navbar, SizeInput, Toggler} from '../../../components'
import Acura from '../../../assets/acura222.jpeg'
import NavbarComponent from '../../../components/Navbar/Navbar.component'
import { Col, Container, Row } from 'react-bootstrap'

const Home  = () => {
  return (
    <div>
      <NavbarComponent />
      <div className='acura-container'>
        <div className='acura-container__text'>
          <h1>INTEGRA WINS.</h1>
          <h2>NORTH AMERICAN 2023 CAR OF THE YEAR</h2>
          <button>Shop Now</button>
        </div>
        <div className='acura-container__image'>
          <img src={Acura} alt='car-im'  />
        </div>
      </div>
      <div className='acura-container__inputs'>
        <div className='toggle'>
          <Toggler toggleText1="Search by Vehicle" toggleText2="Search by Tire Size" />
        </div>
        <div className='size-input'>
          <SizeInput />
        </div>
      </div>
      <div className='acura-footer'>
        <Footer />
      </div>

    </div>
  )
}

export default Home
