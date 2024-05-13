import Image from 'next/image'
import createLogo1 from '@/public/lp/icons/partnerLogos/createLogo1.svg'

const CreateLogo1 = () => (
  <Image 
    src={createLogo1} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='h-[45px] w-auto'
  />
);

export default CreateLogo1;
