"use client"
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
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
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
        el: '.swiper-pagination',
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
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
      className="success_swiper"
    >
      <div
        className="swiper mySwipers tmb_card_swiper success_swiper"
      >
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>
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
                    <div className="show_content">
                      <Stars5 />
                      <p className="card_brief">
                        "Al met al kan ik zeggen dat mijn ervaring met Zongericht positief is. Van begin tot eind overtroffen ze mijn verwachtingen met hun toewijding aan kwaliteit, snelle service, expertise
                        en vriendelijkheid."
                      </p>
                      <h4 className="card_author">M.Tilborg, Zwijndrecht</h4>
                      <p className="card_info">Huiseigenaar</p>
                    </div>
                  </div>
            </div>
          </div>
          <div className='swiper-slide'>
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
                    <div className="show_content">
                      <Stars5 />
                      <p className="card_brief">
                        "Al met al kan ik zeggen dat mijn ervaring met Zongericht positief is. Van begin tot eind overtroffen ze mijn verwachtingen met hun toewijding aan kwaliteit, snelle service, expertise
                        en vriendelijkheid."
                      </p>
                      <h4 className="card_author">M.Tilborg, Zwijndrecht</h4>
                      <p className="card_info">Huiseigenaar</p>
                    </div>
                  </div>
            </div>
          </div>          
        </div>

        <div className="swiper-pagination pagination_btn">
        </div>

        <div className='swiper-button-next swiper_aro_button'>
          <SwiperButtonNext />
        </div>
        <div className='swiper-button-prev swiper_aro_button'>
          <SwiperButtonPrev />
        </div>

      
      </div>

    </Swiper>
  );
};

export default SwiperBig;

