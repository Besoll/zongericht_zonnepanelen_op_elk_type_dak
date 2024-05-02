import Image from 'next/image'
import tagLine from '@/public/lp/icons/tagLineRed.svg'

const TagLine = () => (
  <Image 
    src={tagLine} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[15px] h-auto'
  />
);

export default TagLine;
