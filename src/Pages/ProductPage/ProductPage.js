import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import ProductCard from '../../Components/ProductCard/ProductCard';

const ProductPage = () => {


    const { data: products = [], isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/products")
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='container mx-auto px-3 lg:py-20 py-10'>
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
                    products.map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductPage;