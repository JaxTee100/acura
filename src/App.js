import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import {Layout} from './components/index'
import {Home,Accessories, Contact, Packages, Tires, Wheels, Home2 } from './pages/index.js'


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/tires" element={<Tires />} />
          <Route path="/wheels" element={<Wheels />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;



