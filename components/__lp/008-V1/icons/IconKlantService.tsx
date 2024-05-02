import Image from 'next/image'
import iconKlantService from '@/public/lp/icons/KlantenVertelenOriginal.svg'

const IconKlantService = () => (
  <Image 
    src={iconKlantService}
    alt='KlantenVertellen - Kwaliteit gegarandeerd'
    width={32}
    height={32}
    className="w-[45px] h-auto md:hover:rotate-1 md:hover:skew-3 
    md:hover:scale-105 md:transition md:duration-300 md:ease-in-out md:cursor-pointer"
  />
);

export default IconKlantService;
