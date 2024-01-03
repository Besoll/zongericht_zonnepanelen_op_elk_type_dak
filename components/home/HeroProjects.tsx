"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import ResourceCard from '@/components/(dakType)/ResourceCard'
import { getResources } from '@/sanity/actions'


const HeroProjects = async () => {
  const resources = await getResources({
    query: '',
    category: '',
    page: '1'
  })
  return (
    <Carousel className="w-full max-w-lg mt-16">
      <CarouselContent >
                {resources?.length > 0 ? ( 
                  resources.map((resource: any) => (

                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-10/12" key={resource._id}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                                <ResourceCard 
                                  id={resource._id}
                                  key={resource._id}
                                  title={resource.title}
                                  shortDescription={resource.shortDescription}
                                  image={resource.image}
                                  downloadNumber={resource.views}
                                  schouwingLink={resource.schouwingLink}
                                />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>


                  ))
                ): (
                  <p className='body-regular text-black-400'>
                    0 result - geen resultaten ...
                  </p>
                )}
      </CarouselContent>
      <CarouselPrevious className="-left-5 md:-left-12"/>
      <CarouselNext className="-right-5 md:-right-12"/>
    </Carousel>
  )
}

export default HeroProjects