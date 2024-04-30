import { Button } from "@/components/ui/button"
import Link from 'next/link'

const ctaButton = () => {
  return (
    <Button asChild className='bg-qoqu_Light_Green hover:bg-white text-qoqu_Dark_Green shadow-xl px-12 py-7 heading4
    rounded-full w-[95%] md:w-fit
    hover:scale-105 transition duration-300 ease-in-out'>
        <Link href="#schouwingForm" className="text-base font-semibold" >
          VRAAG AAN
        </Link>
    </Button>
  )
}

export default ctaButton

