import Image from "next/image"

import dynamic from 'next/dynamic'
const CtaButton5 = dynamic(() => import('@/components/__lp/001/ctaButtons/CtaButton5'))


const Navbar = () => {
   
  return (
    <div className="flex mx-auto justify-center items-center w-full h-20  bg-white shadow-lg z-10">
      <div className="flex justify-between items-center w-full px-4 text-primary max-w-[1440px]">
          <Image 
              src='/zongericht-logo.svg'
              alt='Logo Zongericht'
              width={200} 
              height={50} 
              loading="lazy"
              className="hover:scale-105 transition duration-300 ease-in-out"
          />          
          <CtaButton5 />
      </div>
    </div>
  );
};

export default Navbar;