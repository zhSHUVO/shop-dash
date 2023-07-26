"use client";

import { useForm } from "react-hook-form";

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    let subError;

    const onSubmit = async (productInfo) => {
        const res = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify(productInfo),
        }).then((res) => res.json());
        console.log(res?.product);
        if (!res.product) {
            alert(res?.error);
        } else {
            alert("added successfully");
        }
    };

    return (
        <div className="pl-10 w-full">
            <h1 className="text-center text-3xl pb-5">Add New Product</h1>
            <div className="flex justify-center items-center w-full">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col shadow-2xl bg-base-100 rounded-xl w-[50%]"
                >
                    <div className="indicator w-full">
                        <input
                            placeholder="Product Name"
                            className="my-1 input input-bordered w-full"
                            type="text"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is Required",
                                },
                            })}
                        />
                        {errors.name && (
                            <span className="indicator-item badge">
                                {errors.name.message}
                            </span>
                        )}
                    </div>

                    <div className="indicator w-full">
                        <input
                            placeholder="Product Description"
                            className="my-1 input input-bordered w-full"
                            type="text"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "Description is Required",
                                },
                            })}
                        />
                        {errors.description && (
                            <span className="indicator-item badge">
                                {errors.description.message}
                            </span>
                        )}
                    </div>

                    <div className="indicator w-full">
                        <input
                            placeholder="Image Link"
                            className="my-1 input input-bordered w-full"
                            type="text"
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: "Imgae Link is Required",
                                },
                            })}
                        />
                        {errors.img && (
                            <span className="indicator-item badge">
                                {errors.img.message}
                            </span>
                        )}
                    </div>

                    <div className="indicator w-full">
                        <input
                            placeholder="Product Price"
                            className="my-1 input input-bordered w-full"
                            type="text"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: "Price is Required",
                                },
                            })}
                        />
                        {errors.price && (
                            <span className="indicator-item badge">
                                {errors.price.message}
                            </span>
                        )}
                    </div>

                    {subError}

                    <input
                        value={"Add"}
                        className="my-1 btn btn-primary"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
