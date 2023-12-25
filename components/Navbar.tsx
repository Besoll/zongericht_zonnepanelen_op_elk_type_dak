import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white'>
        <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
            <Link href="/">
                <Image 
                    src='/jsm-logo.svg'
                    alt='Logo Zongericht'
                    width={55} 
                    height={40} 
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
                <li className='body-text !font-bold'>
                    <Link href='/zonnepanelen' target='_blank'>Zonnepanelen</Link>
                </li>
                <li className='body-text !font-bold'>
                    <Link href='/projecten' target='_blank'>Projecten</Link>
                </li>
                <li className='body-text !font-bold'>
                    <Link href='/overons' target='_blank'>Over ons</Link>
                </li>
                <li className='body-text text-gradient_blue-purple !font-bold'>
                    <Link href='/schouwing' target='_blank'>Schouwing aanvragen</Link>
                </li>

            </ul>
        </div>
    </nav>
  )
}

export default Navbar