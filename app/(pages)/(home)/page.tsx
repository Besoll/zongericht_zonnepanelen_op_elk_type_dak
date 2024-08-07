import HeroHome from '@/components/home/HeroHome'
import dynamic from 'next/dynamic'
const Section1 = dynamic(() => import('@/components/home/Section1')) 
const AccordionProduct = dynamic(() => import('@/components/home/AccordionProduct')) 
const HeroProjects = dynamic(() => import('@/components/home/HeroProjects')) 
const CompanyUSP = dynamic(() => import('@/components/home/CompanyUSP')) 
const HeroDakTypes = dynamic(() => import('@/components/home/HeroDakTypes')) 
const Testimonials = dynamic(() => import('@/components/home/Testimonials')) 

export const revalidate = 900;

const Page = () => {
  
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-3xl flex-col text-black-100'>   
    
      <HeroHome />
      <Section1 />
      <div className='px-4'>
        <AccordionProduct />
      </div>
      <HeroProjects />
      <CompanyUSP />
      <HeroDakTypes />
      <Testimonials />

    </main>
  )
}

export default Page
