import React from 'react';
import { newsletter } from "../data"

const Newsletter = () => {
  const { title, subtitle, placeholder, buttonText } = newsletter; // Destructuring the object
  return (
    <section className='section bg-newsletter min-h-[490px]'>
      <div className='container mx-auto flex justify-center'>
        <div className='w-full max-w-[558px] text-center lg:justify-end lg:text-'>
          <h2 className='text-4xl font-semibold max-w-[350px]
          mx-auto lg:mx-0 mb-5 leading-normal'>{title}</h2>
          <p className='text-xl font-light mb-10'>{subtitle}</p>
          <div className='flex flex-col lg:flex-row gap-[22px] '>
            <input className='h-[60px] px-6 outline-none placeholder:text-gray-500
            rounded-lg lg:flex-1 '
             type='text' placeholder={placeholder} /> 
            <button className='bg-primary h-[60px] text-white hover:bg-slate-900 rounded-lg font-medium text-xl translate
            px-7 '>{buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
