import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import {TbGridDots} from "react-icons/tb"
import {RiSettingsLine} from "react-icons/ri"
import SearchHeaderOptions from './SearchHeaderOptions'




export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex items-center w-full justify-between p-6'>
    <Link href="/">
    <Image src='https://logos-world.net/wp-content/uploads/2020/09/Google-Logo-2015-present.jpg'
      alt="Google logo" width={120} height={40}  />
    </Link>
    <div className='flex-1'>
        <SearchBox />
    </div>
    <div className='hidden md:inline-flex space-x-2'>
        <RiSettingsLine className='bg-transparent hover:bg-gray-200 p-2 text-4xl
        rounded-full cursor-pointer'/>
        <TbGridDots className='bg-transparent hover:bg-gray-200 p-2 text-4xl
        rounded-full cursor-pointer'/>
    </div>
    <button className="bg-blue-500 text-white rounded-md px-6 py-2 
        hover:brightness-105 hover:shadow-md transition-shadow ml-2">Sign in</button>
        </div>
        <SearchHeaderOptions />
    </header>
  )
}
