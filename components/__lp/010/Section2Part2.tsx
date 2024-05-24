import Image from 'next/image'
import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/010/ctaButtons/CtaButton2'))




const Section2Part2 = () => {
  return (    
    <div className='w-full h-auto flex flex-col md:flex-row-reverse gap-4 md:gap-20 justify-center items-center'>
        <div className='flex flex-col relative justify-center items-center w-full md:min-w-[300px] 
        lg:min-w-[450px]'>
            <Image 
                src='/lp/010/4-big.webp'
                alt='zonnepanelen op schuin pvc dak'
                width={400}
                height={250}
                className="w-full h-auto rounded-none lg:flex hidden hover:scale-105 hover:cursor-pointer hover:rotate-2 transition duration-300 ease-in-out shadow-lg"
            />
            <Image 
                src='/lp/010/4.webp'
                alt='zonnepanelen op schuin pvc dak'
                width={400}
                height={250}
                className="w-full h-auto rounded-none md:flex lg:hidden hidden hover:scale-105 hover:cursor-pointer hover:rotate-2 transition duration-300 ease-in-out shadow-lg"
            />
            <Image 
                src='/lp/010/4-small.webp'
                alt='zonnepanelen op schuin pvc dak'
                width={400}
                height={250}
                className="w-full h-auto rounded-none md:hidden flex"
            />
        </div>

        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>       
            <h2 className='w-full text-2xl md:text-3xl lg:text-4xl font-extrabold md:text-left text-center'>
                De installatie
            </h2> 
            <p className='md:text-left text-center  pb-2 md:pb-8'>
                Er zijn verschillende manieren om de zonnepanelen te monteren op uw pannendak. Onze adviseur maakt tijdens de wooninspectie een legplan, waarbij gekeken wordt naar factoren als astverdeling en windbelasting. Cruciaal voor het legplan is de hellingshoek van het dak; die bepaalt namelijk hoeveel haken er nodig zijn om de zonne-installatie veilig te plaatsen. De haken dienen om de profielen vast te maken, waarop de zonnepanelen komen te liggen.
            </p>
            <CtaButton />

        </div> 
    </div>  
  )
}

export default Section2Part2

