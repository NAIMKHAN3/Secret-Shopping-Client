import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-3 md:grid grid-cols-2 flex flex-col-reverse max-w-6xl mx-auto my-10' data-aos="fade-up" data-aos-duration="1000">
            <div className='flex justify-center items-center'>
                <div>
                    <h1 className='text-xl md:text-4xl font-bold my-10'>IPHONE 14 PRO MAX is here</h1>
                    <h1 className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum perferendis corrupti, repudiandae perspiciatis nulla similique iste a quidem mollitia aliquam dolor quia consequuntur praesentium facere labore eos molestias nam suscipit enim, laboriosam eaque ipsam? Dignissimos deleniti iure quis mollitia aperiam eaque, dolore asperiores molestiae porro est, ut, deserunt veniam!</h1>
                    <Link to='/all-products'><button className='my-10 font-bold text-xl bg-[#008000] text-white py-2 px-10 rounded mr-3 flex justify-center items-center'>GET STARTED</button></Link>
                </div>
            </div>
            <div className='mx-auto'>
                <img className='w-full md:w-96' src="https://i.ibb.co/zhT962d/out-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

export default Header;