import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"


const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-grey-100 bg-white py-7 text-black-400 shadow-lg'>
        <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
            <Link href="/">
                <Image 
                    src='/zongericht-logo.svg'
                    alt='Logo Zongericht'
                    width={150} 
                    height={38} 
                />
            </Link>

            <Image
                src='/hamburger-menu.svg'
                alt='hamburger icon for menu'
                width={30}
                height={30}
                className='block md:hidden'
            />

            <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
                <li className='body-text !font-bold hover:text-primary'>
                    <Link href='/zonnepanelen'>Zonnepanelen</Link>
                </li>
                <li className='body-text !font-bold hover:text-primary'>
                    <Link href='/projecten'>Projecten</Link>
                </li>
                <li className='body-text !font-bold hover:text-primary'>
                    <Link href='/overons'>Over ons</Link>
                </li>               

            </ul>
            <Button asChild className='body-text bg-brand_original_main text-white hover:bg-brand_original_main2 shadow-lg !font-bold'>
                 <Link href="/schouwing">Schouwing aanvragen</Link>
            </Button>


        </div>
    </nav>
  )
}

export default Navbar