import Image from 'next/image'
import paymentIcon from '@/public/lp/icons/payment-Light-Orange.svg'

const PaymentIcon = () => (
  <Image 
    src={paymentIcon} 
    alt='payment icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[60px] md:w-[90px] h-auto'
  />
);

export default PaymentIcon;
