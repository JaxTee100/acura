import React from 'react'
import './home2.page.css'
import {Button, Footer, Navbar, SizeInput, Toggler} from '../../../components'
import Acura from '../../../assets/acura2.jpeg'
import NavbarComponent from '../../../components/Navbar/Navbar.component'
import { Col, Container, Row } from 'react-bootstrap'

const Home2  = () => {
  return (
    <div className='acura-home__container' >
      <NavbarComponent />
      <Container fluid className='p-5'>
        <Row className='row-div'>
        <Col className='border p-5 bg-color size bl-35'   sm={6}>
          <h1 className='text-light'>INTEGRA WINS.</h1>
          <h2 className='text-light'>NORTH AMERICAN 2023 CAR OF THE YEAR</h2>
          <button variant='primary' className='bg-danger' size='lg' style={{ width: '200px', borderRadius: '35px' }}>
            Shop Now
          </button>
        </Col>
          <Col className='border  bg-color size br-35'  sm={6}>
            <img src={Acura} alt='car-im'  />
          </Col>
        </Row>
        
      </Container>
      <div className='acura-home__container-inputs'>
        <div className='acura-home__container-toggler'>
          <Toggler toggleText1="Search by Vehicle" toggleText2="Search by Tire Size" />
        </div>
        <div className='acura-home__container-inputs-map'>
          <SizeInput />
        </div>
      </div>
      <div className='footer-div'>
        <Footer />
      </div>
      
      
      
      
    </div>
  )
}

export default Home2
