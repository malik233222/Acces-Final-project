import React from 'react'
import bannerImg from '../../../public/Images/image-product.png'
import { FaShoppingBag } from 'react-icons/fa'
const Banner = () => {
    return (
        <div className='bg-primayBG py-12  xl:px-28  '>
            <div className='px-4 sm:px-0 py-2 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
                {/* img */}
                <div className='md:w-1/22'>
                    <img src={bannerImg} alt="" />
                </div>

                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-light mb-5'>Collections</h1>
                    <p className='text-xl mb-7'>You can explore ans shop many differnt collection
                        from various barands here.</p>
                    <button className='bg-black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'> <FaShoppingBag /> Shop now</button>
                </div>

            </div>
        </div>
    )
}

export default Banner