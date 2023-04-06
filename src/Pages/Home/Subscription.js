import React from 'react';

const Subscription = () => {

    const subscriptionBg = {
        backgroundImage: `url(${"https://i.ibb.co/VLphYZ2/banner-10-min-1.png"})`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "25px"
    }

    return (
        <div className='container mx-auto px-3 lg:py-20 py-10'>
            <div style={subscriptionBg} className='lg:p-20 md:p-10 p-5'>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div>
                        <h2 className='lg:text-[40px] text-2xl font-semibold text-gray-700 lg:leading-[40px]'>Stay home & get your daily
                            needs from our shop</h2>
                        <p className='mt-4 text-gray-700'>Start Your Daily Shopping with <span className='text-[#29a56c]'>Nest Mart</span></p>
                        <div className='py-5 flex items-center'>
                            <input
                                className='lg:py-3 py-2 lg:px-4 px-3 rounded-full lg:w-[350px] focus:outline-none'
                                placeholder='Your email address'
                                type="text"
                                name=""
                                id=""
                                required
                            />
                            <button className='bg-[#29a56c] lg:py-3 py-2 lg:px-4 px-3 rounded-full text-white lg:-ml-[50px] -ml-[30px]'>Subscribe</button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;