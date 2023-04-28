import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { usePostPaymentInfoMutation } from '../../app/features/Payment/paymentApi';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const CheckoutForm = ({ data }) => {
    const email = useSelector(state => state.auth.user.email);
    const originPrice = parseInt(data?.price)
    let quantity;
    if (data?.quantity) {
        quantity = parseInt(data?.quantity);
    } else {
        quantity = 1;
    }
    const discoundPrice = originPrice - (originPrice * (parseInt(data?.discound) / 100))
    const totalAmount = parseInt(discoundPrice) * quantity;
    const [postPaymentInfo] = usePostPaymentInfoMutation();
    const [clientSecret, setClientSecret] = useState("");
    const [errorConfirm, setErrorConfirm] = useState("");
    const [error, setError] = useState("");
    const [paymentSuccess, setpaymentSuccess] = useState("");
    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ totalAmount }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setClientSecret(data.clientSecret)
            });
    }, [totalAmount]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const number = event.target.number.value;
        const address = event.target.address.value;
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log("error", error)
            setError(error?.message)
        } else {
            setError("")

        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setErrorConfirm(confirmError.message)
            toast.error(confirmError.message)
            return;
        } else {
            setErrorConfirm("")
        }
        if (paymentIntent.status === "succeeded") {
            setpaymentSuccess(paymentIntent)
            const payment = {
                paymentProductId: data?._id,
                paymentProductBrand: data?.brand,
                paymentProductModel: data?.model,
                transaction: paymentIntent.id,
                amount: paymentIntent.amount,
                email,
                number,
                address
            }
            postPaymentInfo(payment)
            toast.success("Payment Success")
        }
    }
    console.log(errorConfirm)
    return (
        <>
            <h1 className='text-center font-bold text-[#008000] text-xl'>Payment Page {data?.brand} {data?.model}</h1>
            <h1 className='text-center font-bold text-[#008000] text-xl'>Amount: BDT {totalAmount}</h1>
            <form onSubmit={handleSubmit} className='max-w-3xl mx-auto my-10 p-3'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Your Phone</label>
                        <input type='text' name='number' className='w-full border-2 p-2 my-2 rounded' placeholder='Phone' required />
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Your Address</label>
                        <input type='text' name='address' className='w-full border-2 p-2 my-2 rounded' placeholder='Address' required />
                    </div>
                </div>
                <CardElement
                    className='bg-white p-3'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <p className='text-red-500 font-semibold text-center my-3'>{errorConfirm}</p>
                <button className='bg-indigo-500 px-5 py-1 rounded text-white my-3' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                paymentSuccess && <div className='mb-10'>
                    <h1 className='text-center text-[#008000] font-semibold text-xl'>Congratulations! Your Payment is success</h1>
                    <h1 className='text-center text-[#008000]'>Your Transaction Id: <span className='font-semibold '>{paymentSuccess.id}</span></h1>
                    <h1 className='text-center text-[#008000] '>Your Payment Amount: <span className='font-semibold '>BDT {totalAmount}</span> </h1>
                    <h1 className='text-center text-[#008000]'>Your Email: <span className='font-semibold '>{email}</span> </h1>
                </div>
            }
        </>
    );
};

export default CheckoutForm;