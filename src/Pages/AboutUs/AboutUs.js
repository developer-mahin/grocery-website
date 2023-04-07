import React from 'react';
import Lottie from "lottie-react";
import aboutUs from "../../Assets/about.json"

const AboutUs = () => {
    return (
        <div className='container mx-auto px-3 lg:py-20 py-10'>
            <div className="flex justify-center items-center mb-10">
                <div className="text-center">
                    <h2 className="lg:text-5xl text-3xl lg:font-semibold font-bold text-gray-700">About Us</h2>
                    <div className="text-center flex justify-center items-center">
                        <img src="https://i.ibb.co/bK0cyZm/devider-160x36.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 justify-items-center mb-6'>
                <div>
                    <h1 className='lg:text-6xl text-3xl font-semibold'>Weero Digital</h1>
                    <span className='block my-2'>For One-Stop Solution Since 2008</span>
                    <p className='my-3 lg:text-lg text-base'>Weero Digital is a full-service digital marketing company that focuses on driving results via effective and measurable solutions. We partner with our clients to develop their marketing plans, and set up winning strategies to generate and convert leads. From designing, developing and optimizing websites to increasing sales through tactical digital marketing activities, we work with our clients to raise their brand awareness, generate more sales opportunities and maximize their marketing budget ROI.</p>
                </div>

                <div>
                    <Lottie animationData={aboutUs}></Lottie>
                </div>
            </div>


            <iframe className='w-full lg:h-[450px] h-[300px] rounded-xl shadow hover:shadow-lg duration-300' src="https://www.google.com/maps/embed/v1/place?q=Weero+Digital,+রোড-2,+Dhaka,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" frameborder="0"></iframe>
        </div>
    );
};

export default AboutUs