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
        try {
            const res = await fetch(
                "https://shop-dash.onrender.com/api/products",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(productInfo),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                alert(data.error || "Something went wrong");
            } else {
                alert("added successfully");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-center text-3xl pb-5">Add New Product</h1>
            <div className="flex justify-center items-center w-full">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col shadow-2xl bg-base-100 rounded-xl lg:w-[50%]"
                >
                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            placeholder="Enter Your Product Name"
                            className={`input ${
                                errors.name ? "input-error" : "input-bordered"
                            } w-full`}
                            type="text"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is Required",
                                },
                            })}
                        />
                        {errors.name && (
                            <span className="flex items-center font-medium tracking-wide text-red-400 text-xs mt-1 ml-1">
                                {errors.name.message}
                            </span>
                        )}
                    </div>

                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            placeholder="Enter Your Product Description"
                            className={`input ${
                                errors.name ? "input-error" : "input-bordered"
                            } w-full`}
                            type="text"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "Description is Required",
                                },
                            })}
                        />
                        {errors.description && (
                            <span className="flex items-center font-medium tracking-wide text-red-400 text-xs mt-1 ml-1 ">
                                {errors.description.message}
                            </span>
                        )}
                    </div>

                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Img Link</span>
                        </label>
                        <input
                            placeholder="Enter Your Image Link"
                            className={`input ${
                                errors.name ? "input-error" : "input-bordered"
                            } w-full`}
                            type="text"
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: "Imgae Link is Required",
                                },
                            })}
                        />
                        {errors.img && (
                            <span className="flex items-center font-medium tracking-wide text-red-400 text-xs mt-1 ml-1">
                                {errors.img.message}
                            </span>
                        )}
                    </div>

                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            placeholder="Enter Your Product Price"
                            className={`input ${
                                errors.name ? "input-error" : "input-bordered"
                            } w-full`}
                            type="text"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: "Price is Required",
                                },
                            })}
                        />
                        {errors.price && (
                            <span className="flex items-center font-medium tracking-wide text-red-400 text-xs mt-1 ml-1">
                                {errors.price.message}
                            </span>
                        )}
                    </div>

                    {subError}

                    <input
                        value={"Add"}
                        className="my-3 btn btn-primary"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
