import { Button } from "@/components/ui/button"
import Link from 'next/link'

const ctaButton3 = () => {
  return (
    <Button asChild className='bg-qoqu_Light_Green hover:bg-qoqu_Light_Green/90 text-qoqu_Dark_Green shadow-xl px-8 py-7 heading4 rounded-lg 
    hover:scale-105 transition duration-300 ease-in-out'>
        <Link href="#schouwingForm" className="text-base font-semibold" >
            Vraag nu aan!
        </Link>
    </Button>
  )
}

export default ctaButton3