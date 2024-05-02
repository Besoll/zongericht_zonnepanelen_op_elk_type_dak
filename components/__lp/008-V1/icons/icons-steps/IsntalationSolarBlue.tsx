import Image from 'next/image'
import isntalationSolarBlue from '@/public/lp/icons/isntalationSolarBlue.svg'

const IsntalationSolarBlue = () => (
  <Image 
    src={isntalationSolarBlue} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[30px] h-auto'
  />
);

export default IsntalationSolarBlue;
