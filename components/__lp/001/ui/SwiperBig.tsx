"use client"
import Image from 'next/image'

import React, { useRef, useState } from 'react';
// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

import '@/components/__lp/001/ui/swiper.css'

import dynamic from 'next/dynamic'
const Stars5 = dynamic(() => import("@/components/__lp/001/icons/Stars5"))
const SwiperButtonNext = dynamic(() => import("@/components/__lp/001/icons/SwiperButtonNext"))
const SwiperButtonPrev = dynamic(() => import("@/components/__lp/001/icons/SwiperButtonPrev"))



const SwiperBig = () => {
  return (
    <Swiper 
      navigation={true} 
      modules={[Navigation]} 
      className="mySwiper w-[300px] h-auto"
    >        
        <SwiperSlide>
          <div className="card_slide">    
                {/* Homeowner photo */}
                <Image 
                    src='/lp/reviews/big/1-1.webp'
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="xl:flex hidden"
                />
                <Image 
                    src='/lp/reviews/normall/1-1.webp'
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:flex xl:hidden hidden"
                />
                <Image 
                    src='/lp/reviews/small/1-1.webp'
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:hidden flex"
                />

                <div className="show_card">
                    {/* cover dark photo */}
                    <Image 
                        src='/lp/reviews/daveCover.webp'
                        alt='M.Tilborg, Zwijndrecht - cover'
                        width={510}
                        height={700}
                        className=""
                    />
                  <div className="absolute top-4 -left-5 w-full text-center translate-x-5 flex flex-col justify-center items-center">
                    <div className='flex justify-center items-center w-[100px] h-auto'>
                      <Stars5 />
                    </div>
                    <p className="card_brief text-base">
                      "Al met al kan ik zeggen dat mijn ervaring met Zongericht positief is. Van begin tot eind overtroffen ze mijn verwachtingen met hun toewijding aan kwaliteit, snelle service, expertise
                      en vriendelijkheid."
                    </p>
                    <h4 className="card_author">M.Tilborg, Zwijndrecht</h4>
                    <p className="card_info">Huiseigenaar</p>
                  </div>
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card_slide">    
                {/* Homeowner photo */}
                <Image 
                    src='/lp/reviews/big/1-1.webp'
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="xl:flex hidden"
                />
                <Image 
                    src='/lp/reviews/normall/1-1.webp'
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:flex xl:hidden hidden"
                />
                <Image 
                    src='/lp/reviews/small/1-1.webp'
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:hidden flex"
                />

                <div className="show_card">
                    {/* cover dark photo */}
                    <Image 
                        src='/lp/reviews/daveCover.webp'
                        alt='M.Tilborg, Zwijndrecht - cover'
                        width={510}
                        height={700}
                        className=""
                    />
                  <div className="absolute top-4 -left-5 w-full text-center translate-x-5 flex flex-col justify-center items-center">
                    <div className='flex justify-center items-center w-[100px] h-auto'>
                      <Stars5 />
                    </div>
                    <p className="card_brief text-base">
                      "Al met al kan ik zeggen dat mijn ervaring met Zongericht positief is. Van begin tot eind overtroffen ze mijn verwachtingen met hun toewijding aan kwaliteit, snelle service, expertise
                      en vriendelijkheid."
                    </p>
                    <h4 className="card_author">M.Tilborg, Zwijndrecht</h4>
                    <p className="card_info">Huiseigenaar</p>
                  </div>
                </div>
          </div>
        </SwiperSlide>
      </Swiper>
  );
};

export default SwiperBig;

