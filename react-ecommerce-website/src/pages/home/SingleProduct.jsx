import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json")
        const data = await response.json();
        const product = data.filter((p) => p.id == id)
        setProducts(product[0])
        console.log(product);

      } catch (error) {
        console.log("Error Fetching data: ", error);
      }
    }
    fetchData()
  }, [])

  const { title, category, price, image, status } = products
  return (
    <div className='  shadow-inner max-w-screen-2xl container mx-auto xl:px-28 px-4'>
      <div className='p-3 max-w-7xl m-auto'>
        <div className='mt-6 sm:mt-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>

            <div>
              <img src={image} alt="" className='w-full' />
            </div>

            {/* product detail */}
            <div>

              <h1 className='title text-left '>{title}</h1>
              <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam necessitatibus odit temporibus, omnis perferendis, saepe laborum consectetur recusandae eaque eos corporis impedit, sit illum itaque dolore fugiat ad modi nesciunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>

              <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4 '>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>

              <p className='text-xl  text-red-500 font-semibold sm:text-2xl'>${price}</p>

              <div className='mt-3'>
                <div className='text-left  flex flex-col  gap-2  w-full'>
                  <label className='font-medium'> Quantity</label>
                  <input type="number" name='price' id='price' defaultValue={1} required className='border border-gray-300 text-sm font-medium mb-1  max-w-full w-full  outline-none rounded-md m-0  py-3 px-4 md:px-4 focus:border-red-500' />
                </div>

                <div className='w-full text-left my-4'>
                  <button className='flex justify-center items-center gap-2 w-full  py-3 px-4 bg-red-500 text-white font-semibold border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6'><span>Confirmed Order</span><FaArrowAltCircleRight /></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct