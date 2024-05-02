import Image from 'next/image'
import createLogo3 from '@/public/lp/icons/partnerLogos/createLogo3.svg'

const CreateLogo3 = () => (
  <Image 
    src={createLogo3} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='h-[45px] w-auto'
  />
);

export default CreateLogo3;
