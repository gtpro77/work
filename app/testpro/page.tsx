"use client";
import games from "../gameformat/fullnames.json";
import Link from "next/link";
import Router, { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


 
const SlidePro = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };  


  
 const router = useRouter();
 

  return (
    <div className="relative w-auto ml-5 mr-5 md:ml-15 md:mr-15  ">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 group-hover:flex  "
      >
        <ChevronLeft size={20} />
      </button>

      {/* Carousel Container */}


      <Link href= "/gameformat" >
      <div
      
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-2  "
      >
        {games.map((game) => (
          <div
            key={game.id}
            className="min-w-[180px] flex-shrink-0 bg-white/10 backdrop-blur-lg rounded-md overflow-hidden shadow-lg hover:opacity-50"

          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-30 object-cover"
            />
            <div className="p-3 text-center text-white font-semibold">
              {game.name}
            </div>
          </div>
        ))}
      </div>
      </Link>
      

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default SlidePro;
