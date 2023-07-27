/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const ProductDashboard = async () => {
    const res = await fetch("https://shop-dash.onrender.com/api/products", {
        cache: "force-cache",
    });
    const products = await res.json();

    // const products = data?.products;

    return (
        <div className="min-h-screen">
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductDashboard;
