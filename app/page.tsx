"use client";
import { House } from 'lucide-react';

import SlidePro from "./testpro/page";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Characterimage from "./Charimage/page";

  
export default function DashBoard() {
  return (

    <div className="min-h-screen mt-20  bg-[radial-gradient(ellipse_at_top,_#0b0f1a_0%,_#0b0f1a_40%,_#071021_100%)] text-white font-sans">
      {/* Container */}
          <Characterimage />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* SIDEBAR */}
        <aside className="md:col-span-2 lg:col-span-2 hidden md:flex flex-col gap-6">
          <div className="px-3 py-4 rounded-2xl bg-gradient-to-b from-[#0f1724] to-[#071022] shadow-lg">
            <div className="flex items-center gap-3 ml-2">
              <div className="w-10 h-10 rounded-full  flex items-center justify-center text-black font-bold">
                <Image src="/mainlogo.png" width={40} height={40} alt="mainlogo" className="rounded-lg "  ></Image>
              </div>
              <div>
                <div className="text-sm font-semibold">CLASHHUB</div>
                <div className="text-[11px] text-slate-400">
                  Play • Discover • Connect
                </div>
              </div>
            </div>
             

              <nav className="mt-6 flex flex-col gap-2">
  {["Home", "Categories", "Library", "Community", "Friends", "Settings"].map(
    (item, idx) => (
      <a
        key={idx}
        href="#"
        className="group flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 
                   hover:bg-[#E54957]/20 hover:scale-[1.02]
                   active:bg-gradient-to-r active:from-[#E54957] active:to-pink-600 active:ring-1 active:ring-[#E54957]/60"
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center 
                     bg-white/5 transition-all
                     group-hover:bg-[#E54957]/30
                     active:bg-[#E54957] active:text-black"
        >
          {/* 👇 Paste your own icon here */}
          {[,"<House/>","<House/>","<House/>",]}
        </div>
        <div className="text-sm font-medium group-hover:text-white group-active:text-black">
          {item}
        </div>
      </a>
    )
  )}
</nav>


             <nav className="mt-6 flex flex-col gap-2">
  {[
    { name: "Home", active: true,icon:"<House />" },
    { name: "Categories", active: false ,icon:"<House />"},
    { name: "Library", active: false ,icon:"<House />"},
    { name: "Community", active: false ,icon:"<House />"},
    { name: "Friends", active: false ,icon:"<House />"},
    { name: "Settings", active: false ,icon:"<House />"},
  ].map((item, idx) => (
    <a
      key={idx}
      href="#"
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 
        ${
          item.active
            ? "bg-gradient-to-r from-[#E54957]/40 to-[#E54957]/20 ring-1 ring-[#E54957]/50 scale-[1.02]"
            : "hover:bg-white/5 hover:scale-[1.02]"
        }`}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all
          ${item
            
              ? "bg-gradient-to-r from-[#E54957] to-pink-600 text-black"
              : "bg-white/5 group-hover:bg-[#E54957]/30 text-white"
          }`}
      ><House/>
        
      </div>
      <div className="text-sm font-medium">{item.name}</div>
      
    </a>
  ))}
  <div className="mt-6 px-3">
              <button className="w-full py-2 rounded-lg bg-yellow-400 text-black font-bold shadow-xl">
                Go Premium
              </button>
            </div>
</nav>


<div className=" inline">
            <button className="relative overflow-hidden px-6 py-3 z-10 rounded-full bg-[#E54957] text-white font-semibold group transition-all duration-300">
  <span className="relative z-10">Play Now</span>

  {/* Sliding circle */}
  <span className="absolute right-0 -z-10 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transform -translate-x-full group-hover:translate-x-[calc(100%+2rem)] transition-transform duration-700 ease-out">
    →
  </span>
</button>
<span className="absolute right-0 hidden hover:flex hover:z-10 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black  items-center justify-center transform -translate-x-full group-hover:translate-x-[calc(100%+2rem)] transition-transform duration-700 ease-out">
    →
  </span></div>





            
          </div>

          <div className="px-3 py-4 rounded-2xl bg-gradient-to-b from-[#071022] to-[#05060a] shadow-inner text-sm">
            <div className="text-slate-300 text-xs">Your library</div>
            <div className="mt-3 grid gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-gradient-to-r from-indigo-700 to-pink-600" />
                <div className="flex-1">
                  <div className="text-sm font-medium">Cyber Racer</div>
                  <div className="text-[11px] text-slate-400">Completed 78%</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-gradient-to-r from-purple-700 to-blue-500" />
                <div className="flex-1">
                  <div className="text-sm font-medium">Apex Skies</div>
                  <div className="text-[11px] text-slate-400">Playing</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="md:col-span-7 lg:col-span-8 space-y-6">
          {/* Header */}
          <header className="w-full flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full">
              <div className="relative flex-1">
                <input
                  placeholder="Search games, genres, players..."
                  className="w-full bg-[#071021] placeholder:text-slate-500 rounded-2xl py-3 px-4 inline outline-none ring-1 ring-white/5 focus:ring-2 focus:ring-pink-500/40"
                />
                <div className="absolute right-2 cursor-pointer px-5 py-1.5 inline  bg-[#E54957] top-3  rounded-lg text-2xl">⌕</div>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <button className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/6">
                  Browse
                </button>
                
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-slate-300 hidden sm:block">
                Welcome,{" "}
                <span className="font-semibold text-white">QuantumSpectre</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-black font-bold">
                QS
              </div>
            </div>
          </header>

          {/* HERO FEATURE */}
          <section className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0f1220] to-[#071021] shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08),_transparent_40%)] pointer-events-none" />
            <div className="relative p-6 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 rounded-full text-xs bg-pink-600/20 text-pink-300">
                    Magic • Adventure
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs bg-white/5 text-slate-300">
                    Editor’s Pick
                  </div>
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md">
                  Hogwarts Legacy — Skybound Ride
                </h2>
                <p className="mt-4 text-slate-300 max-w-prose">
                  An open-world action RPG with breathtaking environments and a
                  deep story. Fly, explore and master magic.
                </p>
                <div className="mt-6 flex gap-3 items-center">
                  <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-black font-semibold shadow-xl transform hover:scale-[1.02] transition-transform">
                    Play Now
                  </button>
                  <button className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white">
                    Wishlist
                  </button>
                </div>
              </div>
              <div className="md:col-span-1 flex items-center justify-center">
                <div className="w-full max-w-[360px] rounded-xl overflow-hidden relative bg-gradient-to-b from-[#0b0f1a] to-[#071022] p-4">
                  <Image
                    src="/images/hero-game.jpg"
                    alt="hero"
                    className="w-full h-56 md:h-64 object-cover rounded-lg"
                  />
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-300">Price</div>
                      <div className="text-lg font-bold">
                        $24.00{" "}
                        <span className="text-slate-400 line-through text-sm ml-2">
                          $35.99
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center text-black font-bold">
                      $
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CARDS ROW */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Trending games </h3>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-white/5">◀</button>
                <button className="w-8 h-8 rounded-full bg-white/5">▶</button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <article
                  key={i}
                  className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#071021] to-[#05060a] shadow-lg hover:scale-105 transition-transform"
                >
                  <div className="relative">
                    <img
                      src={`/images/card-${(i % 4) + 1}.jpg`}
                      alt="card"
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute left-3 top-3 px-2 py-1 rounded-md text-xs bg-pink-600/70 text-black font-semibold">
                      New
                    </div>
                    <div className="absolute right-3 bottom-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs">
                      $59
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold">Game Title {i + 1}</h4>
                    <p className="text-[12px] text-slate-400 mt-1">
                      Fast-paced multiplayer shooter with ranked mode.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="md:col-span-3 lg:col-span-2 hidden md:flex flex-col gap-6">
          <div className="px-4 py-4 rounded-2xl bg-gradient-to-b from-[#071022] to-[#05060a] shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Friends online</div>
                <div className="font-semibold">12 players</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-black">
                +
              </div>
            </div>
            <ul className="mt-4 space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-700 to-pink-600" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Player{i + 1}</div>
                    <div className="text-xs text-slate-400">
                      Playing Fortnite
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">Join</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-4 py-4 rounded-2xl bg-gradient-to-b from-[#071022] to-[#05060a] shadow-inner">
            <div className="text-sm text-slate-300">Recently played</div>
            <div className="mt-3 grid gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-12 h-8 rounded-md bg-white/5" />
                  <div className="flex-1">
                    <div className="text-sm">Game {i + 1}</div>
                    <div className="text-[11px] text-slate-400">
                      {Math.floor(Math.random() * 100)}% progress
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
      
      <SlidePro/> 

      {/* Neon accents floating */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-20 top-20 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl animate-pulse" />
        <div className="absolute right-20 bottom-10 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl" />
      </div>
    </div>


  );
}
