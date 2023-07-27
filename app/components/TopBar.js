import Link from "next/link";

const TopBar = () => {
    return (
        <div className="flex justify-center">
            <div className="tabs w-2/4 mb-7 flex justify-evenly">
                <Link className="tab" href="/users">
                    Users
                </Link>

                <Link className="tab" href="/products">
                    Products
                </Link>

                <Link className="tab" href="/orders">
                    Orders
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
