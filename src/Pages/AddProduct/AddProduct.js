import React from 'react';
import { useForm } from 'react-hook-form';
import { useAddProductMutation } from '../../app/features/products/productApi';
import { toast } from 'react-hot-toast';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [postProduct, { isSuccess }] = useAddProductMutation();

    const imgbbKey = process.env.REACT_APP_IMGBB_KEY;

    const onSubmit = (data) => {
        const { image, price, discound, brand, model, ram, rom, color, processor, battery, fastCharging, system, screen, camera, touchScreen } = data;
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
                    image: data.data?.display_url
                };
                postProduct(product)
            })
    }

    if (isSuccess) {
        toast.success('Product Successfully Added', { id: 'img' })
    }
    return (
        <div className='w-full md:w-2/3 absolute z-10 top-0 left-0 right-0  mx-auto my-20 p-5 bg-white rounded'>
            <h1 className='text-center text-3xl font-semibold text-[#008000] mb-10'>Add Product Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Select Brand</label>
                        <select className='w-full border-2 p-2 my-2 rounded' defaultValue="iphone" {...register("brand")} placeholder='Select Brand'>
                            <option value='iphone'>iPhone</option>
                            <option value='Vivo'>Vivo</option>
                            <option value='Oppo'>Oppo</option>
                            <option value='samsung'>Samsung</option>
                            <option value='Xiaomi'>Xiaomi</option>
                            <option value='Huawei'>Huawei</option>
                        </select>
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Model</label>
                        <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("model")} placeholder='Model' required />
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>RAM</label>
                        <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("ram")} placeholder='RAM' required />
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>ROM</label>
                        <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("rom")} placeholder='ROM' required />
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Color</label>
                        <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("color")} placeholder='Color' required />
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Processor</label>
                        <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("processor")} placeholder='Processor' required />
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Battery</label>
                        <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("battery")} placeholder='Battery' required />
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Fast Charging</label>
                        <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("fastCharging")} placeholder='Fast Charging' required />
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Operating System</label>
                        <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("system")} placeholder='Operating System' required />
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Screen</label>
                        <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("screen")} placeholder='Screen' required />
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Camera</label>
                        <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("camera")} placeholder='Camera' required />
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Touch Screen</label>
                        <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("touchScreen")} placeholder='Touch Screen' required />
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Price</label>
                        <input type='number' className='w-full border-2 p-2 my-2 rounded' {...register("price")} placeholder='Price' required />
                    </div>
                    <div className='my-2 w-full'>
                        <label className='font-semibold'>Discound % Price</label>
                        <input type='number' className='w-full border-2 p-2 my-2 rounded' {...register("discound")} placeholder='Discound % Price' required />
                    </div>
                    <div className='my-2 w-full'>
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