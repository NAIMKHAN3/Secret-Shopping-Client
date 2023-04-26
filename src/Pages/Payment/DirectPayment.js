import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { useGetProductByIdQuery } from '../../app/features/products/productApi';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const DirectPayment = () => {
    const { id } = useParams();
    const { data: product } = useGetProductByIdQuery(id)
    const { data } = product || {};
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm data={data} />
            </Elements>
        </div>
    );
};

export default DirectPayment;