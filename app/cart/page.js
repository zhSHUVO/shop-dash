/* eslint-disable @next/next/no-img-element */
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const CartPage = () => {
    const { data, status } = useSession();
    const router = useRouter();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(storedCart);
    }, []);

    const handleOrder = async () => {
        if (!data?.user?.phone) {
            toast.error("Login before placing an order");
            router.push("/user/login");
            return;
        }

        try {
            const orderData = {
                items: cartItems,
                phoneNumber: data?.user?.phone,
            };

            const response = await fetch(
                "https://shop-dash.onrender.com/api/orders",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(orderData),
                }
            );

            if (response.ok) {
                router.replace("/");
                toast.success("Order successful");
            } else {
                toast.error("Order failed");
            }
        } catch (error) {
            toast.error("There is an error!");
        }
    };

    return (
        <div className="pt-24 min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl text-center my-10">Cart Items</h1>

                <div className="overflow-x-auto flex justify-center ">
                    <table className="table  lg:table-fixed text-center lg:w-[70%]">
                        <thead>
                            <tr className="hover">
                                <th className="hidden-column">Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((product) => (
                                <tr className="hover" key={product?._id}>
                                    <td className="hidden-column">
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
                    <button onClick={handleOrder} className="btn btn-neutral">
                        Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
