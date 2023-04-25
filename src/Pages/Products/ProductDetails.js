import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../app/features/products/productApi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCard } from '../../app/features/card/cardSlice';

const ProductDetails = () => {
    const { _id } = useParams();
    const { data: product } = useGetProductByIdQuery(_id)
    const { data } = product || {};
    const card = useSelector(state => state.card?.card);
    const dispatch = useDispatch()
    console.log(card)
    return (
        <div>
            <div className='flex justify-around  my-10'>
                <img className='w-[300px] h-[400px] rounded-xl' src={data?.image} alt="" />
                <div>
                    <h1 className='font-bold text-2xl my-5'> {data?.brand} {data?.model}</h1>
                    <h5 className='border-t-2 border-gray-400 font-semibold'>RAM: {data?.ram}</h5>
                    <h5 className='border-t-2 border-gray-400 font-semibold'>ROM: {data?.rom}</h5>
                    <h5 className='border-t-2 border-gray-400 font-semibold'>Processor: {data?.processor}</h5>
                    <h5 className='border-t-2 border-gray-400 font-semibold'>Color: {data?.color}</h5>
                    <h5 className='border-t-2 border-gray-400 font-semibold'>Battery: {data?.battery}</h5>
                    <h5 className='border-t-2 border-gray-400 font-semibold'>Camera: {data?.camera}</h5>
                    <h5 className='border-t-2 border-gray-400 font-semibold'>Fast Charging: {data?.fastCharging}</h5>
                    <h5 className='border-t-2 border-gray-400 font-semibold'>Screen: {data?.screen}</h5>
                    <h5 className='border-t-2 border-gray-400 font-semibold'>system: {data?.system}</h5>
                    <h5 className='border-t-2 border-gray-400 font-semibold'>Touch Screen: {data?.touchScreen}</h5>
                    <div className='my-3 grid grid-cols-1 md:grid-cols-2'>
                        <button className='bg-indigo-500 px-5 py-1 rounded text-white mr-2'>Buy Now</button>
                        <button onClick={() => dispatch(addToCard(data))} className='bg-[#008000] px-5 py-1 rounded text-white ml-2'>Add to card</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;