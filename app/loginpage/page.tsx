import Link from "next/link";
import Image from "next/image";

export default function LoginPage(){
    return(
        <div className="flex   text-white bg-white  rounded-3xl mt-25 ml-10 mr-10 mb-10 ">
      {/* Left Side Image */}
      <div className="relative w-[60%] h-screen overflow-hidden rounded-3xl ml-2 mt-2 mb-2    ">
        <img
          src="/loginimage.jpg"
          alt="Gaming world"
          className="object-cover h-full w-full brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Right Side Login Form */}
      <div className="flex flex-1 items-center justify-center p-8 bottom-1.5 bg-white rounded-r-3xl ">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Welcome Back, Gamer
          </h1>
          <p className="text-gray-400">Log in to continue your adventure</p>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition"
            >
              Log In
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center">
            Don’t have an account?{" "}
            <a href="/signup" className="text-cyan-400 hover:underline">
              Sign up
            </a>
          </p>


          <span>
            <button  className=" text-black bg-white rounded-4xl px-5 py-3 shadow-2xl font-bold  " >  Google</button>
          </span>
        </div>
      </div>
    </div>
    )
}