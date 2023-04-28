import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
    const popularCollection = [
        {
            img: "https://i.ibb.co/M59Vkks/apple-iphone-14-3.jpg",
            model: "iphone 14",
            discoundPrice: "121249",
            price: '124999'
        },
        {
            img: "https://i.ibb.co/CVh5nz4/045c383e2ef66c74e31733376c49a242.png",
            model: "Vivo Y33",
            price: "24499",
            discoundPrice: "24999"
        },
        {
            img: "https://i.ibb.co/xfGGMRW/Oppo-Reno-6-image.jpg",
            model: "OPPO Reno6",
            price: "33990",
            discoundPrice: "33310"
        },
        {
            img: "https://i.ibb.co/mbLy1mG/Samsung-Galaxy-S23-Ultra.jpg",
            model: "Galaxy S23 Ultra",
            price: "198990",
            discoundPrice: "195010"
        },

    ]
    return (
        <div className='p-3'>
            <h1 className='text-[#008000] text-4xl text-center font-semibold'>SPECIAL DISCOUND</h1>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper max-w-5xl md:w-[900px] my-10 p-20"
            >
                {
                    popularCollection.map(collection => <SwiperSlide><div className='flex justify-center items-center bg-white rounded-md p-3 md:p-20'>
                        <div className='md:mx-3'>
                            <h1 className='text-3xl font-bold text-[#008000]'> Model: {collection.model}</h1>
                            <h1 className='text-xl font-semibold'>Price: <span className='font-bold'>{collection.discoundPrice}</span></h1>
                            <h1 className='text-xl font-semibold'>Original Price: <span className='line-through'>{collection.price}</span></h1>
                        </div>
                        <img className='w-72 h-72' src={collection.img} alt="" />
                    </div></SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Carousel;