import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Layout} from './components/index'
import {Home,Accessories, Contact, Packages, Tires, Wheels, Home2 } from './pages/index.js'
import { HondaAccessories, HondaContact, HondaPackages, HondaTires, HondaWheels } from './pages/index.js';
import HondaHome1 from './pages/honda/honda-home1/HondaHome1';
import HomeMain from './pages/main-home/Home';
import HondaHome2 from './pages/honda/honda-home2/HondaHome2';
import MainNavbar from './components/main-navbar/MainNavbar';


const App = () => {
  return (
    <Router>
    
        <Routes>
          <Route path='/' element={<HomeMain/>} />
          <Route path="/acura-home" element={<Home />} />
          <Route path="/acura-home2" element={<Home2 />} />
          <Route path="/honda-home" element={<HondaHome1 />} />
          <Route path="/honda-home2" element={<HondaHome2 />} />
          <Route path="/tires" element={<Tires />} />
          <Route path="/wheels" element={<Wheels />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/honda-tires" element={<HondaTires />} />
          <Route path="/honda-accessories" element={<HondaAccessories />} />
          <Route path="/honda-packages" element={<HondaPackages />} />
          <Route path="/honda-contact" element={<HondaContact />} />
          <Route path="/honda-wheels" element={<HondaWheels />} />
          <Route path="/nav" element={<MainNavbar />} />
          

        </Routes>
      
    </Router>
  );
};

export default App;



