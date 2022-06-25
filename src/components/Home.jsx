import React from 'react'
import GreenBtn from './GreenBtn'
import hero from '../assets/hero.jpg'

const Home = () => {
  return (
    <div name="home" className='flex flex-col justify-between w-full h-screen text-center md:text-left'>
        <div className='grid md:grid-cols-2 max-w-screen-xl m-auto px-3'>
            <div>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'></div>
                <p className='text-2xl'>Get Solutions to your Problems.</p>
                <h1 className='pt-1 pb-6 text-5xl md:text-7xl font-bold'>
                    <span className="text-green-600">Yay!</span> Web Security
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod maiores unde quasi rerum a ipsam quos. Nulla libero labore dolore.</p>
                <GreenBtn title="Sign Up" className="capitalize py-3 px-6 sm:w-6/12"/>
            </div>

            <div className='flex items-center justify-center'>
                <img src={hero} alt="hero" className='w-3/4 rounded-full' />
            </div>
        </div>        
    </div>
  )
}

export default Home