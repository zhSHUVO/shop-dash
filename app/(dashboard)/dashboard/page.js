const AdminDashboard = async () => {
    const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store",
    });
    const data = await res.json();

    const products = data?.products;

    return (
        <div className="flex flex-col pl-10">
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Customers</div>
                    <div className="stat-value">89,400</div>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Products</div>
                    <div className="stat-value">{products.length}</div>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Orders</div>
                    <div className="stat-value">89,400</div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
