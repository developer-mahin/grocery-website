import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Spinner from '../../Components/Spinner/Spinner';

const Products = () => {
    const navigate = useNavigate()

    const { data: products = [], isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch("https://grocery-server.vercel.app/products")
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }



    const handleNavigate = () => {
        navigate("/products")
    }


    return (
        <div className='container mx-auto px-3 lg:pt-20 pt-10'>
            <div className="flex justify-center items-center mb-10">
                <div className="text-center">
                    <h2 className="lg:text-5xl text-3xl lg:font-semibold font-bold text-gray-700">Products</h2>
                    <div className="text-center flex justify-center items-center">
                        <img src="https://i.ibb.co/bK0cyZm/devider-160x36.png" alt="" />
                    </div>
                    <p className="text-gray-700">Below are some of our products.</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    products.slice(0, 8).map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>
            <div className='pt-10 flex items-center justify-center'>
                <button
                    onClick={handleNavigate}
                    className='flex items-center gap-1 px-4 py-2 bg-green-100 font-semibold rounded shadow text-green-500 hover:translate-x-3 duration-500'>
                    <span>See More</span>
                    <BsArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Products;