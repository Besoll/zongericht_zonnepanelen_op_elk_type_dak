import dynamic from 'next/dynamic'
const TagLine = dynamic(() => import('@/components/__lp/009/icons/TagLine'))

const CompanyTag = () => {
  return (
    <div className='flex flex-row font-semibold text-xl gap-4 text-qoqu_Dark_Grey'>
        <TagLine />
        <p className='font-normal text-xl'>
          ZONGERICHT
        </p>
        <TagLine />
    </div>
  )
}

export default CompanyTag