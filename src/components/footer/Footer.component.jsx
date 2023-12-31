import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Pirelli from '../../assets/pirelli4.png'
import Firestone from '../../assets/firestone.png'
import GoodYear from '../../assets/good-year2.png'
import Toyotires from '../../assets/toyotires.png'
import Continental from '../../assets/continental2.png'
import Hankook from '../../assets/hankook2.png'
import Bfgoorich from '../../assets/bfgoodrich.png'
import Yokohama from  '../../assets/yokohama2.png'
import Uniroyal from '../../assets/uniroyal.png'
import Hankooi from '../../assets/hankooki.png'
import './footer.component.css'


const Footer = ({color}) => {
 
  return (
    // <footer>
    //   <div className='footer-images' style={styles}>
    //     <img src={Hankook} alt="hankook"/>
    //     <img src={GoodYear} alt="goodyear"/>
    //     <img src={Pirelli} alt="pirelli"/>
    //     <img src={Toyotires} alt="toyotire" />
    //     <img src={Yokohama} alt="yokohama" />
    //     <img src={Continental} alt="continental"/>
    //     <img src={Bfgoorich} alt="bfgoodrich"/>
    //     <img src={Firestone} alt="firestone"/>
    //     <img src={Uniroyal} alt="uniroyal"/>

    //   </div>
    // </footer>
    <footer>
      <div className='footer-container'>
        <div className='pic-box'>
          <img src={Pirelli} alt="pirelli"/>
        </div>
        <div className='pic-box'>
          <img src={Pirelli} alt="pirelli"/>
        </div>
        <div className='pic-box'>
          <img src={Pirelli} alt="pirelli"/>
        </div>
        <div className='pic-box'>
          <img src={Pirelli} alt="pirelli"/>
        </div>
        <div className='pic-box'>
          <img src={Pirelli} alt="pirelli"/>
        </div>
        <div className='pic-box'>
          <img src={Pirelli} alt="pirelli"/>
        </div>
        <div className='pic-box'>
          <img src={Pirelli} alt="pirelli"/>
        </div>
        <div className='pic-box'>
          <img src={Pirelli} alt="pirelli"/>
        </div>
        <div className='pic-box'>
          <img src={Pirelli} alt="pirelli"/>
        </div>
        <div className='pic-box'>
          <img src={Pirelli} alt="pirelli"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
