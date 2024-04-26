// import Image from 'next/image'

import dynamic from 'next/dynamic'
const Form = dynamic(() => import("@/components/__lp/004/Form"))

const HeroImageSection = () => {
  return (
    <div className='w-full max-w-[500px] flex flex-row gap-4'>
        <div className='w-full h-auto flex flex-col justify-center items-center py-8 px-4 lg:px-12 lg:py-12 bg-white rounded-3xl gap-4 md:gap-6'>
            <p className='text-3xl text-qoqu_Light_Orange font-bold text-left'>
                Vraag een vrijblijvende offerte aan
            </p>
            <Form />
        </div>
    </div>


  )
}

export default HeroImageSection


