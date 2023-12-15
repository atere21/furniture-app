import React from 'react';
import { hero } from '../data';
import Stats from '../components/Stats';

const Hero = () => {
  const { title, subtitle, buttonText } = hero;
  return (
    <section className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat pt-[225px] text-white pb-[254px] relative mb-12 lg:bg-center lg:mb-28'>
      <div className='container mx-auto text-center'>
        <h1 className='mb-8 text-3xl lg:text-6xl leading-tight lg:max-w-4xl mx-auto'>{title}</h1>
        <h2 className='mb-8 max-w-md mx-auto lg:mb-16 lg:text-xl text-xl'>{subtitle}</h2>
        <button className='bg-gray-400 hover:text-gray-200 px-4 py-2 mb-12 text-xl rounded-md backdrop-blur-md transition lg:px-8 lg:py-2 lg:mb-16'>
          {buttonText}
        </button>
      </div>
      <div>
        <Stats />
      </div>
    </section>
  );
};

export default Hero;
