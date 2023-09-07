/* eslint-disable @next/next/no-img-element */
"use client";

import AddToCartButton from "@/app/components/AddToCartButton";
import { useEffect, useState } from "react";

const SingleProduct = ({ params }) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(
                `https://shop-dash.onrender.com/api/products/${params?.id}`,
                {
                    cache: "force-cache",
                }
            );
            const singleProduct = await res.json();
            setProduct(singleProduct);
        };
        fetchProduct();
    }, [params?.id]);

    return (
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto items-center lg:justify-around lg:w-[80%] min-h-screen">
            <div className="w-[70%] lg:w-[50%]">
                <img
                    className="m-5 mx-auto"
                    src={product?.img}
                    alt="product"
                    width={400}
                    height={400}
                />
            </div>
            <div className="w-[70%] lg:w-[50%] max-sm:text-center">
                <h1 className="text-3xl font-semibold">{product?.name}</h1>
                <p className="text-xl">
                    <span className="font-bold">Description: </span>
                    {product?.description}
                </p>
                <p className="text-xl">
                    <span className="font-bold">Price: </span> ${product?.price}
                </p>
                <AddToCartButton product={product} />
            </div>
        </div>
    );
};

export default SingleProduct;
