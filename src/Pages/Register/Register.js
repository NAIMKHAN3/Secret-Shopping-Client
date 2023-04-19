import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='w-full md:w-1/3  mx-auto my-10 p-5 border rounded border-[#008000]'>
            <h1 className='text-center text-3xl font-semibold text-[#008000] mb-10'>Register User</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='my-2'>
                    <label className='font-semibold'>Your Full Name</label>
                    <input type='text' className='w-full border-2 p-2 my-2 rounded' {...register("name")} placeholder='Type Your Name' required />
                </div>
                <div className='my-2'>
                    <label className='font-semibold'>Your Email</label>
                    <input type='email' className='w-full border-2 p-2 my-2 rounded' {...register("email")} placeholder='Type Your Email' required />
                </div>
                <div className='my-2'>
                    <label className='font-semibold'>Your Password</label>
                    <input type='password' className='w-full border-2 p-2 my-2 rounded' {...register("password")} placeholder='Type Your Password' required />
                </div>
                <div>
                    <button className='w-full text-center transition duration-500 hover:bg-[#333533] bg-[#008000] text-white rounded font-semibold text-lg my-3 py-3' type='submit'>Submit</button>
                </div>


            </form>
            <h1 className='text-center font-semibold'>Already have an account please <Link to='/login' className='text-[#07b900]'>log in</Link></h1>
            <hr className='border-t-2 my-5' />
            <div className='flex justify-evenly items-center hover:border-[#333533] border border-[#07b900] rounded my-3 py-1 px-3 hover:bg-[#333533] hover:text-white transition duration-500'>
                <img className='w-12 h-12' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                <button className='w-full text-center  font-semibold text-lg '>Continue With Google</button>
            </div>
        </div>
    );
};

export default Register;