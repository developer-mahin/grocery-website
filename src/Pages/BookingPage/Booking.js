import React, { useContext } from 'react';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Booking = () => {

    const { user } = useContext(AUTH_CONTEXT)
    const product = useLoaderData()
    useTitle(product.title)

    const productBackGround = {
        backgroundImage: `linear-gradient(#00000080, #00000080), url(${product.image})`,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }

    return (
        <div className=''>
            <div style={productBackGround} className="flex justify-center items-center lg:py-52 py-16">
                <div className="text-center">
                    <h2 className="lg:text-5xl text-3xl lg:font-semibold font-bold text-white">{product.title}</h2>
                    <div className="text-center flex justify-center items-center">
                        <img src="https://i.ibb.co/bK0cyZm/devider-160x36.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='lg:w-[900px] w-full mx-auto px-3 lg:mb-20 mb-10'>
                <div className="text-center lg:my-20 my-10 ">
                    <h2 className="lg:text-5xl text-gray-700 text-3xl lg:font-semibold font-bold">Booking Details</h2>
                    <div className="text-center flex justify-center items-center">
                        <img src="https://i.ibb.co/bK0cyZm/devider-160x36.png" alt="" />
                    </div>
                    <p className="text-gray-700">Below add your products details</p>
                </div>

                <div className='border p-4 rounded-lg shadow'>
                    <form>
                        <div className='py-2'>
                            <label className='font-medium text-gray-700 block mb-1'>Product name</label>
                            <input
                                className='w-full px-4 py-2 rounded border border-green-300 focus:outline-green-500'
                                type="text"
                                name='product_name'
                                required
                                defaultValue={product.title}
                                readOnly
                            />
                        </div>
                        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-6'>
                            <div className='py-2'>
                                <label className='font-medium text-gray-700 block mb-1'>Your name</label>
                                <input
                                    className='w-full px-4 py-2 rounded border border-green-300 focus:outline-green-500'
                                    type="text"
                                    name='name'
                                    required
                                    placeholder={user?.displayName ? user?.displayName : "Your name"}
                                />
                            </div>
                            <div className='py-2'>
                                <label className='font-medium text-gray-700 block mb-1'>Your email</label>
                                <input
                                    className='w-full px-4 py-2 rounded border border-green-300 focus:outline-green-500'
                                    type="email"
                                    name='email'
                                    required
                                    placeholder={user?.email ? user?.email : "Your email"}
                                />
                            </div>
                        </div>



                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6'>
                            <div className='py-2'>
                                <label className='font-medium text-gray-700 block mb-1'>Your City</label>
                                <input
                                    className='w-full px-4 py-2 rounded border border-green-300 focus:outline-green-500'
                                    type="text"
                                    name='city'
                                    required
                                    placeholder="Your city"
                                />
                            </div>
                            <div className='py-2'>
                                <label className='font-medium text-gray-700 block mb-1'>Your Hometown</label>
                                <input
                                    className='w-full px-4 py-2 rounded border border-green-300 focus:outline-green-500'
                                    type="text"
                                    name='hometown'
                                    required
                                    placeholder="Your Hometown"
                                />
                            </div>
                            <div className='py-2'>
                                <label className='font-medium text-gray-700 block mb-1'>Your Zipcode</label>
                                <input
                                    className='w-full px-4 py-2 rounded border border-green-300 focus:outline-green-500'
                                    type="number"
                                    name='zipcode'
                                    required
                                    placeholder="Your Zipcode"
                                />
                            </div>
                        </div>
                        <button className='px-8 py-2 rounded-full border-2 border-green-500 hover:bg-green-500 font-semibold duration-300 mt-4'>
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;