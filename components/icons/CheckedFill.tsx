import Image from 'next/image'
import checkedFill from '@/public/icons/checkedFill.svg'

const CheckedFill = () => (
  <Image 
    src={checkedFill} 
    alt="Checked Mark Filled" 
    width={20} 
    height={20} 
    className='h-auto'
  />
);

export default CheckedFill;