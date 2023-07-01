import React from 'react'
import './contact.page.css'
import { Navbar } from '../../../components';

const Contact= () => {
  return (
    <div>
      <Navbar btnColor={'blue'} Brand={'Acura'} paragraph={'PRECISION CRAFTED PERFORMANCE'} letter={'A'} />
      <h1>Contact Us</h1>
    </div>
  )
}

export default Contact;
