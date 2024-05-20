import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ filteredItems }) => {
    return (
        <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm'>
            {
                filteredItems.slice(0, 8).map((item) => (
                    <div key={item.id}>
                        <Link to={`/shop/${item.id}`}>
                            <img src={item.image} className=' mx-auto sm:w-full w-[312px] h-[400px]hover:scale-105 transition-all duration-200 ' alt="" />
                        </Link>
                        <div className='mt-4 px-4'>
                            <h4 className='text-base font-semibold mb-2'>{item.title}</h4>

                            <div className='flex justify-between'>
                                <p className='text-black/50'> {item.category}</p>
                                <p className='font-semibold'>${item.price}</p>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards