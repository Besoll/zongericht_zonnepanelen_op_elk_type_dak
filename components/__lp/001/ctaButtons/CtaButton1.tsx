import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from 'next/link'
import MobileVraagAan from "@/public/lp/icons/MobileVraagAan.svg"

import dynamic from 'next/dynamic'
const HandIndex = dynamic(() => import('@/components/icons/HandIndex'))

const CtaButton1 = () => {
  return (
    <>
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
    </>
  )
}

export default CtaButton1