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

    const onSubmit = async (userInfo) => {
        try {
            const res = await fetch(
                "https://shop-dash.onrender.com/api/auth/user",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userInfo),
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
            <h1 className="text-center text-3xl pb-5">Add New User</h1>
            <div className="flex justify-center items-center w-full">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col shadow-2xl bg-base-100 rounded-xl lg:w-[50%]"
                >
                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Number</span>
                        </label>
                        <input
                            placeholder="Enter Your Phone Number"
                            className={`input ${
                                errors.phone ? "input-error" : "input-bordered"
                            } w-full`}
                            type="text"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Phone Number is Required",
                                },
                                pattern: {
                                    value: /^\+88\d{11}$/,
                                    message:
                                        "Provide a BD Phone Number with country code +88",
                                },
                            })}
                        />
                        {errors.phone && (
                            <span className="flex items-center font-medium tracking-wide text-red-400 text-xs mt-1 ml-1">
                                {errors.phone.message}
                            </span>
                        )}
                    </div>

                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            placeholder="Enter Your Password"
                            className={`input ${
                                errors.password
                                    ? "input-error"
                                    : "input-bordered"
                            } w-full`}
                            type="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required",
                                },
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 characters or longer",
                                },
                            })}
                        />
                        {errors.password && (
                            <span className="flex items-center font-medium tracking-wide text-red-400 text-xs mt-1 ml-1">
                                {errors.password.message}
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
