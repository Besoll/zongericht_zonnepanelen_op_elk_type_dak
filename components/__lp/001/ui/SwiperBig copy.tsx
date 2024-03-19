"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation, } from 'swiper/modules';

import '@/components/__lp/001/ui/swiper.css'

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



const SwiperBig = () => {
  
  return (
    <div className=''>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          601: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}        
        className='swiper mySwipers tmb_card_swiper success_swiper'
      >
        <div className='swiper-wrapper'>          
            <SwiperSlide className='swiper-slide'>
              <div className="card_slide">
                <Image 
                    src={image1_big}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="xl:flex hidden"
                />
                <Image 
                    src={image1_normal}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:flex xl:hidden hidden"
                />
                <Image 
                    src={image1_small}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:hidden flex"
                />
            <div className="show_card">
                <Image 
                      src={daveCover}
                      alt='M.Tilborg, Zwijndrecht - cover'
                      width={510}
                      height={700}
                      className=""
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
           <SwiperSlide className='swiper-slide'>
              <div className="card_slide">
                <Image 
                    src={image2_big}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="xl:flex hidden"
                />
                <Image 
                    src={image2_normal}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:flex xl:hidden hidden"
                />
                <Image 
                    src={image2_small}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:hidden flex"
                />
            <div className="show_card">
                <Image 
                      src={daveCover}
                      alt='M.Tilborg, Zwijndrecht - cover'
                      width={510}
                      height={700}
                      className=""
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
           <SwiperSlide className='swiper-slide'>
              <div className="card_slide">
                <Image 
                    src={image3_big}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="xl:flex hidden"
                />
                <Image 
                    src={image3_normal}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:flex xl:hidden hidden"
                />
                <Image 
                    src={image3_small}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:hidden flex"
                />
            <div className="show_card">
                <Image 
                      src={daveCover}
                      alt='M.Tilborg, Zwijndrecht - cover'
                      width={510}
                      height={700}
                      className=""
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
           <SwiperSlide className='swiper-slide'>
              <div className="card_slide">
                <Image 
                    src={image4_big}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="xl:flex hidden"
                />
                <Image 
                    src={image4_normal}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:flex xl:hidden hidden"
                />
                <Image 
                    src={image4_small}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:hidden flex"
                />
            <div className="show_card">
                <Image 
                      src={daveCover}
                      alt='M.Tilborg, Zwijndrecht - cover'
                      width={510}
                      height={700}
                      className=""
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
           <SwiperSlide className='swiper-slide'>
              <div className="card_slide">
                <Image 
                    src={image5_big}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="xl:flex hidden"
                />
                <Image 
                    src={image5_normal}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:flex xl:hidden hidden"
                />
                <Image 
                    src={image5_small}
                    alt='M.Tilborg, Zwijndrecht'
                    width={510}
                    height={700}
                    className="md:hidden flex"
                />
            <div className="show_card">
                <Image 
                      src={daveCover}
                      alt='M.Tilborg, Zwijndrecht - cover'
                      width={510}
                      height={700}
                      className=""
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
        </div>
        

        <div className="swiper-pagination pagination_btn">
        </div>

        <div className='swiper-button-next swiper_aro_button'>
          <SwiperButtonNext />
        </div>
        <div className='swiper-button-prev swiper_aro_button'>
          <SwiperButtonPrev />
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperBig;

