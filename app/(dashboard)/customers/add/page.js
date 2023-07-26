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
        const res = await fetch("http://localhost:3000/api/auth/user", {
            method: "POST",
            body: JSON.stringify(userInfo),
        }).then((res) => res.json());
        if (!res.user) {
            alert(res?.error);
        } else {
            alert("added successfully");
        }
    };

    return (
        <div className="pl-10 w-full">
            <h1 className="text-center text-3xl pb-5">Add New User</h1>
            <div className="flex justify-center items-center w-full">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col shadow-2xl bg-base-100 rounded-xl w-[50%]"
                >
                    <div className="indicator w-full">
                        <input
                            placeholder="Phone Number"
                            className="my-1 input input-bordered w-full"
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
                            <span className="indicator-item badge">
                                {errors.phone.message}
                            </span>
                        )}
                    </div>

                    <div className="indicator w-full">
                        <input
                            placeholder="Password"
                            className="my-1 input input-bordered w-full"
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
                            <span className="indicator-item badge">
                                {errors.password.message}
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
