import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import {Layout} from './components/index'
import {Home,Accessories, Contact, Packages, Tires, Wheels, Home2 } from './pages/index.js'
import HondaHome1 from './pages/honda/honda-home1/HondaHome1';
import HomeMain from './pages/Home';
import HondaHome2 from './pages/honda/honda-home2/HondaHome2';


const App = () => {
  return (
    <Router>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acura-home2" element={<Home2 />} />
          <Route path="/tires" element={<Tires />} />
          <Route path="/wheels" element={<Wheels />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/honda-home" element={<HondaHome1 />} />
          <Route path="/honda-home2" element={<HondaHome2 />} />

        </Routes>
      
    </Router>
  );
};

export default App;



