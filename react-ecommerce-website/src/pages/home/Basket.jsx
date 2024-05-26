


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Basket = () => {
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const basketData = localStorage.getItem('basket');
        if (basketData) {
            setBasket(JSON.parse(basketData));
        }
    }, []);

    const handleDelete = (productId) => {
        const updatedBasket = basket.filter(item => item.product.id !== productId);
        setBasket(updatedBasket);
        localStorage.setItem('basket', JSON.stringify(updatedBasket));
    };


    const totalPrice = basket.reduce((acc, item) => {
        return acc + (item.product.price * item.quantity);
    }, 0);

    return (
        <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 pt-3 pb-10 ">
            <div className='mb-5'>
                <Link to="/" className='text-gray-600'>Home</Link>
                <Link href="/basket" className='font-semibold'> / Basket</Link>
            </div>

      
            {basket.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {basket.map((item, index) => (
                        <div key={index} className="border p-4 rounded-md shadow-md flex flex-col sm:flex-row items-center sm:justify-between">
                            <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                                <img src={item.product.image} alt={item.product.title} className="w-16 h-16 object-cover mr-4" />
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium">{item.product.title}</h3>
                                    <p className="text-gray-600">Category: {item.product.category}</p>
                                    <p className="text-gray-600">Price: ${item.product.price}</p>
                                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                            </div>
                            <div className="flex items-center w-full sm:w-auto">
                                <p className="text-xl font-semibold mr-4">Total: ${item.product.price * item.quantity}</p>
                                <button
                                    onClick={() => handleDelete(item.product.id)}
                                    className="py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="border p-4 rounded-md shadow-md">
                        <p className="text-lg font-semibold mb-2">Total Price: ${totalPrice}</p>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Basket;
