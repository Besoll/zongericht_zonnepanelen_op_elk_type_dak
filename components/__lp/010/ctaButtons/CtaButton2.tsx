import { Button } from "@/components/ui/button"
import Link from 'next/link'

const ctaButton = () => {
  return (
    <Button asChild className='bg-qoqu_Light_Blue hover:bg-qoqu_Orange rounded-xl text-white shadow-xl px-16 py-8 text-2xl hover:scale-105 transition duration-300 ease-in-out'>
        <Link href="#schouwingForm" className="text-2xl font-semibold" >
          Vraag aan
        </Link>
    </Button>
  )
}

export default ctaButton

