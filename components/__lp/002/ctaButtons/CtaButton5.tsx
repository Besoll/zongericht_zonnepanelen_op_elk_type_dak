import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from 'next/link'

import dynamic from 'next/dynamic'
const HandIndex = dynamic(() => import('@/components/icons/HandIndex'))

const CtaButton5 = () => {
  return (
    <>
       {/* on Desktop Only */}
       <Button asChild className='bg-qoqu_Blue hover:bg-qoqu_Blue/100 text-white shadow-xl px-8 py-5 md:px-12 md:py-7 heading4 rounded-lg hover:scale-105 transition duration-300 ease-in-out
          '>
            <Link href="#schouwingForm" className="text-base md:font-semibold" >
                Vraag aan 
            </Link>
          </Button>
    </>
  )
}

export default CtaButton5