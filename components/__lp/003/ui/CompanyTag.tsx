import dynamic from 'next/dynamic'
const TagLine = dynamic(() => import('@/components/__lp/003/icons/TagLine'))

const CompanyTag = () => {
  return (
    <div className='flex flex-row text-qoqu_Orange font-semibold text-2xl gap-2'>
        <TagLine />
        <p className='font-semibold text-2xl'>
          ZONGERICHT
        </p>
    </div>
  )
}

export default CompanyTag