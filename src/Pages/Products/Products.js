import React from 'react';

const Products = () => {
    return (
        <div className='h-[340px] w-[200px] hover:border my-10 mx-5 bg-white rounded-md hover:shadow-xl cursor-pointer'>
            <img className='p-3' src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg" alt="" />
            <div className='p-3'>
                <h1 className='font-semibold'>iPhone 13 Pro max</h1>
                <p className='text-[#008000] '>Price: <span className='font-semibold text-lg'>120000</span></p>
                <div className='flex justify-start text-xs'>
                    <p className='line-through'>BDT 144000</p>
                    <p>-2%</p>
                </div>
            </div>
        </div>
    );
};

export default Products;