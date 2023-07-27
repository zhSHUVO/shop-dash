/* eslint-disable @next/next/no-img-element */
import AddToCartButton from "@/app/components/AddToCartButton";

const SingleProduct = async ({ params }) => {
    const res = await fetch(
        `https://shop-dash.onrender.com/api/products/${params?.id}`,
        {
            cache: "no-store",
        }
    );

    const product = await res.json();

    // const product = data?.product;

    return (
        <div className="flex max-w-7xl mx-auto items-center justify-around border-b border-gray-700 w-[80%] min-h-screen">
            <div className="w-[50%]">
                <img
                    className="m-5 mx-auto"
                    src={product?.img}
                    alt="product"
                    width={400}
                    height={400}
                />
            </div>
            <div className="w-[50%]">
                <h1 className="text-3xl font-semibold">{product?.name}</h1>
                <p className="text-xl">
                    <span className="font-bold">Description: </span>
                    {product?.description}
                </p>
                <p className="text-xl">
                    <span className="font-bold">Price: </span> {product?.price}
                </p>
                <AddToCartButton product={product} />
            </div>
        </div>
    );
};

export default SingleProduct;
