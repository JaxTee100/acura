import React from 'react'
import {TbBallFootball } from 'react-icons/tb';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {CiLocationOn} from 'react-icons/ci';
import './size-input.component.css'

const SizeInput = () => {
  return (
    <div className='size-input__container'>
        <div className='size-input__container-tire-size'>
            <input text='text' placeholder='Enter Tire Size'/>
            <TbBallFootball className='tire'/>
            <AiOutlineInfoCircle className='info'/>

        </div>
        <div className='zip'>
            <CiLocationOn className='location'/>
            <input text='text' placeholder='Enter Zip Code'/>
            
        </div>
        <div className='btn'>
            <button>View Result</button>
        </div>

      
    </div>
  )
}

export default SizeInput
