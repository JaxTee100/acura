import React from 'react'
import './home.page.css'
import {Button, Footer, Navbar, SizeInput, Toggler} from '../../../components'
import Acura from '../../../assets/acura2.jpeg'

const Home  = () => {
  return (
    <div className='acura-home__container'>
      <Navbar btnColor={'#4285F4'} Brand={'Acura'} paragraph={'PRECISION CRAFTED PERFORMANCE'} letter={'A'} />
      <div className='acura-home__container-acura-image'>
        <div className='acura-home__container-acura-image-title'>
          <h1>INTEGRA WINS.</h1>
          <h2>NORTH AMERICAN 2023 CAR OF THE YEAR</h2>
          <Button className='btn' text='Shop Now'  color={'red'} width={'200px'}/>

        </div>
        <div className='acura-home__container-acura-image-img'>
          <img src={Acura} alt='car-im' />
        </div>
      </div>
      <div className='acura-home__container-inputs'>
        <div className='acura-home__container-toggler'>
          <Toggler toggleText1="Search by Vehicle" toggleText2="Search by Tire Size" />
        </div>
        <div className='acura-home__container-inputs-map'>
          <SizeInput />
        </div>
      </div>
      <div className='acura-footer-container'>
        <Footer />
      </div>
      
      
      
    </div>
  )
}

export default Home
