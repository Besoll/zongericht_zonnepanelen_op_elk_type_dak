import dynamic from 'next/dynamic'
const TagLine = dynamic(() => import('@/components/__lp/003/icons/TagLine'))

const RoofTag = () => {
  return (
    <div className='w-full h-auto flex flex-row justify-center items-center text-qoqu_Orange font-semibold text-2xl gap-2'>
        <TagLine />
        <p className='font-semibold text-2xl'>
          PARABOOL DAK
        </p>
    </div>
  )
}

export default RoofTag