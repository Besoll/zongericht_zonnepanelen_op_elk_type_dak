import Image from 'next/image'
import iconCustomerSupport from '@/public//lp/icons/customerSupport-Night-Blue.svg'

const IconCustomerSupport = () => (
  <Image 
    src={iconCustomerSupport}
    alt='Icon Customer Support'
    width={32}
    height={32}
    className="w-[45px] h-auto"
  />
);

export default IconCustomerSupport;
