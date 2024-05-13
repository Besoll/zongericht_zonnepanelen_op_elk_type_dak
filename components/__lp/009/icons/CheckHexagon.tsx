import Image from 'next/image'
import checkHexagon from '@/public/lp/icons/check-Hexagon-Light_Orange.svg'

const CheckHexagon = () => (
  <Image 
    src={checkHexagon}
    alt='Check - tick - hexagon'
    width={32}
    height={32}
    className="w-[45px] h-auto"
  />
);

export default CheckHexagon;
