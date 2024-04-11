import { Button } from "@/components/ui/button"
import Link from 'next/link'

const ctaButton2 = () => {
  return (
    <Button asChild className='bg-qoqu_Light_Green hover:bg-qoqu_Light_Green/90 text-qoqu_Dark_Green shadow-xl px-8 py-7 heading4 
    rounded-lg w-[95%] md:w-fit
    hover:scale-105 transition duration-300 ease-in-out'>
        <Link href="#schouwingForm" className="text-base font-semibold" >
          Gratis huisinspectie
        </Link>
    </Button>
  )
}

export default ctaButton2

