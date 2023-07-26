import Link from "next/link";

const SideBar = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center pt-10">
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-ghost drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 h-fit bg-base-200 text-base-content">
                        <li>
                            <Link href="/customers">Customers</Link>
                        </li>
                        <li>
                            <Link href="/products">Products</Link>
                        </li>
                        <li>
                            <Link href="/orders">Orders</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
