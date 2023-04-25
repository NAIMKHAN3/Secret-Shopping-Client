import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <h1>Products detailss</h1>
        </div>
    );
};

export default ProductsDetails;