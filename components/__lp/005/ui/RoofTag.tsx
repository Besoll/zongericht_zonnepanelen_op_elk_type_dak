import dynamic from 'next/dynamic'
const TagLine = dynamic(() => import('@/components/__lp/005/icons/TagLine'))

const RoofTag = () => {
  return (
    <div className='flex flex-row font-semibold text-2xl gap-2 text-qoqu_Red'>
        <TagLine />
        <p className='font-semibold text-2xl'>
          GOLFPLATEN DAK
        </p>
    </div>
  )
}

export default RoofTag