import Image from 'next/image'
import downloads from '@/public/icons/downloads.svg'

const DownloadIconImage = () => (
  <Image 
    src={downloads} 
    alt="Download Icon" 
    width={20} 
    height={20} 
    className='h-auto'
  />
);

export default DownloadIconImage;
