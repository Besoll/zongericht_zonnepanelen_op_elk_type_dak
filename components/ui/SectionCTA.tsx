import Link from 'next/link'
import { Button } from "@/components/ui/button"





import dynamic from 'next/dynamic'
const HandIndex = dynamic(() => import('@/components/icons/HandIndex'))


const SectionCTA = () => {
  

  return (
    <div className='flex w-full justify-center items-center flex-col max-w-[1200px] gap-3 gradient_green 
    py-6 my-6 md:py-16 md:my-16 text-white rounded-md'>
     
      <h2 className='heading4 xs:heading4 xl:heading3'>
          Glas op glas
          <span className='text-brand_original_secondary'> zonnepanelen </span>
          op elk type dak               
      </h2>

      <p className='heading4'>
        Vraag vandaag een gratis en vrijblijvende woninginspectie en offerte aan
      </p>

      <Button asChild className='gradient_orange text-white shadow-xl scale-105 py-4 md:py-8
                          hover:scale-110 transition ease-in-out animate-spin
                          '>
              <Link 
                  href="/schouwing" 
                  className="text-base font-semibold"
              >
                  Vraag een schouwing aan
                  <span className='ml-2 w-[35px]'><HandIndex /></span>
              </Link>
      </Button> 
      
    </div>
    )
  }

export default SectionCTA