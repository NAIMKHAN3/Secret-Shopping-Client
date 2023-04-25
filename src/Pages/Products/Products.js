import React from 'react';
import { useGetProductsQuery } from '../../app/features/products/productApi';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const { data } = useGetProductsQuery();
    const products = data?.data || [];
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 max-w-6xl mx-auto'>
            {
                products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
            }
        </div>
    );
};

export default Products;