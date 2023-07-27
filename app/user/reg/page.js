"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

const Reg = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    let regError;

    const onSubmit = async (userInfo) => {
        const res = await fetch(
            "https://shop-dash.onrender.com/api/auth/user",
            {
                method: "POST",
                body: JSON.stringify(userInfo),
            }
        ).then((res) => res.json());
        if (!res.user) {
            alert(res?.error);
        } else {
            alert("reg successful");
        }
    };

    return (
        <div className="pt-10">
            <h1 className="text-center text-3xl mb-5">Register</h1>
            <div className="flex justify-center items-center ">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col lg:w-1/4 w-3/4	shadow-2xl bg-base-100 rounded-xl p-5"
                >
                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
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

                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            placeholder="Confirm Password"
                            className={`input ${
                                errors.confirmpass
                                    ? "input-error"
                                    : "input-bordered"
                            } w-full`}
                            type="password"
                            {...register("confirmpass", {
                                required: {
                                    value: true,
                                    message: "Confirm Password is Required",
                                },
                                validate: (val) => {
                                    if (val !== watch("password")) {
                                        return "Your passwords do not match";
                                    }
                                },
                            })}
                        />
                        {errors.confirmpass && (
                            <span className="flex items-center font-medium tracking-wide text-red-400 text-xs mt-1 ml-1">
                                {errors.confirmpass.message}
                            </span>
                        )}
                    </div>

                    {regError}

                    <input
                        value={"register"}
                        className="my-3 btn btn-primary"
                        type="submit"
                    />
                </form>
            </div>
            <p className="text-center pt-10">
                Existing user?{" "}
                <Link href={"login"} className="ml-3 btn btn-primary">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Reg;
