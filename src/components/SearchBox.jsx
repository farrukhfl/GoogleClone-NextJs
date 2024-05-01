'use client'

import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get('searchTerm')
    const [term, setTerm] = useState(searchTerm || '')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!term.trim()) return
        router.push(`/search/web?searchTerm=${term}`)
    } 
  return (
    <form onSubmit={handleSubmit} className="flex border ml-10 mr-5 border-gray-200
     rounded-full shadow-lg px-6 py-3 flex-grow max-w-3xl items-center">
        <input type="text" className="w-full focus:outline-none"value={term} onChange={(e)=> setTerm(e.target.value)}/>
        <RxCross2 className="text-2xl text-gray-500 cursor-pointer sm:mr-2" onClick={()=> setTerm('')}/>
        <BsFillMicFill className="hidden sm:inline-flex text-blue-500 
        text-4xl border-l-2 border-gray-300 mr-3 pl-4"/>
        <AiOutlineSearch onClick={handleSubmit} className="hidden sm:inline-flex text-2xl text-blue-500 cursor-pointer"/>

    </form>
  )
}
