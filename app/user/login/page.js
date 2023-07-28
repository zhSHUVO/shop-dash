"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const router = useRouter();

    const onSubmit = async (data) => {
        const { phone, password } = data;

        const res = await signIn("credentials", {
            phone,
            password,
            redirect: false,
        });

        if (res?.error) toast.error(res?.error);

        router.replace("/");
        toast.success("login successful");
    };

    return (
        <div className="pt-24 min-h-screen">
            <h1 className="text-center text-3xl mb-5">Login</h1>
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

                    <input
                        value={"login"}
                        className="my-3 btn btn-neutral"
                        type="submit"
                    />
                </form>
            </div>
            <p className="text-center pt-10">
                New user?
                <Link href="reg" className="ml-3 btn btn-neutral">
                    Register
                </Link>
            </p>
        </div>
    );
};

export default Login;
