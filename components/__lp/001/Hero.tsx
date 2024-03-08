import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex w-full justify-center items-center flex-col max-w-[1200px] px-4 gap-0 md:gap-3 mb-16'>      
      <div className='w-full flex flex-col justify-start items-start gap-3'>
        <div className='flex flex-col items-start -mt-12 md:-mt-40 mb-2 justify-start'>              
              <h1 className='heading1 text-left'>
                Zonnepanelen voor<br></br>
                <span className='bg-gray-100 px-2 py-1 -ml-2 rounded-lg '>PVC-Daken</span><br></br>
                plaats je door Zongericht       
              </h1>
        </div>

        {/* texts container */}
        <div>
          <p className='text-left mb-6'>
            Hartelijk dank voor uw aanvraag.<br></br>

            Wij nemen binnen enkele dagen contact met u op.<br></br><br></br>

            Met zonnige groet,<br></br>

            Team Zongericht.<br></br>
          </p>
            
        </div>
      </div>   
      <div className='flex mt-3 md:mt-20 mb-2 justify-center w-full px-6 md:px-0 md:w-[85%] '>
            <Image 
                src='/bedankt-pagina-beso-dave.webp'
                alt='bedankt pagina - dave - happy clients'
                width={480}
                height={480}
                className="w-full md:w-[80%] h-auto md:hover:rotate-1 md:hover:skew-3 
                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer "
            />      
      </div>
  </div>
  )
}

export default Hero