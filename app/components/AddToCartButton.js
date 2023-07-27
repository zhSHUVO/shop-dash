"use client";

import { addToCart } from "@/utils/cart";

const AddToCartButton = ({ product }) => {
    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <button onClick={handleAddToCart} className="btn btn-neutral mt-2">
            Add to cart
        </button>
    );
};

export default AddToCartButton;
