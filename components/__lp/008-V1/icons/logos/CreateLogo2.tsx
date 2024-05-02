import Image from 'next/image'
import createLogo2 from '@/public/lp/icons/partnerLogos/createLogo2.svg'

const CreateLogo2 = () => (
  <Image 
    src={createLogo2} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='h-[45px] w-auto'
  />
);

export default CreateLogo2;
