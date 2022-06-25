import React from 'react'
import {FaChevronCircleRight} from 'react-icons/fa'
const Services = () => {

    const services = [
        {
            id:1,
            title:'One',
            subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sed aut non praesentium, suscipit eum soluta commodi rerum iure delectus.'
        },
        {
            id:2,
            title:'Two',
            subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sed aut non praesentium, suscipit eum soluta commodi rerum iure delectus.'
        },
        {
            id:3,
            title:'Three',
            subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sed aut non praesentium, suscipit eum soluta commodi rerum iure delectus.'
        },
        {
            id:4,
            title:'Four',
            subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sed aut non praesentium, suscipit eum soluta commodi rerum iure delectus.'
        },
    ]

  return (
    <div 
        name="services"
        className='w-full h-fit md:h-screen'>
            <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
                <h2 className='text-5xl font-bold text-center'>Services</h2>
                <p className='text-xl py-0 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sed aut non praesentium, suscipit eum soluta commodi rerum iure delectus.</p>

                <div className='grid sm:grid-cols-2 gap-4 pt-4'>
                    
                    {
                        services.map(({id,title,subtitle})=>(
                            <div key={id} className='flex items-start p-4 rounded-md bg-green-600 text-white'>
                                <div>
                                    <FaChevronCircleRight className='mt-3 mr-4 text-green-300' size={20}/>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg pt-2 pb-4 capitalize'>{title}</h3>
                                    <p className='text-lg'>{subtitle}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
    </div>
  )
}

export default Services