  import Image from 'next/image'
  import mapLocationWhite from '@/public/icons/mapLocationWhite.svg'
  
  const MapLocationWhite = () => (
    <Image 
      src={mapLocationWhite} 
      alt='email icon'
      width={12}
      height={12}
      loading='lazy'
    />
  );
  
  export default MapLocationWhite;
  
  
