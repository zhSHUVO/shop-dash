/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

const OrderDashboard = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            const res = await fetch(
                "https://shop-dash.onrender.com/api/orders",
                {
                    cache: "force-cache",
                }
            );
            const allOrders = await res.json();
            setOrders(allOrders);
        };
        fetchOrders();
    }, []);

    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col lg:flex-row items-center justify-evenly w-full pb-5">
                    <h1>Total orders {orders.length}</h1>
                </div>

                <div className="overflow-x-auto flex justify-center ">
                    <table className="table table-fixed text-center  lg:w-[70%]">
                        <thead>
                            <tr className="hover">
                                <th>User Phone Number</th>
                                <th>Order Items</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr className="hover" key={order._id}>
                                    <td>{order.phoneNumber}</td>
                                    <td className="flex justify-center">
                                        <ul className="text-left">
                                            {order.items.map((item) => (
                                                <li
                                                    className="py-2"
                                                    key={item._id}
                                                >
                                                    - {item.name} - $
                                                    {item.price} x
                                                    {item.quantity}
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderDashboard;
