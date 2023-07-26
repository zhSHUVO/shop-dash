import Image from "next/image";

const SingleProduct = async ({ params }) => {
    const res = await fetch(
        `http://localhost:3000/api/products/${params?.id}`,
        {
            cache: "no-store",
        }
    );
    const data = await res.json();

    const product = data?.product;

    return (
        <div className="flex items-center justify-center">
            <div className="rounded-2xl h-[500px] flex flex-col items-start justify-between p-10 overflow-hidden shadow-md border border-gray-100 transition-all w-fit text-center">
                <Image
                    className="mx-auto pb-5"
                    src={product?.img}
                    alt="product"
                    width={300}
                    height={300}
                />
                <div>
                    <h1 className="text-xl font-semibold">{product?.name}</h1>
                    <p className="text-sm">
                        <span className="font-bold">Description:</span>
                        {product?.description}
                    </p>
                    <p className="text-sm">
                        <span className="font-bold">Price:</span>{" "}
                        {product?.price}
                    </p>
                    <button className="btn btn-neutral mt-2">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
