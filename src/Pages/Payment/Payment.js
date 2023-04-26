import React from 'react';
import { useGetCardProductByIdQuery } from '../../app/features/products/productApi';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const { id } = useParams();
    const { data: product } = useGetCardProductByIdQuery(id)
    const { data } = product || {};
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm data={data} />
            </Elements>
        </div>
    );
};

export default Payment;