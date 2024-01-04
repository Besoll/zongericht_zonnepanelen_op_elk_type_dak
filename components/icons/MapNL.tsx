import Image from 'next/image'
import map from '@/public/map.svg'

const MapNL = () => (
  <Image 
    src={map} 
    alt="Map Nederlands" 
    width={100} 
    height={100}
    className='w-full h-auto pr-2 md:mt-24'
  />
);

export default MapNL;
