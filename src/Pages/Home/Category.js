import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';

const Category = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch("https://grocery-server.vercel.app/categories")
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div data-aos="zoom-in" className='container mx-auto px-3 lg:pt-20 pt-10'>
            <div className="flex justify-center items-center mb-10">
                <div className="text-center">
                    <h2 className="lg:text-5xl text-3xl lg:font-semibold font-bold text-gray-700"> Featured Categories</h2>
                    <div className="text-center flex justify-center items-center">
                        <img src="https://i.ibb.co/bK0cyZm/devider-160x36.png" alt="" />
                    </div>
                    <p className="text-gray-700">Below are some of our Categories products.</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-9 md:grid-cols-6 grid-cols-3 gap-4'>
                {
                    categories.map(category => <Link data-aos="zoom-in" to={`/category/${category._id}`} key={category._id} className='p-2 border rounded bg-[#ECFFEC] hover:border-green-400 duration-200 cursor-pointer'>
                        <img src={category.category_img} alt="" />
                        <h4 className='text-center font-semibold lg:text-base text-xs'>{category.category}</h4>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Category;