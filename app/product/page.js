import Image from "next/image";
import Link from "next/link";

const Product = ({ product }) => {
    return (
        <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all">
            <Link href={`/product/${product._id}`} className="w-full">
                <Image
                    className="mx-auto"
                    src={product?.img}
                    alt="product"
                    width={300}
                    height={300}
                />
            </Link>
            <div>
                <h1 className="text-xl font-semibold">{product?.name}</h1>
                <p className="text-sm">
                    <span className="font-bold">Description:</span>
                    {product?.description}
                </p>
                <p className="text-sm">
                    <span className="font-bold">Price:</span> {product?.price}
                </p>
                <button className="btn btn-neutral mt-2">Add to cart</button>
            </div>
        </div>
    );
};

export default Product;
