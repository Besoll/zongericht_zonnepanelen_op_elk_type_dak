"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

import dynamic from 'next/dynamic'
const SwiperButtonNext = dynamic(() => import("@/components/__lp/004/icons/SwiperButtonNext"))
const SwiperButtonPrev = dynamic(() => import("@/components/__lp/004/icons/SwiperButtonPrev"))

const Icon_1_Instalation = dynamic(() => import('@/components/__lp/004/icons/icons-steps/Icon_1_Instalation'))
const Icon_2_freeInspection = dynamic(() => import('@/components/__lp/004/icons/icons-steps/Icon_2_freeInspection'))
const Icon_3_Monitoring = dynamic(() => import('@/components/__lp/004/icons/icons-steps/Icon_3_Monitoring'))
const Icon_4_Customers = dynamic(() => import('@/components/__lp/004/icons/icons-steps/Icon_4_Customers'))
const Icon_5_Installers = dynamic(() => import('@/components/__lp/004/icons/icons-steps/Icon_5_Installers'))
const Icon_6_allRoof = dynamic(() => import('@/components/__lp/004/icons/icons-steps/Icon_6_allRoof'))





export default function SwiperBig() {

  // Define images and content in an array for easier management and rendering
  const slides = [
    
    { imageProject: <Icon_1_Instalation/>,
      title: "Installatie binnen 4 weken", 
      content: "Wij beschikken over meerdere gecertificeerde installatieteams, hierdoor zijn wij in staat altijd binnen 4 weken te installeren." },
    
    { imageProject: <Icon_2_freeInspection/>, 
      title: "Gratis woninginspectie",
      content: "Onze adviseur komt persoonlijk bij u langs voor een offerte op maat."},

    { imageProject: <Icon_3_Monitoring/>,
      title: "Monitorring systeem", 
      content: "Bij onze installaties krijgt u altijd een gratis monitorring systeem. Dit zijn ten alle tijden de nieuwste en meest geavanceerde monitorring systemen in omloop."},

    { imageProject: <Icon_4_Customers/>,
      title: "Hoge klantentevredenheid",
      content: "De tevredenheid van onze klanten staat bij Zongericht op nummer 1."},

    { imageProject: <Icon_5_Installers/>,
      title: "10 jaar installatiegarantie",
      content: "Wij staan achter onze kwaliteit en expertise en om dit te onderstrepen durven wij met gemak 10 jaar installatiegarantie te bieden."},

      { imageProject: <Icon_6_allRoof/>,
      title: "Expertise in alle daken",
      content: "Door onze verscheidenheid aan expertise zijn wij in staat op alle type daken te installeren."},
  ];
  

    return (
      <>
        <Swiper 
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          
          breakpoints={{
            320: {
              slidesPerView: 1,
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
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}

          navigation= {{
            nextEl: ".swiper-button-next-cards",
            prevEl: ".swiper-button-prev-cards",
          }}
          
          modules={[ Navigation, Mousewheel, Keyboard]}
          className="w-full h-auto max-w-[1440px] flex justify-center items-center text-center px-4 py-12 md:py-16"
        >
          {slides.map((slide, index) => (
          <SwiperSlide key={index} className='w-full min-h-[350px] xs:min-h-[300px] lg:min-h-[350px]
          flex justify-center items-center bg-white text-black px-6 py-6 rounded-3xl gap-8 md:gap-16'>
            <div className='w-full h-auto flex justify-center items-center'>
              {slide.imageProject} 
            </div>
              
            <p className='text-2xl font-bold pt-4 md:hover:scale-105 md:transition md:duration-300 md:ease-in-out 
            md:cursor-pointer md:hover:rotate-2'>
              {slide.title}
            </p>

            <div className='w-full h-auto flex justify-center items-center'>
              <hr className='w-[30%] h-0.5 rounded-3xl bg-black/30 my-4'></hr>
            </div>
            
            <div className='flex flex-col justify-center items-center gap-4'>
              {slide.content}
            </div> 
          </SwiperSlide>
          ))}          
        </Swiper>

        <div className='w-full flex flex-row-reverse justify-center items-center gap-4'>
          <div className='swiper-button-next-cards bg-qoqu_Light_Orange rounded-full pl-3 pr-5 py-6 text-center shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
            <SwiperButtonNext />
          </div>
          <div className='swiper-button-prev-cards bg-qoqu_Light_Orange rounded-full pl-3 pr-5 py-6 text-ceter shadow-md md:hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out md:cursor-pointer'>
            <SwiperButtonPrev />
          </div>
        </div>
      
      </>
  );
};

