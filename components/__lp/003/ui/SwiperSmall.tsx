"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

import dynamic from 'next/dynamic'
const Stars5 = dynamic(() => import("@/components/__lp/003/icons/Stars5"))
const SwiperButtonNext = dynamic(() => import("@/components/__lp/003/icons/SwiperButtonNext"))
const SwiperButtonPrev = dynamic(() => import("@/components/__lp/003/icons/SwiperButtonPrev"))


import imageProject1 from "@/public/lp/Reviews/1-4.webp"
import imageProject2 from "@/public/lp/Reviews/2-4.webp"
import imageProject3 from "@/public/lp/Reviews/3-4.webp"
import imageProject4 from "@/public/lp/Reviews/4-4.webp"
import imageProject6 from "@/public/lp/Reviews/6-4.webp"
import imageProfile1 from "@/public/lp/Reviews/1-3.webp"
import imageProfile2 from "@/public/lp/Reviews/2-3.webp"
import imageProfile3 from "@/public/lp/Reviews/3-3.webp"
import imageProfile4 from "@/public/lp/Reviews/4-3.webp"
import imageProfile6 from "@/public/lp/Reviews/6-3.webp"



export default function SwiperBig() {

  // Define images and content in an array for easier management and rendering
  const slides = [
    
    { imageProject: imageProject6, imageProfile: imageProfile6,
      title: "34 zonnepanelen - Den Bosch, Noord-Brabant", 
      huiseIgenaar: "R. Rooij, Noord-Brabant", statusWho: "Huiseigenaar", 
      content: "Zonne-energie is de toekomst, en dankzij de fijne en goed werkende zonnepanelen die keurig op ons dak liggen, zijn we nu volledig in de wereld van duurzame energie gestapt. Onze ervaring met Zongericht is ronduit positief te noemen. We kregen niet alleen hoogwaardige zonnepanelen, maar ook een uitstekende service van hun team.",
      statusProduce: "14620 Wp, 13226 kWh", date: "29.05.2023" },
    
    { imageProject: imageProject3, imageProfile: imageProfile3, 
      title: "10 zonnepanelen - Nijmegen, Gelderland",
      huiseIgenaar: "W. Sonderen, Elst", statusWho: "Huiseigenaar",  
      content: "De keuze voor Zongericht kwam voort uit hun specialisatie in glas op glas zonnepanelen, een technologie die zich onderscheidt door zijn duurzaamheid en efficiëntie.",
      statusProduce: "4300 Wp, 3890 kWh", date: "25.04.2023" },

    { imageProject: imageProject2, imageProfile: imageProfile2, 
      title: "29 zonnepanelen - Roosendaal, Noord-Brabant",
      huiseIgenaar: "S. Vergouwen, Oud Gastel", statusWho: "Huiseigenaar", 
      content: "Na grondig onderzoek en verschillende gesprekken met zonne-energiebedrijven, heb ik voor Zongericht gekozen om mijn huis va zonnepanelen te voorzien.",
      statusProduce: "12470 Wp, 11165 kWh", date: "03.04.2023" },

    { imageProject: imageProject1, imageProfile: imageProfile1, 
      title: "12 zonnepanelen - Drechtsteden, Zuid-Holland", 
      huiseIgenaar: "M.Tilborg, Zwijndrecht", statusWho: "Huiseigenaar",
      content: "Wat Zongericht onderscheid van de rest, is hun toewijding aan kwaliteit. Ze leveren enkel glas-op-glas zonnepanelen, wat bekend staat als de beste kwaliteit in de industrie.",
      statusProduce: "5160 Wp, 4428 kWh", date: "02.06.2023" },

    { imageProject: imageProject4, imageProfile: imageProfile4, 
      title: "7 zonnepanelen - Utrecht", 
      huiseIgenaar: "R. Panhuysen, Utrecht", statusWho: "Huiseigenaar", 
      content: "Bij een aantal andere bedrijven wilde deze niet op mijn dakkapel zonnepanelen leggen in verband met het gevaar op lekkages.",
      statusProduce: "3010 Wp, 2583 kWh", date: "23.05.2023" },
  ];
  

    return (
      <>

        <style jsx global>{`
            .swiper-pagination-bullet-active {
              background: #f8452d;
            }
          `}
        </style>
        <Swiper 
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            clickable: true,          
          }}
          loop={true}
          
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            601: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}

          navigation= {{
            nextEl: ".swiper-button-next-small",
            prevEl: ".swiper-button-prev-small",
          }}
          
          modules={[Pagination, Navigation, Mousewheel, Keyboard]}
          className="flex justify-center items-center text-center w-full h-auto max-w-[1440px] px-4 py-12 md:py-16"
        >
          {slides.map((slide, index) => (
          <SwiperSlide key={index} className='w-full min-h-[600px] xxs:min-h-[540px] xs:min-h-[500px] md:min-h-[350px] bg-qoqu_Orange/10 px-6 py-6 rounded-xl shadow-sm duration-300 ease-in-out md:cursor-pointer gap-8'>
            <div className='w-full h-auto min-h-[600px] xxs:min-h-[540px] xs:min-h-[500px] md:min-h-[300px] flex flex-col-reverse md:flex-col justify-center md:justify-between items-center text-center py-4 gap-4 md:gap-1'>
              <p className='text-base'>
                {slide.content}
              </p>
              
                <hr className='w-[90%] h-0.5 rounded-lg bg-black/40 my-4'></hr>
                <div className='flex flex-col justify-center items-center gap-4'>

                  <Image 
                      src={slide.imageProject} alt={`${slide.title} big`} width={510} height={700} 
                      className='w-[100px] h-auto rounded-lg'
                  />
                      
                  <div className='w-full h-auto flex flex-col justify-center items-center '>
                    <p className='text-lg font-semibold'>
                      {slide.title}
                    </p>
                    <p className='text-sm'>
                      {slide.statusProduce}
                    </p>
                  </div>

                </div> 

            </div>
          </SwiperSlide>
          ))}          
        </Swiper>

        <div className='w-full flex flex-row-reverse justify-center items-center gap-4 mt-4'>
          <div className='swiper-button-next-small bg-qoqu_Orange rounded-lg pl-3 pr-5 py-6 text-center shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
            <SwiperButtonNext />
          </div>
          <div className='swiper-button-prev-small bg-qoqu_Orange rounded-lg pl-3 pr-5 py-6 text-ceter shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
            <SwiperButtonPrev />
          </div>
        </div>
      
      </>
  );
};

