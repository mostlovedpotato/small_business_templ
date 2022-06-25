import React from 'react'


import PriceCard from './PriceCard'

const Pricing = () => {
    const pcards = [
        {
            id:1,
            title:'Monthly Plan',
            price:'55',
            subtitle:'篇优质算法题解，通俗易懂，全网400万阅读。让天下没有难懂的数据结构与算法',
            features:[
                {
                    id2:1,
                    feature:'我的本科不是计算机专业，出于爱好，自学计算机。',
                },
                {
                    id2:2,
                    feature:'我的本科不是计算机专业，出于爱好，自学计算机。',
                },
                {
                    id2:3,
                    feature:'我的本科不是计算机专业，出于爱好，自学计算机。',
                },
                {
                    id2:4,
                    feature:'我的本科不是计算机专业，出于爱好，自学计算机。',
                },
            ]
        },
        {
            id:2,
            title:'Yearly Plan',
            price:'44',
            subtitle:'篇优质算法题解，通俗易懂，全网400万阅读。让天下没有难懂的数据结构与算法',
            features:[
                {
                    id2:1,
                    feature:'我的本科不是计算机专业，出于爱好，自学计算机。',
                },
                {
                    id2:2,
                    feature:'我的本科不是计算机专业，出于爱好，自学计算机。',
                },
                {
                    id2:3,
                    feature:'我的本科不是计算机专业，出于爱好，自学计算机。',
                },
                {
                    id2:4,
                    feature:'我的本科不是计算机专业，出于爱好，自学计算机。',
                },
            ]
        },
        {
            id:3,
            title:'Three year Plan',
            price:'30',
            subtitle:'篇优质算法题解，通俗易懂，全网400万阅读。让天下没有难懂的数据结构与算法',
            features:[
                {
                    id2:1,
                    feature:'我的本科不是计算机专业，出于爱好，自学计算机。',
                },
                {
                    id2:2,
                    feature:'我的本科不是计算机专业，出于爱好，自学计算机。',
                },
                {
                    id2:3,
                    feature:'我的本科不是计算机专业，出于爱好，自学计算机。',
                },
                {
                    id2:4,
                    feature:'我的本科不是计算机专业，出于爱好，自学计算机。',
                },
            ]
        },
    ]
  return (
    <div name="pricing" className='w-full h-fit'>
        <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'>
            <div className='px-4 py-12'>
                <h2 className='text-5xl font-bold text-center'>
                    Pricing
                </h2>
                <p className='text-xl py-8 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis exercitationem cum fugit, amet tempora necessitatibus veniam rem! Iusto fugiat non vero quasi doloremque maiores ipsa similique qui. Aperiam, eligendi. Tempora?</p>
            </div>
            <div className='grid md:grid-cols-2'>
                {
                    pcards.map(({id,price,title,subtitle,features})=>(
                        <PriceCard key={id} title={title} price={price} subtitle={subtitle} features={features}/>
                    ))
                }
                
            </div>
        </div>  
    </div>
  )
}

export default Pricing