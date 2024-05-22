import Image from 'next/image'
import iconInstallation from '@/public//lp/icons/isntalationSolar-Night-Blue.svg'

const IconInstallation = () => (
  <Image 
    src={iconInstallation}
    alt='Icon Installation'
    width={32}
    height={32}
    className="w-[45px] h-auto"
  />
);

export default IconInstallation;
