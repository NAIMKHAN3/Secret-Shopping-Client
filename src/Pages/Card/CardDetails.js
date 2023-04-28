import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetCardProductByIdQuery } from '../../app/features/products/productApi';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const CardDetails = () => {
    const { _id } = useParams();
    const { data: product } = useGetCardProductByIdQuery(_id)
    const { data } = product || {};
    const email = useSelector(state => state.auth.user.email);
    const originPrice = parseInt(data?.price)
    const discoundPrice = originPrice - (originPrice * (parseInt(data?.discound) / 100))

    console.log(data)
    return (
        <div>
            <div className='flex justify-around flex-col md:flex-row  my-10 p-5'>
                <img className='w-[250px] mx-auto md:w-[300px] md:h-[400px] rounded-xl' src={data?.image} alt="" />
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
                    <h5 className='border-t-2 border-gray-400 font-semibold'>Discound Price: <span className='text-[#008000]'>BDT {parseInt(discoundPrice)}</span></h5>
                    <h5 className='border-t-2 border-gray-400 font-semibold'>Original Price: BDT <span className='line-through'>{originPrice}</span> <span>-{data?.discound}%</span></h5>
                    <h5 className='border-t-2 border-gray-400 font-semibold'>Quantity: {data?.quantity}</h5>

                    <div className='my-3 grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <Link to={`/payment/${data?._id}`}><button className='bg-indigo-500 px-5 py-1 rounded text-white '>Buy Now</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardDetails;