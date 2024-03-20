import { Skeleton } from "@/components/ui/skeleton"


const loading = () => {
  return (
    <main className='mx-auto w-full flex-col text-black snap-y gap-2'>
    <section className='flex pt-[40px] md:pt-[98px] w-full flex-col text-base text-black'>
              {/* top side of the hero */}
              <div className='w-full flex flex-col lg:flex-row-reverse justify-between'>
                {/* right side */}
                <div className='lg:flex-col justify-start w-full lg:w-[45%]  '>
                    <div className='flex flex-row justify-between pb-2'>
                      <Skeleton className="object-cover min-h-[100px] h-auto w-[35%] rounded-xl pr-2" />
                      <Skeleton className="object-cover min-h-[100px] h-auto w-full flex-col rounded-xl" />    
                    </div>
                    <Skeleton className="object-cover min-h-[100px] h-auto w-[65%] rounded-xl" />    
                </div>
                
                {/* left side */}
                <div className='flex-col justify-start w-full'>
                  <Skeleton className="object-cover min-h-[250px] pr-5 rounded-xl" /> \
                </div>
              </div>
        </section>

  </main>




  )
}

export default loading