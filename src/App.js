import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import NewItems from './components/NewItems';
import FeaturesSecond from './components/FeaturesSecond';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Header from './components/Header';

// import components

const App = () => {
  return (
  <div className='w-full px-4 mx-auto bg-white'>
    <Header/>
    <Hero/>
    <Features/>
    <NewItems/>
    <FeaturesSecond/>
    <Products/>
    <Testimonial/>
    <Newsletter/>
    <Footer/>
   
  </div>
  )
};

export default App;
