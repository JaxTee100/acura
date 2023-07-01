import React from 'react'
import './packages.page.css'
import { Navbar } from '../../../components'

const Packages= () => {
  return (
    <div>
      <Navbar btnColor={'blue'} Brand={'Acura'} paragraph={'PRECISION CRAFTED PERFORMANCE'} letter={'A'} />
      <h1>Packages</h1>
    </div>
  )
}

export default Packages
