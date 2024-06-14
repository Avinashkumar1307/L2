import React from 'react'
import '../App.css'
export default function Circle({value}) {
  
  return (
    <div className='w-[140px] h-[140px] bgcoloring  flex justify-center items-center rounded-full z-30'>
        <div className='text-[#FFFFFF] text-[16px] text-center w-full'>{value}</div>
    </div>
  )
}
