import Image from "next/image"

import dynamic from 'next/dynamic'
const CtaButton5 = dynamic(() => import('@/components/__lp/003/ctaButtons/CtaButton5'))


const Navbar = () => {
   
  return (
    <div className="flex mx-auto justify-center items-center bg-transparent w-full h-20  shadow-lg z-10">
      <div className="flex justify-between items-center w-full px-4 text-primary max-w-[1440px] z-10">
        <div className="w-fit h-auto px-3 py-2 rounded-lg bg-white/95 md:hover:scale-105 transition duration-300 ease-in-out">
          <Image 
              src='/zongericht-logo.svg'
              alt='Logo Zongericht'
              width={200} 
              height={50} 
              loading="lazy"
              className="h-auto"
          />         
        </div>
          <CtaButton5 />
      </div>
    </div>
  );
};

export default Navbar;