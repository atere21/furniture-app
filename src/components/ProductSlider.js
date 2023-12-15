import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';
import { products } from '../data';
import { HiPlus } from 'react-icons/hi';

import {  NavigationPreloadManager, Pagination , Navigation} from 'swiper';

const ProductSlider = () => {
  const { pages } = products;

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      className='productSlider min-h-[1300px]'
    >
      {pages.map((page, pageIndex) => (
        <SwiperSlide key={pageIndex}>
          <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-5 lg:gap-[30px]'>
            {page.productList.map((product, productIndex) => {
              const { image, name, price, oldPrice } = product;
              return (
                <div className='w-full max-w-[290px] h-[380px] text-left' key={productIndex}>
                  <div className='border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-content mb-[15px] relative transition'>
                    <img src={image.type} alt='' className='w-full h-full ' />
                    <div className='absolute bottom-4 right-2 bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition'>
                      <HiPlus className='text-xl flex text-primary' />
                    </div>
                  </div>
                  <div className='font-semibold lg:text-xl'>{name}</div>
                  <div className='flex items-center gap-x-3 '>
                    <div> $ {price}</div>
                    <div className='text-[15px] text-gray-400 line-through'> $ {oldPrice}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
