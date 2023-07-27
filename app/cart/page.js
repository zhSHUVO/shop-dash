"use client";

import { useEffect, useState } from "react";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(storedCart);
    }, []);

    return (
        <div>
            <h1 className="text-4xl text-center my-10">Cart Items</h1>

            <div className="pl-10">
                <div className="overflow-x-auto flex justify-center ">
                    <table className="table table-fit w-[50%]">
                        <thead>
                            <tr className="hover">
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((product) => (
                                <tr className="hover" key={product?._id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-10 h-10">
                                                <img
                                                    className="mx-auto"
                                                    src={product?.img}
                                                    alt="product"
                                                    width={280}
                                                    height={280}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{product?.name}</p>
                                    </td>

                                    <td>
                                        <p>${product?.price} </p>
                                    </td>
                                    <td>
                                        <p>{product?.quantity} </p>
                                    </td>
                                    <td>
                                        <p>
                                            $
                                            {product?.price * product?.quantity}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center p-10">
                    <button class="btn btn-neutral">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
