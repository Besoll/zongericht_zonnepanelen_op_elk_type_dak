import { Skeleton } from "@/components/ui/skeleton"


const loading = () => {
  return (
    <main className='flex-center paddings mx-auto w-full flex-col'>
      <section className='max-w-screen-3xl'>
        <h1 className=' mt-24 flex'>
          <Skeleton className="object-cover min-h-[200px] rounded-xl" /> 
        </h1>
        <div >
          
            <Skeleton className="object-cover min-h-[250px] rounded-xl" /> 
            <br></br>
            <Skeleton className="object-cover min-h-[250px] rounded-xl" /> 
          
        </div>
      </section>
      <section className='max-w-screen-3xl'>
        <Skeleton className="object-cover min-h-[500px] rounded-xl" />
      </section>
      <section className='flex justify-center w-full gradient_green min-h-full' id="zohoForm">
        <div className='mt-20 mb-28'>
        <Skeleton className="object-cover min-h-[750px] rounded-xl" /> 
        </div>
      </section>
    </main>
  )
}

export default loading