import React from 'react';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsStarHalf } from "react-icons/bs"

const ProductCard = ({ product }) => {

    const { title, image, ratings, price } = product;

    return (
        <div data-aos="zoom-in" className='border rounded shadow cursor-pointer hover:shadow-lg duration-300'>
            <div>
                <img className='w-full h-[250px] object-cover  rounded-t' src={image} alt="" />
            </div>
            <div className='p-4'>
                <h3 className='text-md font-bold'>{title}</h3>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center'>
                        <AiFillStar className='text-lg text-yellow-500' />
                        <AiFillStar className='text-lg text-yellow-500' />
                        <AiFillStar className='text-lg text-yellow-500' />
                        <AiFillStar className='text-lg text-yellow-500' />
                        <BsStarHalf className='text-sm text-yellow-500' />
                    </div>
                    <span className='font-semibold'>{ratings}</span>
                </div>
                <div className='py-2 flex items-center justify-between'>
                    <p className='font-semibold text-sm'>{price}</p>
                    <button className='flex items-center gap-1 bg-green-100 px-3 py-2 text-sm rounded-md font-semibold text-green-500 hover:-translate-y-2 duration-500'>
                        <AiOutlineShoppingCart />
                        <span className='text-xs'>Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;