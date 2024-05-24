import Image from 'next/image'
import quotationMark from '@/public/lp/icons/quotationMark-Light-Blue.svg'

const QuotationMark = () => (
  <Image 
    src={quotationMark} 
    alt='arrow icon'
    width={100}
    height={20}
    loading='lazy'
    className='w-[100px] h-auto'
  />
);

export default QuotationMark;
