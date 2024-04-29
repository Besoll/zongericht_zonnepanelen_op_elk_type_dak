import { Button } from "@/components/ui/button"
import Link from 'next/link'

const ctaButton = () => {
  return (
    <Button asChild className='bg-white hover:bg-qoqu_Light_Orange text-black  px-8 md:px-16 py-7 heading4 
    rounded-full w-[95%] md:w-fit
    hover:scale-105 transition duration-300 ease-in-out'>
        <Link href="#schouwingForm" className="text-base font-semibold" >
          Vraag aan
        </Link>
    </Button>
  )
}

export default ctaButton

