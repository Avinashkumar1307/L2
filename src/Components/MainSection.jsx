import React, { useState } from 'react'
import Circle from './Circle'
import '../App.css'

import arrow from '../assets/arrow.svg';
export default function MainSection() {
    const [open, setOpen] = useState(false);
    function menuHandler() {
        setOpen(!open);
    }
    return (
        <>
            <div className="bg-cover w-[2400px] h-[828px] relative flex justify-between items-center  text-white overflow-hidden">
                <div className='absolute left-[1873px] top-[54px] z-30'>
                    <Circle value="Global Benchmarks" />
                </div>
                <div className='absolute left-[1927px] top-[292px] z-30'>
                    <Circle value="Scenario Modelling" />
                </div>
                <div className='absolute left-[1871px] top-[645px] z-30'>
                    <Circle value="Healthcare Metrics" />
                </div>
                <div className='absolute left-[389px] top-[54px] z-30'>
                    <Circle value="Chairman" />
                </div>
                <div className='absolute left-[1749px] top-[452px] z-30'>
                    <Circle value='Strategic Coverage' />
                </div>
                <div className='absolute left-[534px] top-[292px] z-30'>
                    <Circle value="ADEO" />
                </div>
                <div className='absolute left-[379px] top-[572px] z-30'>
                    <Circle value="Director General" />
                </div>
                <div className='absolute left-[780px] top-[613px] z-30'>
                    <Circle value="PMO" />
                </div>
                <div className='text-[#FFFFFF] ml-[40px] text-[20px] leading-[24px] font-medium'>
                    Explore by<br />Persona
                </div>
                <div className='absolute flex items-center w-[366px] h-[60px] top-[16px] left-[24px]'>
                    <div className='w-[60px] h-[60px] rounded-full custom-background flex justify-center items-center '>
                        <img src={arrow} alt='Arrow' className='w-[6px] h-[12px]' />
                    </div>
                    <div className='ml-[20px] w-[266px]  text-[20px] leading-[30px]'>Analyse</div>
                </div>
                <div className='w-[1585.9px] h-[1587.44px] border border-[#273c3f] rounded-full flex justify-center items-center  z-20'>

                    <div className='w-[1234.16px] h-[1235.71px] border border-[#273c3f] rounded-full flex justify-center items-center overflow-hidden relative'>

                        <div className='w-[910.35px] h-[910.35px] border border-[#273c3f]  rounded-full flex justify-center items-center  overflow-hidden'>
                            <div className='flex flex-col items-center  w-[593px] h-[515px]  '>
                                <div className='text-[72px] leading-[80px]'>Analytics Explorer</div>
                                <div className='w-full h-full  flex justify-center items-center '>
                                    <div className='w-[540px] h-[329px] p-[12px] pr-[14px] pb-[12px] pl-[6px]  rounded-[40px] bgofinputes'>
                                        <div class=" flex items-center h-[48px] w-full  focus-within:shadow-lg overflow-hidden  rounded-3xl">
                                            <div class="grid place-items-center h-full w-12 ">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.5 19C15.9182 19 19.5 15.4183 19.5 11C19.5 6.58172 15.9182 3 11.5 3C7.08169 3 3.49997 6.58172 3.49997 11C3.49997 15.4183 7.08169 19 11.5 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M21.4999 21L17.1499 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <input
                                                class=" h-full w-full outline-none text-sm py-[8px] bg-transparent caret-white"
                                                type="text"
                                                id="search"
                                                onClick={menuHandler}
                                            />
                                        </div>
                                        <div className='w-[520px] h-[247px] flex flex-col rounded-3xl pl-5 coloring mt-2 justify-around'>
                                            <div className='text-[18px]'>Global Benchmarks </div>
                                            <div className='text-[18px]'>Future needs of patients</div>
                                            <div className='text-[18px]'>Cross governmental collaboration</div>
                                            <div className='text-[18px]'>Strategic coverage</div>
                                            <div className='text-[18px]'>Obesity</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-[18px] w-[428px]'>Obesity</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-[#FFFFFF] mr-[40px] text-[20px] leading-[24px] font-medium'>
                    Explore by<br />Theme
                </div>
            </div>
        </>
    )
}
