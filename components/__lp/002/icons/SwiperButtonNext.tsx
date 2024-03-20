import Image from 'next/image'
import swiperButtonNext from '@/public/lp/icons/swiper-button-next.svg'

const SwiperButtonNext = () => (
    <Image 
      src={swiperButtonNext} 
      alt='arrow icon'
      width={64}
      height={64}
      loading='lazy'
      className='w-[64px] h-auto'
    />
  );
  
  export default SwiperButtonNext;