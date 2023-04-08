import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import ProductCard from '../../Components/ProductCard/ProductCard';
import useTitle from '../../hooks/useTitle';


const CategoryOfProducts = () => {

    const products = useLoaderData()
    const navigation = useNavigation()

    useTitle("category-of-products")

    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }


    return (
        <div>
            <div className='container mx-auto px-3 lg:py-20 py-10'>
                <div className="flex justify-center items-center mb-10">
                    <div className="text-center">
                        <h2 className="lg:text-5xl text-3xl lg:font-semibold font-bold text-gray-700">Category of products</h2>
                        <div className="text-center flex justify-center items-center">
                            <img src="https://i.ibb.co/bK0cyZm/devider-160x36.png" alt="" />
                        </div>
                        <p className="text-gray-700">Below are some of our category of products.</p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
                    {
                        products.slice(0, 8).map(product => <ProductCard key={product._id} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryOfProducts;