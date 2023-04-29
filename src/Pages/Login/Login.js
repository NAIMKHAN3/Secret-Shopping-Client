import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { googleLogin, loginUser } from '../../app/features/auth/authSlice';
import { useRegisterUserMutation } from '../../app/features/user/userApi';

const Login = () => {
    const dispatch = useDispatch();
    const [registerUser, { data, isLoading, isSuccess }] = useRegisterUserMutation();
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();



    const onSubmit = async ({ email, password }) => {
        const { payload } = await dispatch(loginUser({ email, password }))
        if (payload) {
            registerUser({ email: payload })
        }
    };

    const handleGoogle = async () => {
        const { payload } = await dispatch(googleLogin())
        if (payload) {
            registerUser({ email: payload, role: "user" })
        }
    }



    if (isSuccess && data?.token) {
        localStorage.setItem('token', data?.token)
        navigate(from, { replace: true })
    }




    return (
        <div className='w-full md:w-1/3 mx-auto my-10 p-5 border rounded border-[#008000]' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='text-center text-3xl font-semibold text-[#008000] my-10'>Login User</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
            <h1 className='text-center font-semibold'>New to secure shop please <Link to='/register' className='text-[#07b900]'>register</Link></h1>
            <hr className='border-t-2 my-5' />
            <div className='flex justify-evenly items-center hover:border-[#333533] border border-[#07b900] rounded my-3 py-1 px-3 hover:bg-[#333533] hover:text-white transition duration-500'>
                <img className='w-12 h-12' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                <button onClick={handleGoogle} className='w-full text-center  font-semibold text-lg '>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;