import Image from "next/image"

import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/010/ctaButtons/CtaButton1'))


const Navbar = () => {
   
  return (
    <div className="flex mx-auto justify-center items-center bg-transparent w-full h-auto md:pt-2 ">
      <div className="flex justify-between items-center w-full px-4 text-primary max-w-[1440px] z-10 gap-4  py-3">
        <div className="w-fit h-auto px-3 py-2 rounded-lg md:hover:scale-105 transition duration-300 ease-in-out">
          <Image 
              src='/zongericht-logo.svg'
              alt='Logo Zongericht'
              width={200} 
              height={50} 
              loading="lazy"
              className="w-full h-auto"
          />         
        </div>
          <CtaButton />
      </div>
    </div>
  );
};

export default Navbar;