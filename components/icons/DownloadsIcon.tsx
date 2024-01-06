import Image from 'next/image'
import downloadsIcon from '@/public/icons/downloadsIcon.svg'

const DownloadsIcon = () => (
  <Image 
    src={downloadsIcon} 
    alt='arrow icon'
    width={20}
    height={20}
    loading='lazy'
  />
);

export default DownloadsIcon;

