import Filters from '@/components/(dakType)/Filters'
import Header from '@/components/(dakType)/Header'
import ResourceCard from '@/components/(dakType)/ResourceCard'
import SearchForm from '@/components/(dakType)/SearchForm'
import { getResources, getResourcesPlaylist } from '@/sanity/actions'
import Image from "next/image"

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined }
}

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  })

  const resourcesPlaylist = await getResourcesPlaylist();

  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>

      <section className='nav-padding w-full'>
           <h1 className='heading1 mb-6 text-center text-brand_original_main 
                            sm:heading2 
                            xs:heading2 
                            xxs:heading3'
                            >Glas glas zonnepanelen<br></br> op elk type dak</h1>
        {/* <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center'/>           */}
                    <Image 
                        src='/heroImages/hero-banner.webp'
                        alt='glas glas zonnepanelen op elk type dak'
                        width={384}
                        height={250}
                        className=" flex-center relative object-cover min-h-[600px] h-auto  w-full flex-col rounded-xl
                                    xs:min-h-[250px]
                                    xxs:min-h-[50px]"
                                    
                    />
        <SearchForm />      
      </section>

      <Filters />

      {(searchParams?.query || searchParams?.category) && (

        <section className='flex-center mt-6 flex-col justify-center sm:mt-20' id='resourceCards'>
          <Header 
            query={searchParams?.query || ''}
            category={searchParams?.category || ''}
          />

          <div className='mt-12 flex flex-wrap justify-center gap-16 sm:justify-start'>
            {resources?.length > 0 ? ( 
              resources.map((resource: any) => (
              <ResourceCard 
                id={resource._id}
                key={resource._id}
                title={resource.title}
                shortDescription={resource.shortDescription}
                image={resource.image}
                downloadNumber={resource.views}
                schouwingLink={resource.schouwingLink}
              />
            ))
            ): (
              <p className='body-regular text-black-400'>
                0 result - geen resultaten ...
              </p>
            )}
          </div>
        </section>
      )}

      {resourcesPlaylist.map((item: any) => (
        <section key={item._id} className='flex-center mt-6 w-full flex-col sm:mt-20'>
          <h1 className='heading3 self-start text-black-400'>{item.title}</h1>
          <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
            {item.resources.map((resource: any) => (
              <ResourceCard 
                id={resource._id}
                key={resource._id}
                title={resource.title}
                shortDescription={resource.shortDescription}
                image={resource.image}
                downloadNumber={resource.views}
                schouwingLink={resource.schouwingLink}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default Page
