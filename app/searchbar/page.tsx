
export const  SearchForm = () => {
        const query = 'test'

        return(
            <form action="/" name="search-form">
                    <div className="flex justify-start md:justify-items-center mx-auto items-center px-6 md:pl-18 py-4">
                            <div className="relative w-100" >
                                <input
                                    name="query"
                                    defaultValue={query}
                                    type="text"
                                    placeholder="Search games..."
                                    className="w-full pl-4 pr-10 py-2 rounded-full border bg-white border-gray-300 focus:ring-2 focus:ring-[#E54957] outline-none text-gray-800 shadow-sm" />
                                <button
                                    className="absolute right-1 top-1/2  transform -translate-y-1/2  hover:bg-purple-700   text-white p-2 rounded-full shadow bg-[#D8364A] "
                                   

                                    >
                                    <img className="w-5 h-5" src="right-arrow.png"></img>
                                </button>
                            </div>
                        </div>
                    
                    
                    
                    </form>
        )
    }