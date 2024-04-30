// import Image from 'next/image'

import dynamic from 'next/dynamic'
const Form = dynamic(() => import("@/components/__lp/005/Form"))

const HeroImageSection = () => {
  return (
    <div className='w-full max-w-[500px] flex flex-row gap-4'>
        <div className='w-full h-auto flex flex-col justify-center items-center py-8 px-4 lg:px-12 lg:py-12 bg-white rounded-3xl gap-4 md:gap-6
        scroll-mt-8 ' 
        id="schouwingForm">
            <p className='text-3xl text-qoqu_Dark_Green font-bold text-center'>
            Vraag een <br></br>woninginspectie aan
            </p>
            <Form />
        </div>
    </div>


  )
}

export default HeroImageSection


