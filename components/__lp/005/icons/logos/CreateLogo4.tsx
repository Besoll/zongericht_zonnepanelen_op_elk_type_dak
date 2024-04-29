import Image from 'next/image'
import createLogo4 from '@/public/lp/icons/partnerLogos/createLogo4.svg'

const CreateLogo4 = () => (
  <Image 
    src={createLogo4} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='h-[45px] w-auto'
  />
);

export default CreateLogo4;
