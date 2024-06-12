import React, { useState } from 'react'
import Circle from './Circle'
import '../App.css'
import cloud from '../assets/cloud.svg';
import arrow from '../assets/arrow.svg';
export default function MainSection() {
    const [open,setOpen] = useState(false);
    function menuHandler(){
        setOpen(!open);
    }
    return (
        <>
            <div style={{ backgroundImage: `url(${cloud})` }}
                className="bg-cover w-full h-[520px] relative flex justify-between items-center px-4 text-white overflow-hidden"
            >
                <div className='absolute right-[225px] top-[80px] z-30'>
                    <Circle value="Global Benchmarks" />
                </div>
                <div className='absolute right-[190px] top-[220px] z-30'>
                    <Circle value="Scenario Modelling" />
                </div>
                <div className='absolute right-[235px] bottom-[45px] z-30'>
                    <Circle value="Healthcare Metrics" />
                </div>
                <div className='absolute left-[225px] top-[80px] z-30'>
                    <Circle value="Chairman" />
                </div>

                <div className='absolute left-[235px] bottom-[45px] z-30'>
                    <Circle value="Director General" />
                </div>
                <div className='text-[#FFFFFF] text-[13px] font-medium'>
                    Explore by<br />Persona
                </div>
                <div className='absolute flex items-center w-[300px] h-[40px] top-5 left-3'>
                    <div className='w-[40px] h-[40px] rounded-full custom-background flex justify-center items-center '>
                        <img src={arrow} alt='Arrow' />
                    </div>
                    <div className='ml-2 text-[14px]'>Analyse</div>
                </div>

                <div className='w-[845px] h-[845px] border border-[#476267] rounded-full flex justify-center items-center overflow-hidden relative Bordering'>
                    <div className='absolute right-[110px] bottom-[320px] z-30'>
                        <Circle value='Strategic Coverage' />
                    </div>
                    <div className='absolute left-[45px] top-[400px] z-30'>
                        <Circle value="ADEO" />
                    </div>
                    <div className='w-[690px] h-[690px] border border-[#476267] rounded-full flex justify-center items-center overflow-hidden relative'>
                        <div className='absolute left-[115px] bottom-[120px] z-30'>
                            <Circle value="PMO " />
                        </div>
                        <div className='w-[550px] h-[550px] border border-[#476267]  rounded-full flex justify-center items-center overflow-hidden'>
                            <div className='flex flex-col items-center '>
                                <div className='text-[40px]'>Analytics Explorer</div>
                                <div className='mt-3 bg-[#0783AB] divcolor rounded-3xl'>
                                    <div class="relative flex items-center h-9 w-[386px]  focus-within:shadow-lg overflow-hidden  rounded-3xl">
                                        <div class="grid place-items-center h-full w-12  text-white ">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58332C17.5 5.21107 13.9556 1.66666 9.58332 1.66666C5.21107 1.66666 1.66666 5.21107 1.66666 9.58332C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 " />
                                                <path d="M18.3333 18.3333L16.6667 16.6667" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                        <input
                                            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 divcolor"
                                            type="text"
                                            id="search"
                                            onClick={menuHandler}
                                        />
                                    </div>
                                    {open&&<div className='flex flex-col gap-2 py-3 rounded-3xl pl-5 coloring'>
                                        <div className='text-[14px]'>Global Benchmarks </div>
                                        <div className='text-[14px]'>Future needs of patients</div>
                                        <div className='text-[14px]'>Cross governmental collaboration</div>
                                        <div className='text-[14px]'>Strategic coverage</div>
                                        <div className='text-[14px]'>Obesity</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-[#FFFFFF] text-[13px] font-medium'>
                    Explore by<br />Theme
                </div>
            </div>
        </>

    )
}
