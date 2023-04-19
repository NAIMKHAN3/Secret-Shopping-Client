import React from 'react';

import { CiFacebook } from 'react-icons/ci'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { AiFillYoutube } from 'react-icons/ai'
import { MdOutlineLocationOn, MdOutlinePhoneInTalk, MdOutlineMail } from 'react-icons/md'

const Footer = () => {
    return (
        <div className='bg-[#333533] p-5' data-aos="fade-up" data-aos-duration="1000">
            <div className='max-w-[80%] my-10 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-9 gap-5'>
                    <div className='col-span-3'>
                        <h1 className=' text-white text-xl font-semibold'>SECURE <span className='text-[#008000]'>SHOP</span></h1>
                        <p className='text-white my-5 font-semibold'>Secure Shop started life as a business lines and calls provider in Birmingham City Centre, we moved our offices to Halesowen in 2012. We expanded over the following years to cover all forms of business communications and gained customers from all over the UK.</p>
                        <div className='flex my-5'>
                            <span className='text-[#0ebd0e] text-6xl mr-3'><CiFacebook /></span>
                            <span className='text-[#0ebd0e] text-6xl mr-3'><TiSocialTwitterCircular /></span>
                            <span className='text-[#0ebd0e] text-6xl mr-3'><AiFillYoutube /></span>
                        </div>
                    </div>
                    <div className='col-span-2 text-white'>
                        <h1 className='text-3xl font-semibold text-[#0ebd0e]'>Services</h1>
                        <h5 className='font-semibold mt-10'>Telephone Systems</h5>
                        <h5 className='font-semibold mt-3'>Lines & Calls</h5>
                        <h5 className='font-semibold mt-3'>Internet</h5>
                        <h5 className='font-semibold mt-3'>Mobile & 4G</h5>
                        <h5 className='font-semibold mt-3'>Cabling</h5>
                        <h5 className='font-semibold mt-3'>Wifi</h5>
                        <h5 className='font-semibold mt-3'>Hosted Telephony System</h5>

                    </div>
                    <div className='col-span-2 text-white'>
                        <h1 className='text-3xl font-semibold text-[#0ebd0e]'>Useful Links
                        </h1>
                        <h5 className='font-semibold mt-10'>Our Brochure</h5>
                        <h5 className='font-semibold mt-3'>Order Form</h5>
                        <h5 className='font-semibold mt-3'>Finance Calculator</h5>
                        <h5 className='font-semibold mt-3'>Blog</h5>
                    </div>
                    <div className='col-span-2 text-white mx-auto'>
                        <h1 className='text-3xl font-semibold text-[#0ebd0e]'>Contact Us
                        </h1>
                        <div className='mt-10 flex'>
                            <span className=' '><MdOutlineLocationOn className='text-4xl bg-[#008000] p-2 rounded-full mr-3' /></span>
                            <h1 className='font-semibold'>Secure Shop Group Ltd,<br /> Commercial House, 21a Stone Street,<br /> Dudley, West Midlands, DY1 1NJ</h1>
                        </div>

                        <div className='mt-5 flex'>
                            <span className=' '><MdOutlinePhoneInTalk className='text-4xl bg-[#008000] p-2 rounded-full mr-3' /></span>
                            <h1 className='font-semibold'>0800 849 8585</h1>
                        </div>
                        <div className='mt-5 flex'>
                            <span className=' '><MdOutlineMail className='text-4xl bg-[#008000] p-2 rounded-full mr-3' /></span>
                            <h1 className='font-semibold'>hello@secureshop.com</h1>
                        </div>
                    </div>
                </div>
                <hr className='border-t-2 border-white my-10' />
                <h1 className='font-semibold text-center my-3 text-[#0ebd0e]'>© 2023 Secure Shop Group Holdings Ltd. All Rights Reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;