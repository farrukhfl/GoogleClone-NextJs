'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const [input, setInput] = useState('')
  const [randomSearchLoading, setRandomSearchLoading] = useState(false)
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!input.trim) return
    router.push(`/search/web?searchTerm=${input}`)
  }

  const randomSearch = async(e) => {
    setRandomSearchLoading(true)
    const response = await fetch('https://random-word-api.herokuapp.com/word')
    .then((res)=> res.json())
    .then((data)=> data[0])
    if(!response) return
    router.push(`/search/web?searchTerm=${response}`)
    setRandomSearchLoading(false)
  }
  return (
    <>
      <form onSubmit={handleSubmit}
        className="flex mt-5 max-w-[90%] w-full mx-auto border rounded-full
        border-gray-200 px-5 py-3 hover:shadow-md focus-within:shadow-md
        transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input type="text" className="flex-grow focus:outline-none" 
        onChange={(e)=> setInput(e.target.value)}/>
        <BsFillMicFill className="text-lg" />
      </form>

      <div className="flex flex-col justify-center sm:flex-row space-y-2 sm:space-y-0
      mt-8 sm:space-x-4">    
        <button onClick={handleSubmit}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800
            hover:ring-gray-200 focus:outline-none active:ring-gray-300
            hover:shadow-md w-36 h-10 transition-shadow"
        >
          Google Search
        </button>
        <button onClick={randomSearch} disabled={randomSearchLoading}
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800
            hover:ring-gray-200 focus:outline-none active:ring-gray-300
            hover:shadow-md w-36 h-10 transition-shadow"
        >
    
        {randomSearchLoading ? "Loading" : "I'm Feeling Lucky"}
            </button>
      </div>
    </>
  );
}
