import dynamic from 'next/dynamic'
const TagLine = dynamic(() => import('@/components/__lp/007/icons/TagLine'))

const CompanyTag = () => {
  return (
    <div className='flex flex-row font-semibold text-xl gap-2 text-white'>
        {/* <TagLine /> */}
        <p className='font-normal text-xl'>
          ZONNEPANELEN OP UW STALEN DAK
        </p>
    </div>
  )
}

export default CompanyTag