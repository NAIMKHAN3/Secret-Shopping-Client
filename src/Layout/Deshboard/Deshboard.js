import React from 'react';
import { Outlet } from 'react-router-dom';
import Slider from './Slider';

const Deshboard = () => {
    return (
        <div>
            <div className='grid grid-cols-12 p-3 gap-3  mx-auto'>
                <Slider />
                <div className='col-span-10 w-full bg-gray-100 rounded-lg'>
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default Deshboard;