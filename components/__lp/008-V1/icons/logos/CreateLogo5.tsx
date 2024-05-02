import Image from 'next/image'
import createLogo5 from '@/public/lp/icons/partnerLogos/createLogo5.svg'

const CreateLogo5 = () => (
  <Image 
    src={createLogo5} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='h-[45px] w-auto'
  />
);

export default CreateLogo5;
