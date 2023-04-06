import React from 'react';
import Banner from './Banner';
import Subscription from './Subscription';
import Testimonial from './Testimonial';
import Category from './Category';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Products/>
            <Testimonial/>
            <Subscription/>
        </div>
    );
};

export default Home;