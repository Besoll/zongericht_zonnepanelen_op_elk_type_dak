"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/components/__lp/001/ui/swiper.css'

import { Navigation, Pagination, EffectCoverflow, Mousewheel, Keyboard, Controller, Scrollbar, A11y } from 'swiper/modules'

import dynamic from 'next/dynamic'
const Stars5 = dynamic(() => import("@/components/__lp/001/icons/Stars5"))
const SwiperButtonNext = dynamic(() => import("@/components/__lp/001/icons/SwiperButtonNext"))
const SwiperButtonPrev = dynamic(() => import("@/components/__lp/001/icons/SwiperButtonPrev"))



import image1_big from "@/public/lp/reviews/big/1-1.webp"
import image1_normal from "@/public/lp/reviews/normal/1-1.webp"
import image1_small from "@/public/lp/reviews/small/1-1.webp"

import image2_big from "@/public/lp/reviews/big/2-1.webp"
import image2_normal from "@/public/lp/reviews/normal/2-1.webp"
import image2_small from "@/public/lp/reviews/small/2-1.webp"

import image3_big from "@/public/lp/reviews/big/3-1.webp"
import image3_normal from "@/public/lp/reviews/normal/3-1.webp"
import image3_small from "@/public/lp/reviews/small/3-1.webp"

import image4_big from "@/public/lp/reviews/big/4-1.webp"
import image4_normal from "@/public/lp/reviews/normal/4-1.webp"
import image4_small from "@/public/lp/reviews/small/4-1.webp"

import image5_big from "@/public/lp/reviews/big/5-1.webp"
import image5_normal from "@/public/lp/reviews/normal/5-1.webp"
import image5_small from "@/public/lp/reviews/small/5-1.webp"


import daveCover from "@/public/lp/reviews/daveCover.webp"
import { TestimonialBigData } from '@/components/__lp/constants/TestimonialBigData';




  
  export default function SwiperBig() {




    return (
      <>
        <Swiper 
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,          
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true} 
          loop={true}
          
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            601: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          
          
          modules={[EffectCoverflow, Pagination, Navigation, Mousewheel, Keyboard]}
          className="flex justify-center items-center text-center w-full max-w-[1440px] px-4 py-12 md:py-16 "
        >
          <SwiperSlide>
            <div className='relative mb-8'>
              <Image src={image1_big} alt="Alt text" width={510} height={700} 
                className='hidden xl:flex justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl'/>
              <Image src={image1_normal} alt="Alt text" width={510} height={700} 
                className='hidden md:flex xl:hidden justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl'/>
              <Image src={image1_small} alt="Alt text" width={510} height={700} 
                className='md:hidden flex justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl'/>

              <div className="hidden hover:flex  top-0 left-0 bg-black-100 justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl">
                  <Image 
                        src={daveCover}
                        alt='M.Tilborg, Zwijndrecht - cover'
                        width={510}
                        height={700}
                        className="w-full h-auto"
                    />
                <div className="show_content">
                  <Stars5 />
                  <p className="card_brief">"Al met al kan ik zeggen dat mijn ervaring met Zongericht positief is. Van begin
                    tot eind overtroffen ze mijn verwachtingen met hun toewijding aan kwaliteit, snelle service, expertise
                    en vriendelijkheid."</p>
                  <h4 className="card_author">M.Tilborg, Zwijndrecht</h4>
                  <p className="card_info">Huiseigenaar</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image2_big} alt="Alt text" width={510} height={700} 
              className='hidden xl:flex justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl mb-2'/>
            <Image src={image2_normal} alt="Alt text" width={510} height={700} 
              className='hidden md:flex xl:hidden justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl mb-2'/>
            <Image src={image2_small} alt="Alt text" width={510} height={700} 
              className='md:hidden flex justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl mb-2'/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image3_big} alt="Alt text" width={510} height={700} 
              className='hidden xl:flex justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl mb-2'/>
            <Image src={image3_normal} alt="Alt text" width={510} height={700} 
              className='hidden md:flex xl:hidden justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl mb-2'/>
            <Image src={image3_small} alt="Alt text" width={510} height={700} 
              className='md:hidden flex justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl mb-2'/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image4_big} alt="Alt text" width={510} height={700} 
              className='hidden xl:flex justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl mb-2'/>
            <Image src={image4_normal} alt="Alt text" width={510} height={700} 
              className='hidden md:flex xl:hidden justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl mb-2'/>
            <Image src={image4_small} alt="Alt text" width={510} height={700} 
              className='md:hidden flex justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl mb-2'/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image5_big} alt="Alt text" width={510} height={700} 
              className='hidden xl:flex justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl mb-2'/>
            <Image src={image5_normal} alt="Alt text" width={400} height={600} 
              className='hidden md:flex xl:hidden justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl mb-2'/>
            <Image src={image5_small} alt="Alt text" width={260} height={350} 
              className='md:hidden flex justify-center items-center w-[85%] min-w-[300px] md:w-full max-w-[450px] h-auto object-cover rounded-3xl mb-2'/>
          </SwiperSlide>
        </Swiper>
      
      </>
  );
};

