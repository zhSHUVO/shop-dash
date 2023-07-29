"use client";

import { useEffect, useState } from "react";
import HomeHero from "./components/HomeHero";
import Product from "./product/page";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const callProduct = async () => {
            const res = await fetch(
                "https://shop-dash.onrender.com/api/products",
                {
                    cache: "force-cache",
                }
            );
            const allProducts = await res.json();
            setProducts(allProducts);
        };
        callProduct();
    }, []);

    return (
        <div>
            <HomeHero />
            <h1 className="text-4xl text-center my-10">All products</h1>
            <div className="col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 w-[80%] mx-auto">
                {products.map((product) => (
                    <Product key={product?._id} product={product}></Product>
                ))}
            </div>
        </div>
    );
};

export default Home;
