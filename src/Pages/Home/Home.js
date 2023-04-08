import React from 'react';
import Banner from './Banner';
import Subscription from './Subscription';
import Testimonial from './Testimonial';
import Category from './Category';
import Products from './Products';
import Contact from './Contact';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    
    useTitle("Home")

    return (
        <div>
            <Banner />
            <Category />
            <Products />
            <Testimonial />
            <Contact />
            <Subscription />
        </div>
    );
};

export default Home;