import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className='col-span-2 bg-[#333533] h-[calc(100vh-25px)] p-5 rounded-lg'>
            <ul className='flex flex-col h-full text-[#2ed62e] font-semibold'>
                <li className='font-semibold text-[#15f815] my-5'>Admin Deshboard</li>
                <li className='my-1'>
                    <Link to='/deshboard/product-list'>Product List</Link>
                </li>
                <li className='my-1'>
                    <Link to='/deshboard/add-product'>Add Product</Link>
                </li>
                <li className='mt-auto'>
                    <Link to='/'>Back to home</Link>
                </li>
            </ul>
        </div>
    );
};

export default Slider;