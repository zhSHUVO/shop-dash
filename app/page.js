import Product from "./product/page";

const Home = async () => {
    const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store",
    });
    const data = await res.json();

    const products = data?.products;

    return (
        <div>
            <h1 className="text-4xl text-center my-10">All products</h1>
            <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
                {products.map((product) => (
                    <Product key={product?._id} product={product}></Product>
                ))}
            </div>
        </div>
    );
};

export default Home;
