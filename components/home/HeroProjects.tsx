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
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <Dakkapellen />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <PlatDak />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <LeistenenDak />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <Dakpannen />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <SchuinBitumenDak />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <ZinkenDak />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <SchuinPVCdak />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <GolfplatenDak />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <SchuinEPDMdak />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
               
      </CarouselContent>
      <CarouselPrevious className="-left-5 md:-left-12"/>
      <CarouselNext className="-right-5 md:-right-12"/>
    </Carousel>
  )
}

export default HeroProjects