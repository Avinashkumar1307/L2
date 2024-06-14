import React from 'react'
import home from '../assets/home.svg';
import Chat from '../assets/Chat.svg';
import '../App.css'
export default function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center h-[71px] navbaring'>

                <div className='w-[2320px] h-[71px] flex  justify-between items-center'>
                    {/* Home icon */}
                    <div className='w-[250px] h-[72px] flex justify-start items-center font-medium'>
                        <div className='flex justify-center items-center'>
                            <img src={home} alt='Home' className='w-[24px] h-[24px]' />
                        </div>
                        <div className='ml-1 text-white text-[18px]'>HOME</div>
                    </div>

                    {/* Menu options */}
                    <div className='w-[603px] h-[48px] top-[15px] flex justify-center items-center '>
                        <div className='flex w-[354px] h-[36.76px] justify-between'>
                            <div className='w-[90px] h-[24px] flex justify-center'>
                                <div className='w-[72px] h-[24px]'>
                                    <div className='text-[#C0F7FF] text-[16px] leading-[24px] font-medium'>EXPLORE</div>
                                </div>
                            </div>
                            <div className='w-[90px] h-[24px] flex justify-center'>
                                <div className='w-[72px] h-[24px]'>
                                    <div className='text-[#C0F7FF] text-[16px] leading-[24px] font-medium'>MONITOR</div>
                                </div>
                            </div>
                            <div className='w-[90px] h-[24px] flex justify-center'>
                                <div className='w-[72px] h-[24px]'>
                                    <div className='text-[#41DCD3] text-[16px] leading-[24px] font-medium'>ANALYSE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Chat options */}
                    <div className='w-[250px] h-[72px] flex justify-end items-center font-medium'>
                        <div className='flex justify-center items-center'>
                            <img src={Chat} alt='Home' className='w-[24px] h-[24px]' />
                        </div>
                        <div className='ml-1 text-white text-[18px]'>CHAT</div>
                    </div>
                </div>
                {/*  */}
            </div>
            <div className='w-full h-[1px] bordering'></div>
        </>
    )
}
