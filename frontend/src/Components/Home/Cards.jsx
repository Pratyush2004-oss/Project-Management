import React from 'react'
import { data } from '../../Assets/cardData'
import { Heart, Trash2Icon } from 'lucide-react'

const Cards = () => {
    return (
        <div className='h-[75vh] overflow-y-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
                {data && data.map((item, idx) => (
                    <div key={idx} className='bg-gray-800 z-0 max-h-1/3 flex flex-col justify-between rounded-xl shadow-xl p-2'>
                        <div className='my-2'>
                            <h1 className='text-lg font-bold'>{item.title}</h1>
                            <p className='text-sm my-2 text-gray-500'>{item.desc}</p>
                        </div>
                        <div className='flex items-center justify-between m-2'>
                            <button className={`btn btn-xs rounded-full ${item.status === 'Incomplete' ? 'btn-warning' : 'btn-success'}`}>{item.status}</button>
                            <div className='flex items-center gap-2'>
                                <Heart className='cursor-pointer' />
                                <Trash2Icon className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards 