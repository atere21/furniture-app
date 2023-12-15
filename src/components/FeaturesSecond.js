import React from 'react';
import { features } from '../data';

const FeaturesSecond = () => {
 
      const { title, subtitle, image} = features.feature2;
      return (
        <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px] mt-4'>
       
        <div className='flex-1 flex flex-col justify-end'>
          <h2 className='title lg:mb-20'>{title}</h2>
          <p className='subtitile lg:pt-10'>{subtitle}</p>
          </div>
        
          <div className='flex-1 ' >
          <img className=' w-full mt-10'
           src={image.type} alt=''/>
           
        </div>   
          </div>
      </div>
      </section>
      )
    };

export default FeaturesSecond;
