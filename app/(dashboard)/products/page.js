import Image from "next/image";

const ProductDashboard = async () => {
    const res = await fetch("http://localhost:3000/api/products", {
        cache: "force-cache",
    });
    const data = await res.json();

    const products = data?.products;

    return (
        <div>
            <div className="flex justify-center pl-10">
                <div className="overflow-x-auto ">
                    <table className="table table-auto ">
                        <thead>
                            <tr className="hover">
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr className="hover" key={product._id}>
                                    <td>
                                        <p>{product.name}</p>
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle  w-10 h-10">
                                                <Image
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
                                        <p title={product.description}>
                                            {product.description.slice(1, 50)}
                                            ...
                                        </p>
                                    </td>

                                    <td>
                                        <p>${product.price}</p>
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
        </div>
    );
};

export default ProductDashboard;
