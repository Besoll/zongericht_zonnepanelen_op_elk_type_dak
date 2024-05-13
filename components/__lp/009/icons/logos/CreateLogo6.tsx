import Image from 'next/image'
import createLogo6 from '@/public/lp/icons/partnerLogos/createLogo6.svg'

const CreateLogo6 = () => (
  <Image 
    src={createLogo6} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='h-[45px] w-auto'
  />
);

export default CreateLogo6;
