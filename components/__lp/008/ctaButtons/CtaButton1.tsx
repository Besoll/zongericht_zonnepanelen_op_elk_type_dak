import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from 'next/link'
import MobileVraagAan from "@/public/lp/icons/MobileVraagAan.svg"


const CtaButton = () => {
  return (
    <>
       {/* on Desktop Only */}
       <Button asChild className='bg-qoqu_Night_Blue hover:bg-qoqu_Night_Blue/90 text-white shadow-md px-12 py-8 text-2xl hover:scale-105 transition duration-300 ease-in-out rounded-[0] 
          md:flex hidden'>
            <Link href="#schouwingForm" className="text-2xl font-medium" >
              Vraag aan
            </Link>
        </Button>

          {/* on Mobile Only */}
          <Link href="#schouwingForm" className="md:hidden" >
            <Image 
              src={MobileVraagAan} 
              alt="Mobile Vraag Aan Icon" 
              width={20} 
              height={20} 
              className='w-[60px] h-auto bg-qoqu_Night_Blue text-white rounded-[0]'
            />
          </Link>
    </>
  )
}

export default CtaButton