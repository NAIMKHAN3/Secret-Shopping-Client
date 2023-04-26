import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetAddToCardProductsQuery } from '../../app/features/products/productApi';
import CardProduct from './CardProduct';
import { Link } from 'react-router-dom';

const Card = () => {
    const email = useSelector(state => state.auth.email);
    const { data, isLoading } = useGetAddToCardProductsQuery(email)
    const products = data?.data || [];
    console.log(products)
    useEffect(() => {

    }, [data])

    if (isLoading) {
        return <h1 className='text-center font-semibold'>Loading...</h1>
    }
    if (!products.lentgh) {
        <h1>Please Add to card <Link to='/all-products'><span>Product</span></Link></h1>
    }
    else {
        return
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