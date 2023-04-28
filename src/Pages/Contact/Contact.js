import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto mb-10 mt-[50px] pt-10" data-aos="fade-up" data-aos-duration="1000">
            <h1 className=' text-center text-[#008000] font-semibold text-4xl tracking-widest'>CONTACT US</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap- shadow-2xl p-5 my-10 rounded-lg m-3'>
                <div className='p-3 '>
                    <img className='h-full w-full bg-[#e4605e] rounded-lg' src="https://img.freepik.com/free-vector/hand-drawn-contact-information-background-template_23-2148189661.jpg" alt="" />
                </div>
                <div className='p-3'>
                    <form action="https://formsubmit.co/417feebcad4a5b1b427b4b768f153576" method="POST">
                        <div className=" w-full">

                            <span className="text-[#008000] font-semibold my-3">Your Name</span>

                            <input type="text" name='name' placeholder="Type Your Name" className="border-2  rounded-lg w-full my-3 p-3" required />
                        </div>
                        <div className="form-control w-full">

                            <span className="text-[#008000] font-semibold">Your Email</span>

                            <input type="email" name='email' placeholder="Type Your Email" className="my-3 p-3  border-2 rounded-lg w-full" required />
                        </div>
                        <div className="">

                            <span className="text-[#008000] font-semibold">Your Message</span>

                            <textarea type="text" className="border-2 my-3 p-3 h-24 w-full" name='message' placeholder="Type Your Message" required></textarea>
                        </div>
                        <button className='btn bg-[#008000] my-5 w-full mx-auto py-2 px-5 text-white rounded-lg' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;