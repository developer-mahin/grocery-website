import React from 'react';
import Banner from './Banner';
import Subscription from './Subscription';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Testimonial/>
            <Subscription/>
        </div>
    );
};

export default Home;