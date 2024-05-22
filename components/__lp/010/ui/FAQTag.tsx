import dynamic from 'next/dynamic'
const TagLine = dynamic(() => import('@/components/__lp/010/icons/TagLine'))

const FAQTag = () => {
  return (
    <div className='flex flex-row font-semibold text-xl gap-4 text-qoqu_Light_Blue'>
        <TagLine />
        <p className='font-normal text-xl'>
          FAQ
        </p>
        <TagLine />
    </div>
  )
}

export default FAQTag