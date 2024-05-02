import Image from 'next/image'
import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/005/ctaButtons/CtaButton2'))




const Section2Part2 = () => {
  return (    
    <div className='w-full h-auto flex flex-col md:flex-row-reverse gap-4 md:gap-20 justify-center items-center'>
        <div className='flex flex-col relative justify-center items-center w-full md:min-w-[300px] 
        lg:min-w-[450px]'>
            <Image 
                src='/lp/005/3-big.webp'
                alt='zonnepanelen op schuin pvc dak'
                width={400}
                height={250}
                className="w-full h-auto rounded-full lg:flex hidden hover:scale-105 hover:cursor-pointer hover:rotate-2 transition duration-300 ease-in-out shadow-lg"
            />
            <Image 
                src='/lp/005/3.webp'
                alt='zonnepanelen op schuin pvc dak'
                width={400}
                height={250}
                className="w-full h-auto rounded-full md:flex lg:hidden hidden hover:scale-105 hover:cursor-pointer hover:rotate-2 transition duration-300 ease-in-out shadow-lg"
            />
            <Image 
                src='/lp/005/3-small.webp'
                alt='zonnepanelen op schuin pvc dak'
                width={400}
                height={250}
                className="w-full h-auto rounded-full md:hidden flex"
            />
        </div>

        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>       
            <h2 className='w-full text-2xl md:text-3xl lg:text-4xl font-extrabold md:text-left text-center'>
                De installatie
            </h2> 
            <p className='md:text-left text-center  pb-2 md:pb-8'>
                Hoewel je het op het eerste gezicht misschien niet verwacht, biedt een golfplaten dak alle mogelijkheden voor de installatie van zonnepanelen. Er zijn verschillende manieren om de zonnepanelen te monteren op uw golfplaten dak. Een methode die we veel toepassen is montage door middel van aluminium strips, waarmee we de gevoelige plekken van de golfplaten kunnen versterken. Deze strips zorgen voor een sterke basis, en helpen om de panelen recht te kunnen plaatsen. Anders dan andere daken, leiden we de bekabeling niet eerst naar een omvormer, maar rechtstreeks naar de meterkast. Zo komt er geen omvormer in uw gebouw te staan en hoeven we geen extra boorgaten maken in het staal om deze kabels in te leiden. Dit geeft meer controle over de dichting van uw golfplaten dak, en eventuele lekkage of schade aan de isolatie te vermijden
            </p>
            <CtaButton />

        </div> 
    </div>  
  )
}

export default Section2Part2

