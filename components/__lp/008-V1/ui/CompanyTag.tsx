import dynamic from 'next/dynamic'
const TagLine = dynamic(() => import('@/components/__lp/008-V1/icons/TagLine'))

const CompanyTag = () => {
  return (
    <div className='flex flex-row font-semibold text-xl gap-4 text-qoqu_Orange'>
        <TagLine />
        <p className='font-normal text-xl'>
          LEISTENEN DAK
        </p>
        <TagLine />
    </div>
  )
}

export default CompanyTag