import { Button } from "@/components/ui/button"
import Link from 'next/link'


const ctaButton4 = () => {
  return (
    <Button asChild className='bg-qoqu_Blue hover:bg-qoqu_Blue/100 text-white shadow-xl px-8 py-7 heading4 rounded-lg 
    hover:scale-105 transition duration-300 ease-in-out
    '>
        <Link href="#schouwingForm" className="text-base font-semibold" >
          Huis inspectie aanvragen
        </Link>
    </Button>
  )
}

export default ctaButton4