import HeroHome from '@/components/home/HeroHome'
import dynamic from 'next/dynamic'
const ProductUSP = dynamic(() => import('@/components/home/ProductUSP')) 
const HeroProjects = dynamic(() => import('@/components/home/HeroProjects')) 
const CompanyUSP = dynamic(() => import('@/components/home/CompanyUSP')) 
const HeroDakTypes = dynamic(() => import('@/components/home/HeroDakTypes')) 
const Testimonials = dynamic(() => import('@/components/home/Testimonials')) 

export const revalidate = 900;

const Page = () => {
  
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
