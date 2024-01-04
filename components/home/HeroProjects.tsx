"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import dynamic from 'next/dynamic'
const Dakkapellen = dynamic(() => import('@/components/dakTypen/Dakkapellen'))
const PlatDak = dynamic(() => import('@/components/dakTypen/PlatDak'))
const LeistenenDak = dynamic(() => import('@/components/dakTypen/LeistenenDak'))
const SchuinEPDMdak = dynamic(() => import('@/components/dakTypen/SchuinEPDMdak'))
const SchuinPVCdak = dynamic(() => import('@/components/dakTypen/SchuinPVCdak'))
const SchuinBitumenDak = dynamic(() => import('@/components/dakTypen/SchuinBitumenDak'))
const GolfplatenDak = dynamic(() => import('@/components/dakTypen/GolfplatenDak'))
const Dakpannen = dynamic(() => import('@/components/dakTypen/Dakpannen'))
const ZinkenDak = dynamic(() => import('@/components/dakTypen/ZinkenDak'))



const HeroProjects = () => {
  
  return (
    <Carousel className="w-full max-w-lg mt-16">
      <CarouselContent >
        <CarouselItem className="mr-1 basis-10/12" >
          <Dakkapellen />                        
        </CarouselItem>
        <CarouselItem className="mr-1 basis-10/12" >
          <PlatDak />                        
        </CarouselItem>
        <CarouselItem className="mr-1 basis-10/12" >
          <LeistenenDak />                        
        </CarouselItem>
        <CarouselItem className="mr-1 basis-10/12" >
          <Dakpannen />                        
        </CarouselItem>
        <CarouselItem className="mr-1 basis-10/12" >
          <SchuinBitumenDak />                        
        </CarouselItem>
        <CarouselItem className="mr-1 basis-10/12" >
          <ZinkenDak />                        
        </CarouselItem>
        <CarouselItem className="mr-1 basis-10/12" >
          <SchuinPVCdak />                        
        </CarouselItem>
        <CarouselItem className="mr-1 basis-10/12" >
          <GolfplatenDak />                        
        </CarouselItem>
        <CarouselItem className="mr-1 basis-10/12" >
          <SchuinEPDMdak />                        
        </CarouselItem>              
      </CarouselContent>
      <CarouselPrevious className="-left-5 md:-left-12"/>
      <CarouselNext className="-right-5 md:-right-12"/>
    </Carousel>
  )
}

export default HeroProjects