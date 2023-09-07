import React, { useState } from 'react'
// import './Tracker.css'
import { Clock } from './Clock'

export const Tracker = () => {
    const [timetrack,settimetrack]=useState(20)
  return (
    <div className='h-56 w-56 rounded-full bg-red-500 m-auto flex' id='conic' timetrack={timetrack}>
        <div className='h-52 w-52 rounded-full bg-white m-auto flex'>
          <Clock/>
        </div>
    </div>
  )
}
