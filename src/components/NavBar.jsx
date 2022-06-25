import React,{useState} from 'react'

import GreenBtn from './GreenBtn';
import {
  FaBars,
  FaTimes,
  FaTwitch,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa'


const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id:1,
            link:'home',
        },
        {
            id:2,
            link:'services',
        },
        {
            id:3,
            link:'about',
        },
        {
            id:4,
            link:'support'
        },
        {
            id:5,
            link:'pricing',
        }
    ]

  return (
    <div className='w-screen h-20 z-20 fixed shadow-md'>
        <div className='px-3 flex items-center justify-between w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-4xl font-bold '>Care</h1>
            </div>
            <ul className='hidden md:flex'>
                {
                    links.map(({id,link})=>(
                        <li key={id} className='hover:scale-110 duration-300 capitalize px-4 py-1 cursor-pointer inline hover:border-b-4 hover:border-green-600'>{link}</li>
                    ))
                }
            </ul>
            <div className='hidden md:flex mr-4'>
                <GreenBtn title="Sign In" className="px-5 py-2"/>
            </div>
            
            <div className='md:hidden'>
                <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
                    <FaBars size={30}/>
                </div>
            </div>
        </div>

            <div className={ nav && 'md:hidden  fixed left-0 top-0 w-full h-full bg-lime-400/20 backdrop-blur'}>
                <div className={nav ? 'p-8 fixed left-0 top-0 w-4/5 h-full bg-opacity-80 bg-lime-200 ease-in duration-300' : "fixed top-0 left-[-100%] p-10 duration-500 ease-in h-full"}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <h2 onClick={()=>setNav(false)} className='text-3xl font-bold capitalize cursor-pointer'>Care</h2>
                            <div onClick={()=>setNav(!nav)} className='p-3 cursor-pointer'>
                                <FaTimes size={30}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className='mt-5 flex flex-col  gap-12'>
                        <GreenBtn className="px-5 my-2 py-1 hover:bg-transparent" title="Sign In"/>
                        <ul className='capitalize'>
                        {
                            links.map(({id,link})=>(
                                <li key={id} className="py-2 text-2xl cursor-pointer text-bold tracking-wider">{link}</li>
                            ))
                        }
                    </ul>
                    <div className='grid grid-cols-2 mx-auto w-4/5 gap-10'>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-teal-800 p=1'>
                            <FaFacebook size={25}/>
                        </div>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-teal-800 p-1'>
                            <FaTwitch size={25}/>
                        </div>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-teal-800 p-1'>
                            <FaLinkedin size={25}/>
                        </div>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-teal-800 p-1'>
                            <FaTwitter size={25}/>
                        </div>
                    </div>

                </div>
                    
            </div>
        </div>

    </div>
  )
}

export default NavBar