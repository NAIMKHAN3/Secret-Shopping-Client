import React from 'react';

const OurDealership = () => {
    return (
        <div className='max-w-6xl mx-auto p-3 my-10'>
            <h1 className='text-[#008000] text-4xl text-center font-semibold my-10'>OUR DEALERSHIP </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <img className='w-full md:w-72 md:h-64 mx-auto cursor-pointer rounded-md' src="https://1000logos.net/wp-content/uploads/2017/02/Symbol-of-the-iPhone-logo.jpg" alt="" />
                <img className='w-full md:w-72 md:h-64 mx-auto cursor-pointer rounded-md' src="https://1000logos.net/wp-content/uploads/2022/02/Vivo-Logo.jpg" alt="" />
                <img className='w-full md:w-72 md:h-64 mx-auto cursor-pointer rounded-md' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_Oppo_Wiki_Tetum.png" alt="" />
                <img className='w-full md:w-72 md:h-64 mx-auto cursor-pointer rounded-md bg-white p-3' src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Emblem.png" alt="" />
                <img className='w-full md:w-72 md:h-64 mx-auto cursor-pointer bg-white p-2 rounded-md' src="https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-Logo-2014.png " alt="" />
                <img className='w-full md:w-72 md:h-64 mx-auto cursor-pointer rounded-md' src="https://image.shutterstock.com/image-photo/image-260nw-2269709285.jpg" alt="" />
            </div>
        </div>
    );
};

export default OurDealership;