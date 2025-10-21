
import Link from "next/link"

export default function pricing(){
    return(
      
        <div className=" sm:justify-items-center ">
  
    <div className="text-4xl text-center mt-20 font-bold"><p>Best choice For <span className="text-blue-300">Your Plan</span></p>
    <p className="text-3xl ">Game on without limits! Choose your power-up plan.</p>
    
    </div>
    
    <div className="md:flex justify-center mt-20 mb-20 sm:grid sm:grid-cols-1 sm:gap-8 px-6 py-6">
  
  <div className="rounded-2xl bg-white w-80 text-center border border-gray-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8">
    <h2 className="text-2xl font-bold text-gray-800">BASIC</h2>
    <span className="block font-extrabold text-4xl mt-2 mb-10 text-blue-500">₹59<span className="text-lg">/month</span></span>

    <div className="space-y-4 mb-8">
      <div className="flex items-center justify-center gap-2">
        <img src="check.png" className="w-6 h-6"></img>
        <span className="text-gray-700 font-medium">No Ads</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src="check.png" className="w-6 h-6"></img>
        <span className="text-gray-700 font-medium">Member of Clash Hub</span>
      </div>
    </div>

    <button className="bg-white rounded-lg px-6 py-2 text-blue-500 font-semibold border border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
      Get Started
    </button>
  </div>

  <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 w-80 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8 relative">
    <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-white font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-md">
      Most Popular  <img src="happy-face.png" className="w-5 h-5"></img>
    </span>

    <h2 className="text-2xl font-bold text-white mt-6">PREMIUM</h2>
    <span className="block font-extrabold text-4xl text-white mb-10">₹79<span className="text-lg">/month</span></span>

    <div className="space-y-4 mb-8 text-white">
      <div className="flex items-center justify-center gap-2">
        <img src="check.png" className="w-6 h-6"></img>
        <span>No Ads</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src="check.png" className="w-6 h-6"></img>
        <span>Member of Clash Hub</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src="check.png" className="w-6 h-6"></img>
        <span>Early Access to Upcoming Games</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src="check.png" className="w-6 h-6"></img>
        <span>+ 3 Months Free</span>
      </div>
    </div>

    <button className="bg-white rounded-lg px-6 py-2 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
      Get Started
    </button>
  </div>

  <div className="rounded-2xl bg-white border border-gray-200 w-80 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8">
    <h2 className="text-2xl font-bold text-gray-800">SUPER</h2>
    <span className="block font-extrabold text-4xl mt-2 mb-10 text-blue-500">₹99<span className="text-lg">/month</span></span>

    <div className="space-y-4 mb-8">
      <div className="flex items-center justify-center gap-2">
        <img src="check.png" className="w-6 h-6"></img>
        <span className="text-gray-700">No Ads</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src="check.png" className="w-6 h-6"></img>
        <span className="text-gray-700">Member of Clash Hub</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src="check.png" className="w-6 h-6"></img>
        <span className="text-gray-700">Early Access to New Features</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src="check.png" className="w-6 h-6"></img>
        <span className="text-gray-700">Response within 24h</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src="check.png" className="w-6 h-6"></img>
        <span className="text-gray-700">+ 4 Months Free</span>
      </div>
    </div>

    <button className="bg-white rounded-lg px-6 py-2 text-blue-500 font-semibold border border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
      Get Started
    </button>
  </div>
</div>


    
        

        


  

  

  

           <div className="flex items-center gap-4 mb-7">
        <span className="font-semibold text-slate-500 transition-colors duration-300 ">Monthly</span>
        
        <div className="relative w-32 h-10 shadow-2xl">
            <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer z-20 peer" id="payment-toggle"></input>
            <div className="absolute w-full h-full bg-white rounded-full shadow-sm transition-colors duration-300 overflow-hidden border border-slate-200"></div>
            <div className="absolute left-1 top-1 w-1/2 h-[34px] bg-indigo-500 rounded-full transition-all duration-300 z-10 shadow-md peer-checked:left-[calc(50%-0.25rem)] peer-checked:bg-indigo-500"></div>
            
        </div>
        
        <span className="font-semibold text-slate-500 transition-colors duration-300">Annually<span className="bg-green-50 text-green-700 px-2 py-1 rounded-xl text-xs font-semibold ml-2 border border-green-200">Save 20%</span></span>
      </div>
 

    <div className="ml-3 ">
        <p className="text-7xl text-left mb-3 text-black font-bold">People ❤ Clash Hub</p>
        <p className="text-4xl font-bold mb-3 ">See Reviews about our Plans</p>
    </div>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-6">
  <div className="bg-white rounded-2xl shadow-xl p-6 w-full select-none pointer-events-none">
    
    <div className="bg-gray-200 rounded-md px-4 py-2 flex justify-between items-center">
      <span className="text-blue-500 text-xl font-bold">Rahul Jha</span>
      <span className="bg-yellow-300 text-yellow-900 font-semibold rounded px-2 py-1 text-sm">
        Member
      </span>
    </div>

    <div className="mt-2 text-sm font-medium text-gray-600">Premium Plan</div>

    <div className="mt-4 text-lg font-bold text-gray-800 flex items-center space-x-1">
      <span>Rating:</span>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
    </div>

    <p className="mt-4 text-base font-semibold text-gray-800 leading-relaxed">
      "Honestly, ₹79 for Premium is a steal. I used to get so many ads — now it’s smooth gaming and I get new game sneak peeks too!"
    </p>

  </div>

 
  <div className="bg-white rounded-2xl shadow-xl p-6 w-full select-none pointer-events-none">
    
    <div className="bg-gray-200 rounded-md px-4 py-2 flex justify-between items-center">
      <span className="text-blue-500 text-xl font-bold">Rahul Jha</span>
      <span className="bg-yellow-300 text-yellow-900 font-semibold rounded px-2 py-1 text-sm">
        Member
      </span>
    </div>

    <div className="mt-2 text-sm font-medium text-gray-600">Premium Plan</div>

    <div className="mt-4 text-lg font-bold text-gray-800 flex items-center space-x-1">
      <span>Rating:</span>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
    </div>

    <p className="mt-4 text-base font-semibold text-gray-800 leading-relaxed">
      "Honestly, ₹79 for Premium is a steal. I used to get so many ads — now it’s smooth gaming and I get new game sneak peeks too!"
    </p>

  </div>




  <div className="bg-white rounded-2xl shadow-xl p-6 w-full select-none pointer-events-none">
    
    <div className="bg-gray-200 rounded-md px-4 py-2 flex justify-between items-center">
      <span className="text-blue-500 text-xl font-bold">Rahul Jha</span>
      <span className="bg-yellow-300 text-yellow-900 font-semibold rounded px-2 py-1 text-sm">
        Member
      </span>
    </div>

    <div className="mt-2 text-sm font-medium text-gray-600">Premium Plan</div>

    <div className="mt-4 text-lg font-bold text-gray-800 flex items-center space-x-1">
      <span>Rating:</span>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
    </div>

    <p className="mt-4 text-base font-semibold text-gray-800 leading-relaxed">
      "Honestly, ₹79 for Premium is a steal. I used to get so many ads — now it’s smooth gaming and I get new game sneak peeks too!"
    </p>

  </div>




  <div className="bg-white rounded-2xl shadow-xl p-6 w-full select-none pointer-events-none">
    
    <div className="bg-gray-200 rounded-2xl px-4 py-2 flex justify-between items-center">
      <span className="text-blue-500 text-xl font-bold">Rahul Jha</span>
      <span className="bg-yellow-300 text-yellow-900 font-semibold rounded px-2 py-1 text-sm">
        Member
      </span>
    </div>

    <div className="mt-2 text-sm font-medium text-gray-600">Premium Plan</div>

    <div className="mt-4 text-lg font-bold text-gray-800 flex items-center space-x-1">
      <span>Rating:</span>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
      <i className="fa-solid fa-star color: #FFD43B;"></i>
    </div>

    <p className="mt-4 text-base font-semibold text-gray-800 leading-relaxed">
      "Honestly, ₹79 for Premium is a steal. I used to get so many ads — now it’s smooth gaming and I get new game sneak peeks too!"
    </p>

  </div>


</section>


    <div className="  "><a href="pricing.html"><img src="Ch ad premium.png" className=" sm:w-auto md:max-w-280 max-h-9/12 cursor-pointer  lg:w-auto xl:w-auto shadow-lg px-3  mt-4 mb-10 md:ml-60 md:mr-10 rounded-lg flex justify-center  "  ></img></a></div>


     
</div>

    )
}