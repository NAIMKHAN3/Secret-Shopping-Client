import React from 'react';
import { useForm } from 'react-hook-form';
import { useAddProductMutation } from '../../app/features/products/productApi';
import { toast } from 'react-hot-toast';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [postProduct, { isSuccess }] = useAddProductMutation();

    const imgbbKey = process.env.REACT_APP_IMGBB_KEY;

    const onSubmit = (data) => {
        const { image, name, price, discound, cetegory, description } = data;
        const imageFile = image[0];

        const formData = new FormData();
        formData.append('image', imageFile)

        fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const product = {
                    name,
                    cetegory,
                    price,
                    discound,
                    description,
                    image: data.data?.display_url
                };
                postProduct(product)
            })
    }

    if (isSuccess) {
        toast.success('Product Successfully Added', { id: 'img' })
    }
    return (
        <div className='w-full md:w-2/3  mx-auto my-20 p-5 bg-white rounded'>
            <h1 className='text-center text-3xl font-semibold text-[#008000] mb-10'>Add Product Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex'>
                    <div className='my-2 w-full mr-2'>
                        <label className='font-semibold'>Select Cetegory</label>
                        <select defaultValue="watch" className='w-full border-2 p-2 my-2 rounded' {...register("cetegory")}>
                            <option value='watch'>Watch</option>
                            <option value='bag'>Bag</option>
                            <option value='sunglass'>Sunglass</option>
                        </select>
                    </div>
                    <div className='my-2 w-full ml-2'>
                        <label className='font-semibold'>Product Name</label>
                        <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("name")} placeholder='Product Name' required />
                    </div>
                </div>
                <div className='flex'>
                    <div className='my-2 w-full mr-2'>
                        <label className='font-semibold'>Product Price</label>
                        <input type='number' className='w-full border-2 p-2 my-2 rounded' {...register("price")} placeholder='Product Price' required />
                    </div>
                    <div className='my-2 w-full ml-2'>
                        <label className='font-semibold'>Discound % Price</label>
                        <input type='number' className='w-full border-2 p-2 my-2 rounded' {...register("discound")} placeholder='Discound % Price' required />
                    </div>
                </div>
                <div className='flex'>
                    <div className='my-2 w-full mr-2'>
                        <label className='font-semibold'>Product Description</label>
                        <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("description")} placeholder='Product Description' required />
                    </div>
                    <div className='my-2 w-full ml-2'>
                        <label className='font-semibold'>Product Image</label>
                        <input type='file' className='w-full border-2 p-2 my-2 rounded' {...register("image")} placeholder='Product Image' required />
                    </div>
                </div>
                <div>
                    <button className='w-full py-2 block mx-auto text-center transition duration-500 hover:bg-[#333533] bg-[#008000] text-white rounded font-semibold text-lg my-3' type='submit'>Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;