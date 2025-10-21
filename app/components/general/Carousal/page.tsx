"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/app/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true  })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-330 ml-23 mt-10 min-h-100"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
    
    loop: true,
  }}
    >
      <CarouselContent className="flex bg-amber-400">
        <CarouselItem className=" flex bg-red-400 pl-10 pr-10 text-center">1</CarouselItem>
        <CarouselItem>2</CarouselItem>
        <CarouselItem>3</CarouselItem>
      </CarouselContent>
       
        
        
        
         
      <CarouselPrevious />
      <CarouselNext />

      
    </Carousel>
  )
}
