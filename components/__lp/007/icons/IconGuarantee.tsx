import Image from 'next/image'
import iconGuarantee from '@/public//lp/icons/Guarantee10Years-Big-Light-Orange.svg'

const IconGuarantee = () => (
  <Image 
    src={iconGuarantee}
    alt='Guarantee 10 years - Beoordelingen'
    width={32}
    height={32}
    className="w-[45px] h-auto md:hover:rotate-1 md:hover:skew-3 
    md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
  />
);

export default IconGuarantee;
