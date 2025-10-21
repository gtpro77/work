"use client";
import Link from "next/link";
import Image from "next/image";

export default function Characterimage() {
  return (
    <div
      className="relative w-full h-[80vh] md:h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #6F17E8ff, #6C36EEff, #6957F6ff, #6581FEff, #6EAEFFff, #6FBDFDff, #74DDFAff)",
      }}
    >
      {/* BACKGROUND TEXT */}
      <h1
        className="absolute text-[5rem] sm:text-[8rem] md:text-[14rem] lg:text-[18rem] font-extrabold tracking-tight text-white  leading-none select-none text-center px-4"
        style={{
          fontFamily: "'Noto Sans', sans-serif",
          zIndex: 0,
        }}
      >
        CLASHHUB
      </h1>

      {/* ROBOT IMAGE */}
      <div className="relative z-10 flex  w-full h-full float-right ml-300 ">
        <Image
          alt="character"
          width={1000}
          height={1000}
          className="h-full w-auto object-contain drop-shadow-2xl"
          src="/pokecut.jpg"
          priority
        />
      </div>

      {/* BUTTON */}
      <div className="absolute bottom-6 md:bottom-10 z-20">
        <Link href="#">
          <button
            className="px-6 py-3 font-bold rounded-lg shadow-lg text-black hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: "#F7E52D" }}
          >
            LEARN MORE
          </button>
        </Link>
      </div>
    </div>
  );
}
