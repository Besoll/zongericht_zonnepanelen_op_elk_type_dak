import Image from 'next/image'

import dynamic from 'next/dynamic'
const CtaButton2 = dynamic(() => import('@/components/__lp/001/ctaButtons/CtaButton2'))
const KlantenGuarante = dynamic(() => import('@/components/__lp/001/icons/KlantenGuarante'))

const Hero = () => {
  return (
    <div className='flex w-full justify-center items-center md:justify-start md:items-start max-w-[1200px] px-4 md:px-8 gap-0 md:gap-2 mb-16 flex-col-reverse md:flex-row'>      
        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>
            <div className='w-full flex flex-col items-start mb-2 justify-start'>              
                <h1 className='w-full heading3 md:heading2 lg:heading1 md:text-left text-center line-clamp-4'>
                    Zonnepanelen voor 
                    <br />
                    <span className='bg-qoqu_Blue/20 px-2 -ml-2 rounded-lg font-black heading2 lg:heading1'>PVC-Daken</span>
                    <br />
                    plaats je door Zongericht       
                </h1> 
            </div>

            {/* texts container */}
            <div className='w-full md:w-[80%]'>
                <p className='md:text-left text-center mb-4'>
                Bij Zongericht zijn we gespecialiseerd in het efficiënt plaatsen van zonnepanelen op PVC-daken. Met onze diepgaande kennis en passie voor duurzaamheid bieden we een gratis huisinspectie om uw dak te evalueren en een vrijblijvende offerte op maat. Wij zorgen voor een naadloze installatie die optimaal presteert en perfect past bij uw PVC-dak. Vertrouw op onze expertise voor een zorgeloze overgang naar groene energie, en maak uw huis een toonbeeld van duurzaamheid met Zongericht aan uw zijde.
                </p>
            </div>
            <CtaButton2 />
            <KlantenGuarante />
        </div>   
      
        <div className='flex flex-col relative justify-center items-center w-[35%] md:min-w-[300px] lg:min-w-[450px]'>
            <div className='w-full h-auto min-w-[300px] min-h-[412px] md:min-h-[400px] lg:min-h-[600px] rounded-[500px]'>     
                <div className="w-full min-w-[300px] aspect-[2.90486565/4]">
                    <Image
                        src='/lp/001/1-small.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={600}
                        height={826}
                        loading='eager'                    
                        className="w-full h-auto min-w-[300px] rounded-[500px]"
                    />
                </div>           
                {/* <div className="w-full min-w-[300px] aspect-[2.90381125/4] rounded-[500px] xl:flex hidden">
                    <Image
                        src='/lp/001/1-small.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={400}
                        height={551}
                        loading='eager'                    
                        className="w-full h-auto min-w-[300px] rounded-[500px]"
                    />
                </div>
                <div className="w-full min-w-[300px] aspect-[2.90381125/4] rounded-[500px] md:flex xl:hidden hidden">
                    <Image 
                        src='/lp/001/1-small.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={400}
                        height={551}
                        loading='eager'                     
                        className="w-full h-auto min-w-[300px] rounded-[500px]"
                    />
                </div>
                <div className="w-full min-w-[300px] aspect-[2.92/4] rounded-[500px] md:hidden flex">                    
                    <Image 
                        src='/lp/001/1-skeleton.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={400}
                        height={551}
                        loading='eager'                         
                        className="w-full h-auto min-w-[300px] rounded-[500px]"
                    />           
                </div> */}
            </div>
            <div className='bg-white w-[95%] h-auto py-4 px-4 rounded-lg shadow-md flex flex-row gap-2 items-center justify-center absolute bottom-2 
            md:hover:scale-105 md:hover:skew-y-2  md:transition md:duration-300 md:ease-in-out md:cursor-pointer md:hover:rotate-2
            min-w-[300px]
            '>
                <div className="w-full aspect-[3.5/1] flex flex-col ">
                    <Image 
                        src='/lp/001/1-2.webp'
                        alt='zonnepanelen op schuin pvc dak'
                        width={120}
                        height={35}
                        loading='eager'
                        className="w-full object-cover h-auto "
                    />          
                </div>
                
                <div className='flex flex-col text-black w-full'>
                    <p className='text-2xl font-bold'>
                        4,000+
                    </p>
                    <p>
                        Tevreden Klanten
                    </p>
                </div>        
            </div>
        </div>
    </div>
  )
}

export default Hero