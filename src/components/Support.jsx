import React from 'react'

import {MdOutlineComputer,
        MdOutlineSupportAgent,
        MdPerson
        } from 'react-icons/md'
import GreenBtn from './GreenBtn'

const support = () => {



  return (
    <div name="support" className='w-full h-fit '>
        <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
            <div className='px-4 py-12'>
                <h2 className='text-5xl font-bold text-center'>Support</h2>
                <p className='text-xl py-8 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quasi nesciunt, quam tempora officiis animi illo assumenda omnis dolores. Consectetur.</p>
            </div>

            <div className='grid lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20'>
                
                <div className='rounded-xl shadow-lg shadow-green-400'>
                    <div className='p-8'>
                        <div className='flex items-center justify-center w-14 h-14 rounded-full mt-[-4rem] bg-green-500 text-white'>
                            <MdOutlineComputer size={25}/>
                        </div>
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-base pb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cumque?</p>
                    </div>
                </div>
                
                <div className='rounded-xl shadow-lg shadow-green-400'>
                    <div className='p-8'>
                        <div className='flex items-center justify-center w-14 h-14 rounded-full mt-[-4rem] bg-green-500 text-white'>
                            <MdOutlineSupportAgent size={25}/>
                        </div>
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-base pb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cumque?</p>
                    </div>
                </div>
                <div className='rounded-xl shadow-lg shadow-green-400'>
                    <div className='p-8'>
                        <div className='flex items-center justify-center w-14 h-14 rounded-full mt-[-4rem] bg-green-500 text-white'>
                            <MdPerson size={25}/>
                        </div>
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-base pb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cumque?</p>
                    </div>
                </div>

                </div>
                <div className='flex w-full my-12 items-center justify-center'>
                    <GreenBtn title='contact us' className="capitalize py-3 px-6 w-1/2 my-8"/>
                </div>
            
        </div>
    </div>
  )
}

export default support