/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import AddToCartButton from "../components/AddToCartButton";

const Product = ({ product }) => {
    return (
        <div className="rounded-2xl h-[450px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all">
            <div className="w-full">
                <Link href={`/product/${product?._id}`}>
                    <img
                        className="mx-auto"
                        src={product?.img}
                        alt="product"
                        width={280}
                        height={280}
                    />
                </Link>
            </div>

            <div>
                <Link href={`/product/${product?._id}`}>
                    <h1 className="text-xl font-semibold">{product?.name}</h1>
                </Link>

                <p className="text-sm">
                    <span className="font-bold">Price: </span> ${product?.price}
                </p>
                <AddToCartButton product={product} />
            </div>
        </div>
    );
};

export default Product;
