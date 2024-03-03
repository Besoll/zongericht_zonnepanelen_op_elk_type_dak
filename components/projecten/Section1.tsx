import Video from 'next-video';
import Zongericht1 from '/videos/Zongericht1.mp4';
import Zongericht2 from '/videos/Zongericht2.mp4'; 
import Zongericht3 from '/videos/Zongericht3.mp4'; 
import Zongericht4 from '/videos/Zongericht4.mp4';  
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from 'next/link';

import dynamic from 'next/dynamic'
const ArrowWhite = dynamic(() => import('@/components/icons/ArrowWhite'))


const Section1 = () => {
  return (
    <div className='flex flex-col gap-4 max-w-[1200px] mt-5  lg:-mt-10 mb-24'>
        {/* Top section */}
        <div className='flex justify-between flex-col lg:flex-row gap-4 w-full px-4 md:px-2'>
            {/* card 1 */}
            <div className='flex flex-col gap-2 text-center w-full lg:w-[23%] md:w-full border-b-2 mb-4 justify-center items-center'>
                <div className="w-[80%] lg:w-full h-auto gradient_white_orange shadow-lg rounded flex justify-center items-center relative ">
                   <Image 
                    src='/projecten/1/Zongericht-review-1.webp'
                    alt='Zonnepanelen in Zwijndrecht'
                    width={480}
                    height={480}
                    className="w-full max-w-[450px] h-auto"
                   />

                    <div className='w-[90%] rounded-lg bg-white/75 absolute bottom-16 px-2 py-2 '>
                        <h4 className='heading4 text-gradient_green'>
                            Zonnepanelen in Zwijndrecht
                        </h4>
                        <p className="">
                            Bekijk ons uitgelichte project: 12 glas-op-glas zonnepanelen geïnstalleerd op een dak met dakpannen
                        </p>
                    </div>
                    <Button asChild className='absolute gradient_green opacity-90 text-white shadow-2xl px-6 py-6 bottom-2 right-2 md:hover:skew-3 md:hover:-rotate-1
                    md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer'>
                        <Link 
                            href="#" 
                            className="!text-xl"
                        >
                            Meer info
                            <ArrowWhite />
                        </Link>
                    </Button>

                </div>

                <div className="w-[80%] lg:w-full h-auto flex justify-center items-center">
                   <Video 
                    src={Zongericht1}                    
                    loop={true} // Set loop attribute to true
                    controls={false} // Set controls attribute to false
                    autoPlay={true} // Enable autoplay
                    className="w-full h-auto md:cursor-pointer "
                   />    
                </div>                
            </div>

            {/* card 2 */}
            <div className='flex flex-col gap-2 text-center w-full lg:w-[23%] md:w-full border-b-2 mb-4 justify-center items-center'>
                <div className="w-[80%] lg:w-full h-auto gradient_white_orange shadow-lg rounded flex justify-center items-center relative ">
                   <Image 
                    src='/projecten/2/Zongericht-review-2.webp'
                    alt='Zonnepanelen in Oud Gastel'
                    width={480}
                    height={480}
                    className="w-full max-w-[450px] h-auto"
                   />

                    <div className='w-[90%] rounded-lg bg-white/75 absolute bottom-16 px-2 py-2 '>
                        <h4 className='heading4 text-gradient_green'>
                            Zonnepanelen in Oud Gastel
                        </h4>
                        <p className="">
                            Bekijk ons uitgelichte project: 29 glas-op-glas zonnepanelen geïnstalleerd op diverse dakvlakken van een schuin dak met dakpannen.
                        </p>
                    </div>
                    <Button asChild className='absolute gradient_green opacity-90 text-white shadow-2xl px-6 py-6 bottom-2 right-2 md:hover:skew-3 md:hover:-rotate-1
                    md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer'>
                        <Link 
                            href="#" 
                            className="!text-xl"
                        >
                            Meer info
                            <ArrowWhite />
                        </Link>
                    </Button>

                </div>

                <div className="w-[80%] lg:w-full h-auto flex justify-center items-center">
                   <Video 
                    src={Zongericht2}                    
                    loop={true} // Set loop attribute to true
                    controls={false} // Set controls attribute to false
                    autoPlay={true} // Enable autoplay
                    className="w-full h-auto md:cursor-pointer "
                   />    
                </div>                
            </div>

            {/* card 3 */}
            <div className='flex flex-col gap-2 text-center w-full lg:w-[23%] md:w-full border-b-2 mb-4 justify-center items-center'>
                <div className="w-[80%] lg:w-full h-auto gradient_white_orange shadow-lg rounded flex justify-center items-center relative ">
                   <Image 
                    src='/projecten/3/Zongericht-review-3.webp'
                    alt='Zonnepanelen in Elst'
                    width={480}
                    height={480}
                    className="w-full max-w-[450px] h-auto"
                   />

                    <div className='w-[90%] rounded-lg bg-white/75 absolute bottom-16 px-2 py-2 '>
                        <h4 className='heading4 text-gradient_green'>
                            Zonnepanelen in Elst
                        </h4>
                        <p className="">
                            Bekijk ons uitgelichte project: 10 glas-op-glas zonnepanelen vakkundig geplaatst op een plat dak.
                        </p>
                    </div>
                    <Button asChild className='absolute gradient_green opacity-90 text-white shadow-2xl px-6 py-6 bottom-2 right-2 md:hover:skew-3 md:hover:-rotate-1
                    md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer'>
                        <Link 
                            href="#" 
                            className="!text-xl"
                        >
                            Meer info
                            <ArrowWhite />
                        </Link>
                    </Button>

                </div>

                <div className="w-[80%] lg:w-full h-auto flex justify-center items-center">
                   <Video 
                    src={Zongericht3}                    
                    loop={true} // Set loop attribute to true
                    controls={false} // Set controls attribute to false
                    autoPlay={true} // Enable autoplay
                    className="w-full h-auto md:cursor-pointer "
                   />    
                </div>                
            </div>
            
            {/* card 4 */}
            <div className='flex flex-col gap-2 text-center w-full lg:w-[23%] md:w-full border-b-2 mb-4 justify-center items-center'>
                <div className="w-[80%] lg:w-full h-auto gradient_white_orange shadow-lg rounded flex justify-center items-center relative ">
                   <Image 
                    src='/projecten/4/Zongericht-review-4.webp'
                    alt='Zonnepanelen in Utrecht'
                    width={480}
                    height={480}
                    className="w-full max-w-[450px] h-auto"
                   />

                    <div className='w-[90%] rounded-lg bg-white/75 absolute bottom-16 px-2 py-2 '>
                        <h4 className='heading4 text-gradient_green'>
                            Zonnepanelen in Utrecht
                        </h4>
                        <p className="">
                            Bekijk ons uitgelichte project: 7 glas-op-glas zonnepanelen vakkundig gemonteerd op een PVC dakkapel én op een dakpannendak.
                        </p>
                    </div>
                    <Button asChild className='absolute gradient_green opacity-90 text-white shadow-2xl px-6 py-6 bottom-2 right-2 md:hover:skew-3 md:hover:-rotate-1
                    md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer'>
                        <Link 
                            href="#" 
                            className="!text-xl"
                        >
                            Meer info
                            <ArrowWhite />
                        </Link>
                    </Button>

                </div>

                <div className="w-[80%] lg:w-full h-auto flex justify-center items-center">
                   <Video 
                    src={Zongericht4}                    
                    loop={true} // Set loop attribute to true
                    controls={false} // Set controls attribute to false
                    autoPlay={true} // Enable autoplay
                    className="w-full h-auto md:cursor-pointer "
                   />    
                </div>                
            </div>
        </div>



        {/* Top section */}
        <div className='flex justify-center items-center flex-col md:flex-row gap-4 w-full px-4 md:px-2'>           

            
        </div>             
        
    </div>
  )
}

export default Section1