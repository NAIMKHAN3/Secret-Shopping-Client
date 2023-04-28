import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetAddToCardProductsQuery } from '../../app/features/products/productApi';
import CardProduct from './CardProduct';
import { Link } from 'react-router-dom';

const Card = () => {
    const email = useSelector(state => state.auth.user.email);
    const { data, isLoading } = useGetAddToCardProductsQuery(email)
    const products = data?.data || [];
    console.log(products)


    if (isLoading) {
        return <h1 className='text-center font-semibold'>Loading...</h1>
    }
    console.log(products.length)
    if (!products.length) {
        return <div className='flex justify-center items-center h-[400px]'>
            <h1 className=' text-3xl font-semibold text-center'>Please Add to card <br /><Link to='/all-products'><span className='text-indigo-600'>Products</span></Link></h1>
        </div>
    }

    return (
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                products?.map(product => <CardProduct key={product._id} product={product}></CardProduct>)
            }
        </div>
    );

};

export default Card;