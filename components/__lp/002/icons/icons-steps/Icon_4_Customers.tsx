import Image from 'next/image'
import icon_4 from '@/public/lp/icons/stepsIcons/4-customers.svg'

const Icon_4_Customers = () => (
  <Image 
    src={icon_4} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[30px] h-auto'
  />
);

export default Icon_4_Customers;
