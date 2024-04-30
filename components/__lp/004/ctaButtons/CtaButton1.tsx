import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from 'next/link'
import MobileVraagAan from "@/public/lp/icons/MobileVraagAan.svg"

import dynamic from 'next/dynamic'
const HandIndex = dynamic(() => import('@/components/icons/HandIndex'))

const CtaButton = () => {
  return (
    <>
       {/* on Desktop Only */}
       <Button asChild className='bg-white hover:bg-qoqu_Light_Orange text-qoqu_Dark_Green hover:text-white shadow-xl px-8 py-7 heading4 rounded-full
          hover:scale-105 transition duration-300 ease-in-out
          md:flex hidden'>
            <Link href="#schouwingForm" className="text-base font-semibold" >
              Neem contact op
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
              className='w-[50px] h-auto bg-qoqu_Light_Orange rounded-lg'
            />
          </Link>
    </>
  )
}

export default CtaButton