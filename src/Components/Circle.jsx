import React from 'react'

export default function Circle({value}) {
  
  return (
    <div className='w-[80px] h-[80px] bg-gradient-to-b from-[#022B3D] via-[#022B3D] to-[#042025] flex justify-center items-center rounded-full'>
        <div className='text-[#FFFFFF] text-[10px] text-center w-full mx-1'>{value}</div>

    </div>
  )
}
