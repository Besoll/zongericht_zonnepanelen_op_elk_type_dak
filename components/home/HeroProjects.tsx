"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"




const HeroProjects = async () => {
  
  return (
    <Carousel className="w-full max-w-lg mt-16">
      <CarouselContent >
                

                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                                TEST beso
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                                TEST beso
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                                TEST beso
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                                TEST beso
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                                TEST beso
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" >
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                                TEST beso
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