import React from 'react';
import Header from './Header';
import OurDealership from './OurDealership';
import Carousel from './Carousel';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Carousel />
            <OurDealership />
        </div>
    );
};

export default Home;