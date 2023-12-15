import React from 'react';
import { stats } from '../data';

const Stats = () => {
  return (
    <div className='bg-accent rounded-[20px] p-4 md:p-12 mt-14'>
      <div className='flex flex-col md:flex-row gap-y-8 md:gap-x-8'>
        {stats.map((item, index) => {
          return (
            <div
              className='min-h-[50px] md:min-h-[70px] mb-4 w-full md:w-3/6 flex flex-col justify-center md:odd:border-r md:even:border-r md:even:last:border-none m-6'
              key={index}
            >
              <div className='text-xl font-semibold md:text-4xl'>{item.value}</div>
              <div className='text-sm font-light max-w-[110px] md:text-xl'>{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
