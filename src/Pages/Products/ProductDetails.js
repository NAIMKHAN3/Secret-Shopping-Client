import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAddToCardMutation, useGetProductByIdQuery } from '../../app/features/products/productApi';
import { useSelector } from 'react-redux';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { toast } from 'react-hot-toast';

const ProductDetails = () => {
    const { _id } = useParams();
    const { data: product } = useGetProductByIdQuery(_id)
    const { data } = product || {};
    const email = useSelector(state => state.auth.email);
    const [addToCard, { data: addCard }] = useAddToCardMutation();
    const [quantity, setQuantity] = useState(1);
    const originPrice = parseInt(data?.price)
    const discoundPrice = originPrice - (originPrice * (parseInt(data?.discound) / 100))
    const handleQuantityPlus = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1)
        }
        return;
    }
    const handleQuantityMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
        return;
    }

    const handleAddToCard = (product) => {
        const { brand, model, ram, rom, color, processor, battery, fastCharging, system, screen, camera, touchScreen, price, discound, image
        } = product;
        const data = {
            brand,
            model,
            ram,
            rom,
            color,
            processor,
            battery,
            fastCharging,
            system,
            screen,
            camera,
            touchScreen,
            price,
            discound,
            image
        }
        addToCard({ ...data, quantity, email })
    }

    useEffect(() => {
        if (addCard?.status) {
            toast.success('Add To Card Success', { id: 'img' })
        }

        if (addCard?.message) {
            toast.error(addCard?.message, { id: 'img' })
        }
    }, [addCard])



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
                    <div className='flex justify-start items-center border-t-2 border-gray-400'>
                        <h5 className=' font-semibold'>Quantity: </h5>
                        <div className='my-3 flex justify-between'>
                            <button onClick={handleQuantityMinus} className='bg-white px-5 py-1 rounded mx-2 '><AiOutlineMinus /></button>
                            <p className='font-semibold'>{quantity}</p>
                            <button onClick={handleQuantityPlus} className='bg-white px-5 py-1 rounded  mx-2'><AiOutlinePlus /></button>
                        </div>
                    </div>
                    <div className='my-3 grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <Link to={`/direct-payment/${data?._id}`}><button className='bg-indigo-500 px-5 py-1 rounded text-white '>Buy Now</button></Link>
                        <button onClick={() => handleAddToCard(data)} className='bg-[#008000] px-5 py-1 rounded text-white'>Add to card</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;