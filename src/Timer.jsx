import React from 'react'
import { Tracker } from './Tracker'
import { Link } from 'react-router-dom'

export const Timer = () => {
  return (
    <>
    <div className='flex items-center flex-col'>
   <div className='bg-[url(./assets/tomato1.png)] h-4/6 w-4/6 flex items-center mt-4 m-auto bg-center bg-contain bg-no-repeat max-h-96 max-w-md overflow-visible'>
   <div className='h-64 w-64 bg-white mt-24 m-auto rounded-full flex items-center mb-12'>
         <Tracker/>
    </div>
    </div>
    {/* <button className='h-8 w-36 bg-purple-500 rounded-lg text-xl font-bold hover:bg-white hover:text-purple-600' to="/login">Log Out</button> */}
    <Link className='h-8 w-36 bg-purple-500 rounded-lg text-xl font-bold hover:bg-white hover:text-purple-600 text-center' to="/login">Log Out</Link>
    </div>
    </>
  )
}
