import Image from 'next/image'
import checkedFillColored from '@/public/icons/checkedFillColored.svg'

const CheckedFillColored = () => (
  <Image 
    src={checkedFillColored} 
    alt="Checked Mark Filled" 
    width={20} 
    height={20} 
    className='h-auto'
  />
);

export default CheckedFillColored;