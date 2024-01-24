import Image from 'next/image'
import Link from 'next/link'

const PartnersLogos = () => {
  return (
    <div className='flex flex-col md:flex-row items-center'>
        <Link href='#productUSP'>
            <Image 
                src='/zonnepanelen/logos/MeyerBurger-logo.svg'
                alt='Meyer Burger logo'
                width={240}
                height={50}
                className="h-auto px-2 md:mr-10 my-5 mt-16 md:mt-0
                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
            /> 
        </Link>
        <Link href='#productUSP'>
            <Image 
                src='/zonnepanelen/logos/denim-logo.svg'
                alt='denim logo'
                width={120}
                height={50}
                className="h-auto px-2 md:mr-10
                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
            />
        </Link>
        <Link href='#productUSP'>
            <Image 
                src='/zonnepanelen/logos/sonnenstromFabrik.svg'
                alt='SonnenstromFabrik logo'
                width={220}
                height={50}
                className="h-auto px-2 my-5
                md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
            />
        </Link> 
    </div>
  )
}

export default PartnersLogos