import React from 'react'
import home from '../assets/home.svg';
import Chat from '../assets/Chat.svg';
import '../App.css'
export default function Navbar() {
    return (
        <>
            <div className='px-4 flex justify-between items-center h-[40px] .custom-background1'>
                {/* Home icon */}
                <div className='flex justify-center items-center font-medium'>
                    <div className='flex justify-center items-center'>
                        <img src={home} alt='Home' className='w-[12px]'/>
                    </div>
                    <div className='ml-1 text-white text-[10px] '>HOME</div>
                </div>

                {/* Menu options */}
                <div className='flex w-[220px] justify-between'>
                    <div className='text-[#C0F7FF] text-[10px] font-medium'>EXPLORE</div>
                    <div className='text-[#C0F7FF] text-[10px] font-medium'>MONITOR</div>
                    <div className='text-[#41DCD3] text-[10px] font-bold'>ANALYSE</div>
                </div>

                {/* Chat options */}
                <div className='flex justify-center items-center font-medium'>
                    <div className='flex justify-center items-center'>
                        <img src={Chat} alt='Chat' className='w-[12px]'/>
                    </div>
                    <div className='ml-2 text-white text-[10px] '>
                        CHAT
                    </div>
                </div>
            </div>
        </>
    )
}
