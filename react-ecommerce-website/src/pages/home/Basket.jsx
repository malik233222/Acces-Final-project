import React from 'react'
import { Link } from 'react-router-dom'

const Basket = () => {
    return (
        <div className='  shadow-inner max-w-screen-2xl container mx-auto xl:px-28 px-4'>
            <div className='p-3 max-w-7xl m-auto'>
                <div className='mt-5'>
                    <Link to="/" className='text-gray-600'>Home</Link>
                    <Link href="/basket" className='font-semibold'> / Basket</Link>
                </div>

                <div>
                    
                </div>

            </div>
        </div>
    )
}

export default Basket