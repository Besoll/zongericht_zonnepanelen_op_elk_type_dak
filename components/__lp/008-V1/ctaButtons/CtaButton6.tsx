import { Button } from "@/components/ui/button"
import Link from 'next/link'

const ctaButton = () => {
  return (
    <Button asChild className='bg-qoqu_Night_Blue hover:bg-qoqu_Night_Blue/90 text-white shadow-xl px-16 py-8 heading4 rounded-[0] hover:scale-105 transition duration-300 ease-in-out'>
        <Link href="#schouwingForm" className="text-base font-semibold" >
          Vraag aan
        </Link>
    </Button>
  )
}

export default ctaButton

