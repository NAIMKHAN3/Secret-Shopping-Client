import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Slider from './Slider';
import { ImCross } from 'react-icons/im'
import { AiOutlineMenu } from 'react-icons/ai'

const Deshboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen(value => !value)
    }
    return (
        <div>
            <div className='lg:hidden'>
                {
                    isOpen ? <span className='flex justify-start fixed top-2  z-30 items-center w-[84px] mt-3 ml-6 bg-[#333533] text-white px-2 py-1 cursor-pointer rounded hover:bg-[#008000]' onClick={toggleIsOpen}> <span><ImCross className='text-xs  mr-1' /></span> Menu</span> :
                        <div className='bg-neutral-200 w-full'><p className='flex w-[84px] mt-3 ml-3 fixed top-2  z-30 justify-start items-center bg-[#333533] text-white px-2 py-1 rounded hover:bg-[#008000] cursor-pointer' onClick={toggleIsOpen}><span><AiOutlineMenu className='text-xs mr-1' /></span> Menu</p></div>
                }
            </div>
            <div className='grid grid-cols-12 p-3 gap-3  mx-auto'>
                <Slider isOpen={isOpen} />
                <div className='col-span-12 lg:col-span-10 w-full bg-gray-100 rounded-lg'>
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default Deshboard;