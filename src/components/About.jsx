import React from 'react'
import {FaTimes} from 'react-icons/fa'

const About = () => {

    const abouts = [
        {
            id:1,
            title:'Vision',
            subtitle:'Great',
        },
        {
            id:2,
            title:'Technology',
            subtitle:'Latest',
        },
        {
            id:3,
            title:'Robustness',
            subtitle:'Malleable',
        },
    ]

  return (
    <div className='w-full h-fit md:h-screen ' name="about">
        <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>
                    By <span className='text-green-500'>Potatoe Team</span> for {' '} <span className='text-green-500'>Devs</span>
                </h2>
                <p className='text-xl font-light text-green-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere ea sed quae nulla. Possimus debitis id totam dolore fuga vitae, sequi quisquam odio! Earum commodi enim ut accusamus minima!
                </p>
            </div>
            <div className='grid md:grid-cols-2 gap-10 px-2 w-full'>
                <div className='flex items-center justify-center hover:scale-110 duration-500 hover:animate-pulse'>
                    <div className='flex flex-col items-center justify-center w-80 h-64 py-8 rounded-md shadow-xl shadow-green-700'>
                        <p className=' flex text-5xl font-bold text-green-500'>24 <FaTimes size={30}/> 7 </p>
                        <p className='mt-2 capitalize text-xl'>Availibility</p>
                    </div>
                </div>
                {
                    abouts.map(({id,title,subtitle})=>(
                        <div key={id} className='flex items-center justify-center hover:scale-110 duration-500 hover:animate-pulse'>
                            <div className='flex flex-col items-center justify-center w-80 h-64 py-8 rounded-md shadow-xl shadow-green-700'>
                                <p className='text-3xl font-bold text-green-500'>{title} </p>
                                <p className='mt-2 capitalize text-xl'>{subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default About