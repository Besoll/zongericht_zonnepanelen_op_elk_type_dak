import { Button } from "@/components/ui/button"
import Link from 'next/link'

import dynamic from 'next/dynamic'
const HandIndex = dynamic(() => import('@/components/icons/HandIndex'))

const CtaButton = () => {
  return (
    <>
       {/* on Desktop Only */}
       <Button asChild className='bg-qoqu_Light_Green hover:bg-qoqu_Light_Green/90 text-qoqu_Dark_Green shadow-xl px-4 py-5 md:px-8 md:py-7 heading4 rounded-lg hover:scale-105 transition duration-300 ease-in-out
          '>
            <Link href="#schouwingForm" className="text-base md:font-semibold" >
                Vraag aan <span className="hidden md:inline"></span>
            </Link>
          </Button>
    </>
  )
}

export default CtaButton