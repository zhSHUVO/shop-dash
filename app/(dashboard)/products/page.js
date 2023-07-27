/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const ProductDashboard = async () => {
    const res = await fetch("https://shop-dash.onrender.com/api/products", {
        cache: "force-cache",
    });
    const products = await res.json();

    // const products = data?.products;

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center justify-evenly w-full pb-5">
                <h1>Total products {products.length}</h1>
                <Link href="/products/add" className="btn btn-neutral">
                    Add Product
                </Link>
            </div>

            <div className="overflow-x-auto flex justify-center ">
                <table className="table table-fixed text-center  lg:w-[70%]">
                    <thead>
                        <tr className="hover">
                            <th>Product Name</th>
                            <th className="hidden-column">Image</th>
                            <th className="hidden-column">Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr className="hover" key={product?._id}>
                                <td>
                                    <p>{product?.name}</p>
                                </td>
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
                                <td className="hidden-column">
                                    <p title={product?.description}>
                                        {product?.description.slice(1, 50)}
                                        ...
                                    </p>
                                </td>

                                <td>
                                    <p>${product?.price}</p>
                                </td>
                                <th>
                                    <button className="border-0">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            height="2em"
                                            width="2em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
                                        </svg>
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductDashboard;
