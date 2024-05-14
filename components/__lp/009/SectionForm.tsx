import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/009/ctaButtons/CtaButton2'))
// const Tag = dynamic(() => import('@/components/__lp/009/ui/CompanyTag'))
// const SectionHand = dynamic(() => import('@/components/__lp/009/SectionHand'))
const Form = dynamic(() => import("@/components/__lp/009/Form"))



const SectionForm = () => {
  return (
    <div  className='w-full flex flex-col md:flex-row  justify-center items-center max-w-[1440px] 
    gap-4 md:gap-12 px-4 md:px-8'>

        <div className='w-full h-auto flex flex-col gap-4  justify-center items-center'>


            <div className='w-full md:min-w-[300px] lg:min-w-[450px] h-auto
            flex flex-col relative justify-center items-center ml-4 mb-6'>

                <div className='w-full h-full text-qoqu_Grey outline outline-2 rounded-none rounded-t-full absolute top-4 right-4 z-0' />
                {/* 3 size image - mobile-tablet-desktop */}
                <Image 
                    src='/lp/009/3-big.webp'
                    alt='glas glas zonnepanelen op schuin bitumen dak 2'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-none rounded-t-full z-10
                    md:hover:scale-110  md:transition md:duration-300 md:ease-in-out 
                    md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:flex hidden
                    "
                />
                <Image 
                    src='/lp/009/3.webp'
                    alt='glas glas zonnepanelen op schuin bitumen dak 2'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full rounded-none rounded-t-full z-10
                    md:hover:scale-110  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-2 shadow-md md:hover:shadow-xl lg:hidden hidden md:flex"
                />
                <Image 
                    src='/lp/009/3-small.webp'
                    alt='glas glas zonnepanelen op schuin bitumen dak 2'
                    width={400}
                    height={600}
                    className="object-cover h-auto w-full shadow-lg rounded-none rounded-t-full z-10 flex md:hidden"
                />
            </div>

            <h2 className='text-3xl font-extrabold'>
                Vraag een woninginspectie aan
            </h2> 
            <p className='text-xl'>
                We helpen u graag verder!
            </p>
            
        </div>  

        <div className='w-[95%] py-6 md:py-16 px-4 md:px-8 flex flex-col justify-center items-center max-w-[1440px] gap-3 md:gap-4 scroll-mt-4 md:scroll-mt-24 snap-start scroll-smooth md:scroll-auto' id="schouwingForm">
            <Form />
        </div> 

    </div>
  )
}

export default SectionForm