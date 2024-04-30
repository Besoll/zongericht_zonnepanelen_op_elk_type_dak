import dynamic from 'next/dynamic'
const TagLine = dynamic(() => import('@/components/__lp/004/icons/TagLine'))

const RoofTag = () => {
  return (
    <div className='flex flex-row font-semibold text-2xl gap-2'>
        {/* <TagLine /> */}
        <p className='font-semibold text-2xl underline'>
          Zinken dak 
        </p>
    </div>
  )
}

export default RoofTag