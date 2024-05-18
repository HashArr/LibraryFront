import React from 'react';
import './App.css';
import { Navbar } from './Layouts/NavBarAndFooter/NavBar';
import { Footer } from './Layouts/NavBarAndFooter/Footer';
import { HomePage } from './Layouts/HomePage/HomePage';


export const  App = () => {
  return (
    <div >
  <Navbar/>
  <HomePage/>
  <Footer/>
    </div>
  );
}


