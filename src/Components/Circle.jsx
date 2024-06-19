import React from 'react'
import '../App.css'
export default function Circle({value}) {
  
  return (
    <div className='w-[140px] h-[140px] bgcoloring  flex justify-center items-center rounded-full '>
        <div className='text-[#FFFFFF] text-[16px] text-center mx-[14px]'>{value}</div>
    </div>
  )
}
