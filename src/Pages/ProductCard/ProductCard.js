import React from 'react';

const ProductCard = ({ product }) => {
    const { image, price, discound, model, brand } = product
    const originPrice = parseInt(price)
    const discoundPrice = originPrice - (originPrice * (parseInt(discound) / 100))

    return (
        <div className='hover:border border-[black] bg-white rounded-2xl  cursor-pointer mx-auto'>
            <img className='p-3 w-80 h-96' src={image} alt="" />
            <div className='p-3'>
                <h1 className='font-semibold'>{brand} {model}</h1>
                <p className='text-[#008000] '>BDT <span className='font-semibold text-lg'>{parseInt(discoundPrice)}</span></p>
                <div className='flex justify-start text-xs'>
                    <p className='line-through'>BDT {originPrice}</p>
                    <p>-{discound}%</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;