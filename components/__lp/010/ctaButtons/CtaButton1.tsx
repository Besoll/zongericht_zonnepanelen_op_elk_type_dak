import { Button } from "@/components/ui/button"
import Link from 'next/link'
// import Image from "next/image"
// import MobileVraagAan from "@/public/lp/icons/MobileVraagAan.svg"


const CtaButton = () => {
  return (
    <>
       {/* on Desktop Only */}
       <Button asChild className='bg-qoqu_Light_Blue hover:bg-qoqu_Orange text-white shadow-xl px-12 py-8 text-2xl hover:scale-105 transition duration-300 ease-in-out rounded-xl md:mr-10
          md:flex flex'>
            <Link href="#schouwingForm" className="text-2xl font-semibold" >
              Vraag aan
            </Link>
        </Button>

          {/* on Mobile Only
          <Link href="#schouwingForm" className="md:hidden" >
            <Image 
              src={MobileVraagAan} 
              alt="Mobile Vraag Aan Icon" 
              width={20} 
              height={20} 
              className='w-[60px] h-auto bg-qoqu_Orange text-white rounded-[0]'
            />
          </Link> */}
    </>
  )
}

export default CtaButton