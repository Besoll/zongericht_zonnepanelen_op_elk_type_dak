import { Button } from "@/components/ui/button"
import Link from 'next/link'


const CtaButton = () => {
  return (
    <>
       <Button asChild className='bg-qoqu_Orange hover:bg-qoqu_Orange/90 text-white shadow-xl px-12 py-8 text-2xl hover:scale-105 transition duration-300 ease-in-out rounded-xl'>
            <Link href="/stalen-dak" className="text-2xl font-semibold" >
              Kies daktype
            </Link>
        </Button>
    </>
  )
}

export default CtaButton