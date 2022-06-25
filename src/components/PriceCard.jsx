import React from 'react'

import {FaPlusCircle} from 'react-icons/fa'
import GreenBtn from './GreenBtn'

const PriceCard = ({title,price,subtitle,features}) => {
  return (
    <div className='shadow-xl shadow-green-600 rounded-xl m-4'>
                    <div className='text-center bg-green-300 py-4 uppercase rounded-xl'>
                        <p>{title}</p>
                    </div>
                    <div className='p-4'>
                        <p className='text-6xl font-bold py-4 flex'>{price} <span className='text-xl text-green-900 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl px-4 py-8'>
                        {subtitle}
                    </p>
                    <div className='text-2xl '>
                        <div className='px-4 '>
                            {features.map(({id2,feature})=>(
                                <p key={id2} className=' flex items-center py-3 text-lg text-green-900'>
                                    <FaPlusCircle className='w-5 mr-3 '/> {feature}
                                </p>
                            ))}
                        </div>
                        <GreenBtn title='get started' className="capitalize w-full py-4 mt-14 rounded-none hover:border-none hover:scale-100 duration-500  "/>
                    </div>
    </div>
  )
}

export default PriceCard