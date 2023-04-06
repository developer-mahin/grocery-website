import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import { AiFillStar } from "react-icons/ai"


const testimonialInfo = [
    {
        id: 1, name: "Sarlman Khan", description: "Royal jelly is an absolute healer.It worked amazing on my skin, my skin looks so much better since I started applying it to my face.Yes, I do eat it almost every day.", image: "https://i2.cinestaan.com/image-bank/1500-1500/185001-186000/185363.jpg"
    },
    {
        id: 2, name: "Sahrukh Khan", description: "I was told local honey is the best honey for allergies, I started buying your honey from Trader Joe’s and since then I am addicted to it, love the taste how mild it is, Thank you for your great product", image: "https://i.ibb.co/DtfTkz4/profile-1.jpg"
    },
    {
        id: 3, name: "Johnny Depp", description: "Thank you for introducing me to your bee pollen and honey, I used to have severe allergies and ever since I started using your product my allergies are all gone. thank you.", image: "https://i.ibb.co/ctDM4Bq/profile.webp"
    },
    {
        id: 4, name: "Leonardo DiCaprio", description: "For the past three years, I’ve been going back and forth to LA and always stopping by the Brentwood Market to find you your honey. Specifically, Sage Blossom. Thank you! ", image: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTq4nMdSr28wTcwFeH9dEgPOM6UwTj6AmDHqCden9gdBR9ysAU9nhjgD1xCod9GJp8YcFRsQYtkoBt8FIxxCUDGfwYiawX_hAQsz6krhhvQ"
    },
    {
        id: 5, name: "Takbir hassan", description: "Thank you for introducing me to your bee pollen and honey, I used to have severe allergies and ever since I started using your product my allergies are all gone. thank you.", image: "https://i.ibb.co/4tFMXm7/about-img-08ad055befdb7985d1ff.png"
    },
]



const Testimonial = () => {
    return (
        <div className='container mx-auto px-3 lg:py-20 py-10'>
            <div className="flex justify-center items-center mb-10">
                <div className="text-center">
                    <h2 className="lg:text-6xl text-3xl lg:font-semibold font-bold text-gray-700">Testimonial</h2>
                    <div className="text-center flex justify-center items-center"> 
                        <img src="https://i.ibb.co/bK0cyZm/devider-160x36.png" alt="" />
                    </div>
                    <p className="text-gray-700">What people are saying about Isabell's Honey Farm.</p>
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >

                <>
                    {
                        testimonialInfo.map(info => <SwiperSlide key={info.id}>
                            <div className="border rounded p-3 shadow hover:shadow-lg duration-300 mb-10">
                                <div className="flex justify-center items-center">
                                    <div>
                                        <img src={info.image} className="w-32 h-32 object-cover rounded-full" alt="" />
                                        <div className="flex items-center justify-center mt-3">
                                            <AiFillStar className="text-yellow-500" />
                                            <AiFillStar className="text-yellow-500" />
                                            <AiFillStar className="text-yellow-500" />
                                            <AiFillStar className="text-yellow-500" />
                                            <AiFillStar className="text-yellow-500" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center my-3">
                                    <p className="text-gray-600">
                                        {info.description}
                                    </p>
                                    <h4 className="text-black font-semibold mt-3">{info.name}</h4>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </>


            </Swiper>
        </div >
    );
};



export default Testimonial;