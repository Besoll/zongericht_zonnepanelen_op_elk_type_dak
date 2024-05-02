import Image from 'next/image'
import icon4companiesServed from '@/public/lp/icons/icon4companiesServed-Night-Blue.svg'

const Icon4companiesServed = () => (
  <Image 
    src={icon4companiesServed} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[50px] h-auto'
  />
);

export default Icon4companiesServed;
