import React, { useRef, useState } from 'react';
import { BsPhone } from 'react-icons/bs';
import { ImLocation } from "react-icons/im"
import { MdMarkEmailRead } from "react-icons/md"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';


const Contact = () => {

    const form = useRef();
    const [loading, setLoading] = useState(false)

    const handleSubmitMessage = (e) => {
        setLoading(true)
        e.preventDefault();
        emailjs.sendForm(
            'service_7p2bh3q',
            'template_p3cbhw8',
            form.current,
            '-uwk-Nl_HU1-NHuk2')
            .then((result) => {
                toast.success("successfully message send")
                setLoading(false)
            }, (error) => {
                toast.error(error.message)
                setLoading(false)
            });
    }




    return (
        <div data-aos="zoom-in" className='container mx-auto px-3 lg:pb-20 pb-10'>
            <div className="flex justify-center items-center mb-10">
                <div className="text-center">
                    <h2 className="lg:text-5xl text-3xl lg:font-semibold font-bold text-gray-700">Contact</h2>
                    <div className="text-center flex justify-center items-center">
                        <img src="https://i.ibb.co/bK0cyZm/devider-160x36.png" alt="" />
                    </div>
                    <p className="text-gray-700">Get in touch</p>
                </div>
            </div>
            <div className='lg:flex items-center justify-between gap-6'>
                <div>
                    <div className='flex items-center gap-2 lg:my-4 my-2'>
                        <BsPhone className='text-3xl text-green-600' />
                        <div>
                            <h5 className='font-semibold text-gray-700 lg:text-lg text-base'>+8801660-136878</h5>
                            <p className='lg:text-sm text-xs font-medium'>Our Phone Number</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 lg:my-4 my-2'>
                        <ImLocation className='text-3xl text-green-600' />
                        <div>
                            <h5 className='font-semibold text-gray-700 lg:text-lg text-base'>Block # C, House # 2, 1 রোড-2, Dhaka 1216</h5>
                            <p className='lg:text-sm text-xs font-medium'>Our Location</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 lg:my-4 my-2'>
                        <MdMarkEmailRead className='text-3xl text-green-600' />
                        <div>
                            <h5 className='font-semibold text-gray-700 lg:text-lg text-base'>weerodigital@gmail.com</h5>
                            <p className='lg:text-sm text-xs font-medium'>Our Email Address</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3 pt-4'>
                        <a
                            href="https://www.facebook.com/"
                            target='blank'
                            className='text-green-600 hover:text-white duration-300 hover:-translate-y-[6px] p-2 rounded-full bg-green-100 hover:bg-green-500 ' > <FaFacebookF className='text-xl' />
                        </a>
                        <a
                            href="https://twitter.com/"
                            target='blank'
                            className='text-green-600 hover:text-white duration-300 hover:-translate-y-[6px] p-2 rounded-full bg-green-100 hover:bg-green-500 ' > <AiOutlineTwitter className='text-xl' />
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target='blank'
                            className='text-green-600 hover:text-white duration-300 hover:-translate-y-[6px] p-2 rounded-full bg-green-100 hover:bg-green-500 ' > <FaLinkedinIn className='text-xl' />
                        </a>
                        <a
                            href="https://www.youtube.com/"
                            target='blank'
                            className='text-green-600 hover:text-white duration-300 hover:-translate-y-[6px] p-2 rounded-full bg-green-100 hover:bg-green-500 ' > <AiFillYoutube className='text-xl' />
                        </a>
                        <a
                            href="https://www.instagram.com/?hl=en"
                            target='blank'
                            className='text-green-600 hover:text-white duration-300 hover:-translate-y-[6px] p-2 rounded-full bg-green-100 hover:bg-green-500 ' > <AiOutlineInstagram className='text-xl' />
                        </a>
                    </div>

                </div>

                <form ref={form} onSubmit={handleSubmitMessage} className='flex-1'>
                    <div className='my-3'>
                        <input type="text" name="user_name" className='w-full px-4 py-2 rounded focus:outline-green-500 border border-green-300' placeholder='Enter your name' id="" required />
                    </div>
                    <div className='my-3'>
                        <input type="email" name="user_email" className='w-full px-4 py-2 rounded focus:outline-green-500 border border-green-300' placeholder='Enter email address' id="" required />
                    </div>
                    <div className='my-3'>
                        <textarea name="" id="message" cols="30" className='w-full px-4 py-2 rounded focus:outline-green-500 border border-green-300' placeholder='Message...' required rows="6"></textarea>
                    </div>
                    <button type='submit' className='px-6 py-2 border-2 border-green-500 hover:bg-green-500 duration-500 rounded-full font-semibold'>
                        {loading ? "Loading..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;