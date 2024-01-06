import Image from 'next/image'
import searchIcon from '@/public/icons/searchIcon.svg'

const SearchIcon = () => (
  <Image 
    src={searchIcon} 
    alt='Search icon'
    width={20}
    height={20}
    className='absolute left-6 xxs:left-3'
    loading='lazy'
  />
);

export default SearchIcon;