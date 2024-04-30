import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from 'next/link'
import MobileVraagAan from "@/public/lp/icons/MobileVraagAanDark.svg"

import dynamic from 'next/dynamic'
const HandIndex = dynamic(() => import('@/components/icons/HandIndex'))

const CtaButton = () => {
  return (
    <>
       {/* on Desktop Only */}
       <Button asChild className='bg-qoqu_Light_Green hover:bg-white text-qoqu_Dark_Green shadow-xl px-12 py-7 heading4 rounded-full
          hover:scale-105 transition duration-300 ease-in-out
          md:flex hidden'>
            <Link href="#schouwingForm" className="text-base font-semibold" >
              VRAAG AAN
                {/* Vraag aan <HandIndex /> */}
            </Link>
        </Button>

          {/* on Mobile Only */}
          <Link href="#schouwingForm" className="md:hidden" >
            <Image 
              src={MobileVraagAan} 
              alt="Mobile Vraag Aan Icon" 
              width={20} 
              height={20} 
              className='w-[60px] h-auto bg-qoqu_Light_Green text-qoqu_Dark_Green rounded-lg'
            />
          </Link>
    </>
  )
}

export default CtaButton