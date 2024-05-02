import Image from 'next/image'
import iconPayment from '@/public//lp/icons/paymentB-Night-Blue.svg'

const IconPayment = () => (
  <Image 
    src={iconPayment}
    alt='Icon Installation'
    width={32}
    height={32}
    className="w-[45px] h-auto"
  />
);

export default IconPayment;
