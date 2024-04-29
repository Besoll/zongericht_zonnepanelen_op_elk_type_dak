import { Button } from "@/components/ui/button"
import Link from 'next/link'

const ctaButton = () => {
  return (
    <Button asChild className='bg-qoqu_Light_Orange hover:bg-black text-white  px-8 py-7 heading4 
    rounded-full w-[95%] md:w-fit
    hover:scale-105 transition duration-300 ease-in-out'>
        <Link href="#schouwingForm" className="text-base font-semibold" >
         <span className="drop-shadow-md"> Neem nu contact op</span>
        </Link>
    </Button>
  )
}

export default ctaButton

