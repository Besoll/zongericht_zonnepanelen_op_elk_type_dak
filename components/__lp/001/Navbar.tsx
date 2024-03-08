
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import MobileVraagAan from "@/public/icons/MobileVraagAan.svg"

import dynamic from 'next/dynamic'
const HandIndex = dynamic(() => import('@/components/icons/HandIndex'))


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

          {/* on Desktop Only */}
          <Button asChild className='bg-qoqu_Blue hover:bg-qoqu_Blue/100 text-white shadow-xl px-8 py-7 heading4 rounded-[50px] 
          hover:scale-105 transition duration-300 ease-in-out
          md:flex hidden'>
            <Link href="#schouwingForm" className="text-base font-semibold" >
                Vraag aan <HandIndex />
            </Link>
          </Button>

          {/* on Mobile Only */}
          <Link href="#schouwingForm" className="md:hidden" >
            <Image 
              src={MobileVraagAan} 
              alt="CMobile Vraag Aan Icon" 
              width={20} 
              height={20} 
              className='w-[50px] h-auto bg-qoqu_Blue rounded-md'
            />
          </Link>
      </div>
    </div>
  );
};

export default Navbar;