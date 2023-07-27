const AdminDashboard = async () => {
    const productRes = await fetch(
        "https://shop-dash.onrender.com/api/products",
        {
            cache: "force-cache",
        }
    );
    const products = await productRes.json();

    const userRes = await fetch(
        "https://shop-dash.onrender.com/api/auth/user",
        {
            cache: "force-cache",
        }
    );
    const users = await userRes.json();

    // const products = data?.products;

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
                        <div className="stat-value">89,400</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
