"use client";

import { useEffect, useState } from "react";

const AdminDashboard = () => {
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

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch(
                "https://shop-dash.onrender.com/api/auth/user",
                {
                    cache: "force-cache",
                }
            );
            const allUsers = await res.json();
            setUsers(allUsers);
        };
        fetchUsers();
    }, []);

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
            <div className="flex flex-col lg:flex-row items-center text-center lg:justify-center p-10">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">Total Users</div>
                        <div className="stat-value">{users?.length}</div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">Total Products</div>
                        <div className="stat-value">{products?.length}</div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">Total Orders</div>
                        <div className="stat-value">{orders?.length}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
