import Image from 'next/image'
import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/010/ctaButtons/CtaButton2'))




const Section2Part1 = () => {
  return (    
    <div className='w-full h-auto flex flex-col md:flex-row gap-4 md:gap-20 justify-center items-center'>
        <div className='flex flex-col relative justify-center items-center w-full md:min-w-[300px] 
        lg:min-w-[450px]'>
            <Image 
                src='/lp/010/3-big.webp'
                alt='zonnepanelen op schuin pvc dak'
                width={400}
                height={250}
                className="w-full h-auto rounded-none lg:flex hidden hover:scale-105 hover:cursor-pointer hover:rotate-2 transition duration-300 ease-in-out shadow-lg"
            />
            <Image 
                src='/lp/010/3.webp'
                alt='zonnepanelen op schuin pvc dak'
                width={400}
                height={250}
                className="w-full h-auto rounded-none md:flex lg:hidden hidden hover:scale-105 hover:cursor-pointer hover:rotate-2 transition duration-300 ease-in-out shadow-lg"
            />
            <Image 
                src='/lp/010/3-small.webp'
                alt='zonnepanelen op schuin pvc dak'
                width={400}
                height={250}
                className="w-full h-auto rounded-none md:hidden flex"
            />
        </div>

        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>       
            <h2 className='w-full text-2xl md:text-3xl lg:text-4xl font-extrabold md:text-left text-center'>
                Vrijblijvende wooninspectie en offerte
            </h2> 
            <p className='md:text-left text-center  pb-2 md:pb-8'>
                Benieuwd of glas op glas zonnepanelen een bron van energie voor uw huishouden zou kunnen zijn? Vraag een gratis offerte aan en plan uw vrijblijvende bezichtiging. Wij zijn experts in het installeren van zonnepanelen op elk daktype, dus ook op uw pannendak. Ons team staat voor u klaar om uw woning te inspecteren, een op maat gemaakte offerte uit te schrijven en alle vragen die u heeft te beantwoorden. Ook als u van plan bent zonnepanelen op langere termijn te plaatsen, kan het helpen om alvast inzicht te hebben in de kosten. Wij helpen u graag.
            </p>
            <CtaButton />

        </div> 
    </div>  
  )
}

export default Section2Part1

