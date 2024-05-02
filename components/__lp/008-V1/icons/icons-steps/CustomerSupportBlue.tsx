import Image from 'next/image'
import customerSupportBlue from '@/public/lp/icons/customerSupportBlue.svg'

const CustomerSupportBlue = () => (
  <Image 
    src={customerSupportBlue} 
    alt='customer support icon'
    width={25}
    height={25}
    loading='lazy'
    className='w-[30px] h-auto'
  />
);

export default CustomerSupportBlue;
