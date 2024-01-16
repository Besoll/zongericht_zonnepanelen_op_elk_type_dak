import Image from 'next/image'
import map from '@/public/items/map.svg'

const MapNL = () => (
  <Image 
    src={map} 
    alt="Map Nederlands" 
    width={50} 
    height={50}
    loading='lazy'
    className='w-full h-auto pr-2 md:mt-24'
  />
);

export default MapNL;
