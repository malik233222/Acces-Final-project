import React, { useEffect, useState } from 'react';

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

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Your Basket</h2>
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
                </div>
            )}
        </div>
    );
};

export default Basket;





{/* <div className='mt-5'>
                    <Link to="/" className='text-gray-600'>Home</Link>
                    <Link href="/basket" className='font-semibold'> / Basket</Link>
                </div> */}