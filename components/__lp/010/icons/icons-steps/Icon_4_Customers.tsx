import Image from 'next/image'
import icon_4 from '@/public/lp/icons/stepsIcons/4-customers-Light-Blue.svg'

const Icon_4_Customers = () => (
  <Image 
    src={icon_4} 
    alt='customers icon'
    width={60}
    height={60}
    loading='lazy'
    className='w-[40px] lg:w-[60px] md:w-[90px] h-auto'
  />
);

export default Icon_4_Customers;
