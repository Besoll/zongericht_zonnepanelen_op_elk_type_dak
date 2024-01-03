import { getResources, getResourcesPlaylist } from '@/sanity/actions'
import Image from "next/image"
import { HeroHome, ProductUSP, HeroProjects, CompanyUSP, HeroDakTypes, Testimonials } from '@/components/home/indexHome'

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
    <main className='flex-center paddings mx-auto w-full max-w-screen-3xl flex-col text-black-100'>   
    
      <HeroHome />
      <ProductUSP />
      <HeroProjects />
      <CompanyUSP />
      <HeroDakTypes />
      <Testimonials />

    </main>
  )
}

export default Page
