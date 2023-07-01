import React from 'react';
import Navbar from './Navbar/Navbar.component';
import Footer from './footer/Footer.component';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar color={'#EFEFEF'}/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
