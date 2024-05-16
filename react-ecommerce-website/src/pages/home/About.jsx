import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='py-0'>
            <div className='flex justify-center flex-col ali px-28 py-16
        '>
                <h1 className=''>Elaqe</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum odit ipsam pariatur nisi tenetur et? Officia, maiores ipsa? Dolore modi aliquid doloremque impedit quos perferendis similique, sunt recusandae possimus? Assumenda, inventore maxime porro voluptate laboriosam neque numquam ipsa eveniet quos.</p>
                <Link to="/">
                <button className='bg-orange-500 rounded-none p-4'>
                    Home
                </button>
            </Link>
            </div>
           
        </div>
    )
}

export default About