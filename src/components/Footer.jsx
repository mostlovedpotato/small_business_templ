import React from 'react'


import GreenBtn from './GreenBtn'
import {
    FaFacebook,
    FaLinkedin,
    FaTwitch,
    FaTwitter
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full py-8 px-2 border-t-2'>
        <div className='flex flex-col items-center mx-auto justify-center max-w-screen-xl h-full px-3 py-12'>
            <div className='flex flex-col gap-8 md:flex-row items-center justify-center w-full'>
                {/* socials */}
                <div className='w-3/4 md:w-1/2'>
                    <div className='grid grid-cols-2 mx-auto w-4/5 gap-10'>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-green-700 cursor-pointer hover:scale-110 duration-300 ease-in bg-green-900 py-4 text-white hover:bg-transparent hover:text-green-500'>
                            <FaFacebook size={25}/>
                        </div>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-green-700 cursor-pointer hover:scale-110 duration-300 ease-in bg-green-900 py-4 text-white hover:bg-transparent hover:text-green-500'>
                            <FaLinkedin size={25}/>
                        </div>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-green-700 cursor-pointer hover:scale-110 duration-300 ease-in bg-green-900 py-4 text-white hover:bg-transparent hover:text-green-500'>
                            <FaTwitch size={25}/>
                        </div>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-green-700 cursor-pointer hover:scale-110 duration-300 ease-in bg-green-900 py-4 text-white hover:bg-transparent hover:text-green-500'>
                            <FaTwitter size={25}/>
                        </div>
                    </div>
                </div>
                {/* newsletter */}
                <div className='w-3/4 md:w-1/2'>
                    <div className='w-full pt-8 md:pt-2'>
                        <p className='font-bold uppercase mb-8 text-green-700 text-lg text-center md:text-left'>Subscribe to Newsletter</p>
                        <form action="https://getform.io/f/e4845e87-dc57-4dde-be40-681d6a88c6b0" method='POST' className='flex flex-col sm:flex-row'>
                            <input type="text" name='email' className='w-full p-2 mr-4 mb-4 border-green-300 border-2 rounded-md' placeholder='Updates'/>
                            <GreenBtn title='Subscribe' className='p-2 mb-4 hover:border-green-300'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer