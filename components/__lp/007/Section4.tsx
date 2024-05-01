import Image from 'next/image'
import dynamic from 'next/dynamic'
const CtaButton = dynamic(() => import('@/components/__lp/004/ctaButtons/CtaButton6'))
const CompanyTag = dynamic(() => import('@/components/__lp/004/ui/CompanyTag'))
const CheckHexagon = dynamic(() => import('@/components/__lp/004/icons/CheckHexagon'))


const Section4 = () => {
  return (
    <div className='w-full max-w-[1440px] h-auto flex flex-col md:flex-row-reverse gap-4 md:gap-20 justify-center items-center md:jsutify-start md:items-start px-4 py-16 md:py-32'>
            <div className='w-full flex flex-col justify-center items-center rounded-3xl bg-qoqu_Grey/50 p-2'>
                <Image 
                    src='/lp/004/3-big.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-3xl lg:flex hidden"
                />
                <Image 
                    src='/lp/004/3.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-3xl md:flex lg:hidden hidden"
                />
                <Image 
                    src='/lp/004/3-small.webp'
                    alt='zonnepanelen op schuin pvc dak'
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-3xl md:hidden flex"
                />
            </div>

            <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-3  text-qoqu_Light_Orange'>
                <CompanyTag />           
                <h2 className='w-full heading3 md:heading2 lg:heading1 md:text-left text-center line-clamp-4 text-black'>
                Over ons
                </h2> 
                <p className='md:text-left text-center text-black pb-2 md:pb-8'>
                    Als ervaren installateur van zonnepanelen hebben wij de kennis in huis om zonnepanelen te plaatsen op ieder type dak. Wij zetten ons in voor hoogwaardige kwaliteit en ondersteunen onze dienstverlening met een garantie van 10 jaar op de installatie. Dankzij onze uitgebreide expertise, opgebouwd door de jaren heen, zijn we in staat om voor elke specifieke situatie een op maat gemaakte, zonne-energie oplossing te bieden. Dit zorgt ervoor dat u optimaal rendement haalt uit uw investering in zonne-energie
                </p>
                <CtaButton />

                

            </div> 
        </div>  
  )
}

export default Section4


