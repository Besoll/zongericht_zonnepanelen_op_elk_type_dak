import Image from 'next/image'
import arrowWhite from '@/public/lp/icons/arrowWhite.svg'

const SwiperButtonNext = () => (
      <Image 
      src={arrowWhite} 
      alt='arrow icon'
      width={30}
      height={20}
      loading='lazy'
      className='text-white ml-2'
    />
  );
  
  export default SwiperButtonNext;