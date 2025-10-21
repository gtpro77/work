"use client";
import Image from "next/image"
import Link from "next/link"

export function Navbar(){
  return(
    <>
    <nav className="absolute  top-3 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl backdrop-blur-xl bg-gray-900/50 border  border-white/10 rounded-4xl px-6 py-3 z-50
">
  <div className="flex items-center justify-between">


 <div className="flex items-center space-x-3">
  <Link className="" href="/" >
      <Image
        src="/mainlogo.png"
        width={40}
        height={28}
        alt="logo"
        className="rounded-full"
      /></Link>
      <Link href="/">
        <span className="text-white font-extrabold md:text-2xl text-sm hover:text-gray-300  ">
          Clash <span className="text-[#E54957] ">Hub</span>
        </span>
      </Link>
    </div>

    <div className="hidden md:flex items-center space-x-8">
      
      <Link
        href="/pricing"
        className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-4xl transition duration-300"
      >
        About Us
      </Link>
      <Link
        href="/ContactUs"
        className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-4xl transition duration-300"
      >
        Contact Us
      </Link>
    </div>
  

    <div>
      <button 
   
      className="flex items-center space-x-2.5 md:space-x-4 bg-[#E54957] text-white px-4 py-2 rounded-full font-semibold transition duration-300">
     <Link href="/loginpage" ><span>Login</span></Link>
      </button>
    </div>
  </div>

  <span>
    <Image src="/menu.png"  alt="menu" width={20} height={20} className=" md:hidden sm:flex items-center justify-items-end  bg-white "  ></Image>
  </span> 
</nav>

  


   </>
  )
}