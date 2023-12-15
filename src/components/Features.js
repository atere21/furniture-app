import React from 'react';
import { features } from '../data'

const Features = () => {
  const { title, subtitle, image, buttonText, items} = features;
  return (
    <section className='section '>
  <div className='container mx-auto '>
    <div className='flex flex-col lg:flex-row lg:gap-x-[100px] mt-4'>
      <div className='flex-1'>
      <img className=' w-full mt-[18rem] md:mt-4' src={image.type} alt=''/>
       
    </div>
    <div className='flex-1 flex flex-col justify-end'>
      <h2 className='title'>{title}</h2>
      <p className='subtitile'>{subtitle}</p>
      <div>
        {items.map((item, index) =>{
          //destructure item
          const { title, subtitle, icon } = item;
          return (
            <div className='flex mb-6 lg:last:mb-0 mt-6'>
          <div className='text-2xl mr-4  lg:text-3xl'>{icon}</div>
          <div>
            <h4 className='text-base lg:text-2xl font-semibold mb-3'>{title}</h4>
            <p>{subtitle}</p>
          </div>
          </div>
          )
        })}
      </div>
      </div>
    </div>
  </div>
  </section>
  )
};

export default Features;
//to image two dive interchange: order-1 
