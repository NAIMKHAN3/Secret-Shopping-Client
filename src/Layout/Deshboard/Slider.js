import React from 'react';
import { Link } from 'react-router-dom';

const Slider = ({ isOpen }) => {
    return (
        <div className={`col-span-2  fixed bg-[#333533] ${!isOpen ? 'left-[-250px] lg:left-3' : 'left-3'} transition duration-700  z-20  h-[calc(100vh-25px)] p-5 rounded-lg`}>
            <ul className='flex flex-col h-full text-white  font-semibold'>
                <li className='font-semibold text-[#15f815] my-5'>Admin Deshboard</li>
                <li className='my-1  hover:bg-[#008000] px-2 py-1 rounded'>
                    <Link to='/deshboard/add-product'>Add Product</Link>
                </li>
                <li className='my-1 hover:bg-[#008000] px-2 py-1 rounded'>
                    <Link to='/deshboard/all-products'>All Products</Link>
                </li>
                <li className='my-1 hover:bg-[#008000] px-2 py-1 rounded'>
                    <Link to='/deshboard/i-phone'>i-Phone</Link>
                </li>
                <li className='my-1 hover:bg-[#008000] px-2 py-1 rounded'>
                    <Link to='/deshboard/vivo'>Vivo</Link>
                </li>
                <li className='my-1 hover:bg-[#008000] px-2 py-1 rounded'>
                    <Link to='/deshboard/oppo'>Oppo</Link>
                </li>
                <li className='my-1 hover:bg-[#008000] px-2 py-1 rounded'>
                    <Link to='/deshboard/symphony'>Symphony</Link>
                </li>
                <li className='my-1 hover:bg-[#008000] px-2 py-1 rounded'>
                    <Link to='/deshboard/xiaomi'>Xiaomi</Link>
                </li>
                <li className='my-1 hover:bg-[#008000] px-2 py-1 rounded'>
                    <Link to='/deshboard/huawei'>Huawei</Link>
                </li>
                <li className='mt-auto hover:bg-[#008000] px-2 py-1 rounded'>
                    <Link to='/'>Back to home</Link>
                </li>
            </ul>
        </div>
    );
};

export default Slider;