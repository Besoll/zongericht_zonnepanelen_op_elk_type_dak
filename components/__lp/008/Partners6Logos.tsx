import Image from 'next/image'
import Link from 'next/link'

import dynamic from 'next/dynamic'
const CreateLogo1 = dynamic(() => import('@/components/__lp/001/icons/logos/CreateLogo1'))
const CreateLogo2 = dynamic(() => import('@/components/__lp/001/icons/logos/CreateLogo2'))
const CreateLogo3 = dynamic(() => import('@/components/__lp/001/icons/logos/CreateLogo3'))
const CreateLogo4 = dynamic(() => import('@/components/__lp/001/icons/logos/CreateLogo4'))
const CreateLogo5 = dynamic(() => import('@/components/__lp/001/icons/logos/CreateLogo5'))
const CreateLogo6 = dynamic(() => import('@/components/__lp/001/icons/logos/CreateLogo6'))

const Partners6Logos = () => {
  return (
    <div className='flex flex-col my-16 px-4 gap-4 w-full max-w-[1440px] h-auto'>

        {/* desktop version */}
        <div className='md:flex flex-row gap-4 hidden '>
            <div className='bg-qoqu_Blue/10 rounded-lg flex justify-center items-center px-4 py-6 w-1/3
            md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
            md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                <CreateLogo1 />
            </div>
            <div className='bg-qoqu_Blue/10 rounded-lg flex justify-center items-center px-4 py-6 w-1/3
            md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
            md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                <CreateLogo2 />
            </div>
            <div className='bg-qoqu_Blue/10 rounded-lg flex justify-center items-center px-4 py-6 w-1/3
            md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
            md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                <CreateLogo3 />
            </div>                    
        </div>
        <div className='md:flex flex-row gap-4 hidden '>
            <div className='bg-qoqu_Blue/10 rounded-lg flex justify-center items-center px-4 py-6 w-1/3
            md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
            md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                <CreateLogo4 />
            </div>
            <div className='bg-qoqu_Blue/10 rounded-lg flex justify-center items-center px-4 py-6 w-1/3
            md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
            md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                <CreateLogo5 />
            </div>
            <div className='bg-qoqu_Blue/10 rounded-lg flex justify-center items-center px-4 py-6 w-1/3
            md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out 
            md:cursor-pointer md:hover:rotate-2 md:hover:shadow-2xl'>
                <CreateLogo6 />
            </div>                    
        </div>

        {/* mobile version */}
        <div className='flex flex-row gap-4 md:hidden '>
            <div className='bg-qoqu_Blue/10 rounded-lg flex justify-center items-center px-4 py-6 w-1/2'>
                <CreateLogo1 />                
            </div>
            <div className='bg-qoqu_Blue/10 rounded-lg flex justify-center items-center px-4 py-6 w-1/2'>
                <CreateLogo2 />                
            </div>            
        </div>
        <div className='flex flex-row gap-4 md:hidden '>
            <div className='bg-qoqu_Blue/10 rounded-lg flex justify-center items-center px-4 py-6 w-1/2'>
                <CreateLogo3 />                
            </div>
            <div className='bg-qoqu_Blue/10 rounded-lg flex justify-center items-center px-4 py-6 w-1/2'>
                <CreateLogo4 />                
            </div>            
        </div>
        <div className='flex flex-row gap-4 md:hidden '>
            <div className='bg-qoqu_Blue/10 rounded-lg flex justify-center items-center px-4 py-6 w-1/2'>
                <CreateLogo5 />                
            </div>
            <div className='bg-qoqu_Blue/10 rounded-lg flex justify-center items-center px-4 py-6 w-1/2'>
                <CreateLogo6 />                
            </div>            
        </div>

    </div>
  )
}

export default Partners6Logos