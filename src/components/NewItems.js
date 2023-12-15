import React from 'react';
import { newInStore } from '../data';
import NewItemsSlider from './NewItemsSlider';

const NewItems = () => {
  const { title, subtitle, link, icon } = newInStore;

  return (
    <section className='section'>
      <div className='mx-auto container'>
        <div className='flex flex-col lg:flex-row relative '>
          {/* Text Content */}
          <div className='flex md:flex-col items-baseline mb-6 max-w-[50%] lg:mb-0'>
            <h2 className='title max-w-[285px] lg:mt-[30px] lg:mb-[90px]'>{title}</h2>
            <p className='max-w-[285px] lg:mb-12 text-xl'>{subtitle}</p>
            <div className='hidden lg:flex items-center gap-x-4'>
              {/* Adjust the gap-x value to adjust the space between the link and the icon */}
              <a className='hover:border-b border-primary lg:items-center font-medium transition-all' href='#'>
                {link}
              </a>
              <div className='text-3xl'>
                {icon}
              </div>
            </div>
          </div>
          {/* Slider */}
          <div className='lg:max-w-[700px] xl:max-w-[890px] lg:absolute lg:right-20'>
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
