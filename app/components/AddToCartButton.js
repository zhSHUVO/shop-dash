"use client";

import { useCart } from "@/context/CartContext";

const AddToCartButton = ({ product }) => {
    const { addToCart } = useCart();

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
