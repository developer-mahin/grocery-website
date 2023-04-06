import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';


const Banner = () => {

    const sliderImage = [
        { id: 1, image: "https://i.ibb.co/qBtXjJf/slider-2-min.png" },
        { id: 2, image: "https://i.ibb.co/SVd3qDM/slider-1-min.png" },
        { id: 3, image: "https://i.ibb.co/34dzNR4/hungryroot-1658507018.png" },
        { id: 4, image: "https://i.ibb.co/8PZY5BV/Save-Money-On-Groceries-UBC-Food-Services.jpg" },
    ]


    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    sliderImage.map(img => <>
                        <SwiperSlide>
                            <div className='relative'>
                                <img className='w-full lg:h-[600px] md:h-[400px] h-[200px]' src={img.image} alt="" />

                                <div className='grid grid-cols-2 container mx-auto absolute lg:top-[10px] md:top-[100px] top-[25px] md:left-[100px] left-[65px]'>
                                    <div className='flex justify-center items-center'>
                                        <div className='lg:mt-[200px]'>
                                            <h2 className='lg:text-[40px] md:text-2xl text-lg md:font-semibold font-bold text-gray-700 lg:leading-[40px]'>Stay home & get your daily
                                                needs from our shop</h2>
                                            <p className='lg:mt-4 md:mt-3 mt-1 text-gray-700 md:text-base text-xs md:font-normal font-semibold'>Start Your Daily Shopping with <span className='text-[#29a56c]'>Nest Mart</span></p>
                                            <div className='md:py-5 py-2 flex items-center'>
                                                <input
                                                    className='lg:py-3 py-2 lg:px-4 px-3 rounded-full lg:w-[350px] focus:outline-none md:text-base text-sm'
                                                    placeholder='Your email address'
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    required
                                                />
                                                <button className='bg-[#29a56c] lg:py-3 py-2 lg:px-4 px-3 rounded-full text-white lg:-ml-[50px] -ml-[30px] md:text-base text-sm'>Subscribe</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </>)
                }


                {/* <SwiperSlide>
                    <img
                        className='w-full lg:h-[600px] md:h-[400px] h-[200px]'
                        src="https://i.ibb.co/SVd3qDM/slider-1-min.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='w-full lg:h-[600px] md:h-[400px] h-[200px]'
                        src="https://i.ibb.co/34dzNR4/hungryroot-1658507018.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='w-full lg:h-[600px] md:h-[400px] h-[200px]'
                        src="https://i.ibb.co/8PZY5BV/Save-Money-On-Groceries-UBC-Food-Services.jpg" alt="" />
                </SwiperSlide> */}
            </Swiper>
        </>
    );
};

export default Banner;