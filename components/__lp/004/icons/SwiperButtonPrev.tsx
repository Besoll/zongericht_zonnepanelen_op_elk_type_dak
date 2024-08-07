import Image from 'next/image'
import arrowWhite from '@/public/lp/icons/arrowWhite.svg'

const SwiperButtonPrev = () => (
      <Image 
      src={arrowWhite} 
      alt='arrow icon'
      width={30}
      height={20}
      loading='lazy'
      className='text-white ml-2 rotate-180'
    />
  );
  
  export default SwiperButtonPrev;