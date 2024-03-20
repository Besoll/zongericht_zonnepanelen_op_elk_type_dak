import Image from 'next/image'
import paymentBlue from '@/public/lp/icons/paymentBlue.svg'

const PaymentBlue = () => (
  <Image 
    src={paymentBlue} 
    alt='arrow icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[45px] h-auto'
  />
);

export default PaymentBlue;
