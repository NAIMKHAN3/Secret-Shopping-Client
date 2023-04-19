import React, { useState } from 'react';
import { FaAlignJustify, FaUserPlus } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { FiLogIn } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen(value => !value)
    }
    const navItem = 'text-sm md:ml-4 text-white mb-1 hover:bg-[#008000] px-5 py-2 rounded-full cursor-pointer font-semibold transition duration-500'
    const item = <ul className='flex md:items-center flex-col lg:flex-row md:justify-center'>

        <li className={`${navItem}`}>Home</li>
        <li className={`${navItem}`}>About</li>
        <li className={`${navItem}`}>Services</li>
        <li className={`${navItem}`}>Downloads</li>
        <li className={`${navItem}`}>Training</li>
        <li className={`${navItem}`}>Billing</li>
        <li className={`${navItem}`}>Contact</li>


    </ul>
    return (
        <div>
            <div className='flex justify-end px-5 md:px-10 py-1'>
                <Link to="/login"><button className='font-bold text-sm bg-[#008000] text-white py-1 px-2 rounded mr-3 flex justify-center items-center'> <span className='text-sm mr-1 font-bold'><FiLogIn /></span> Login</button></Link>
                <Link to='/register'><button className='font-bold text-sm bg-[#008000] text-white py-1 px-2 rounded mr-3 flex justify-center items-center'> <span className='text-sm mr-1 font-bold'><FaUserPlus /></span> Register</button></Link>

            </div>
            <div className='py-4  w-full bg-[#333533] ' data-aos="fade-down" data-aos-duration="1000">
                <div className='flex justify-evenly items-center'>
                    <h1 className='hidden lg:block text-white text-xl font-semibold'>SECURE <span className='text-[#0ebd0e]'>SHOP</span></h1>
                    <div className='hidden lg:block'>

                        {
                            item
                        }
                    </div>
                </div>
                <div className='lg:hidden flex justify-between mx-5'>
                    <div> <h1 className=' text-white text-lg font-semibold'>SECURE <span className='text-[#0ebd0e]'>SHOP</span></h1></div>
                    {
                        isOpen ? <div><p className='flex justify-center items-center bg-[#008000] text-white px-2 py-1 cursor-pointer rounded' onClick={toggleIsOpen}> <span><ImCross className='text-xs  mr-1' /></span> Menu</p></div> :
                            <div><p className='flex justify-center items-center bg-white px-2 py-1 rounded cursor-pointer' onClick={toggleIsOpen}><span><AiOutlineMenu className='text-xs mr-1' /></span> Menu</p></div>
                    }


                </div>
                <div className='lg:hidden '>
                    {
                        isOpen && <div className=' rounded-md p-3'>
                            {
                                item
                            }
                        </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default Navbar;