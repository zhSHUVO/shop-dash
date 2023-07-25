"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

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
        console.log(phone, password);
        const res = await signIn("credentials", {
            phone,
            password,
            redirect: false,
        });

        if (res?.error) alert(res?.error);
        router.replace("/");
    };

    return (
        <div className="pt-10">
            <h1 className="text-center text-3xl mb-5">Login</h1>
            <div className="flex justify-center items-center ">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col lg:w-1/4 w-3/4	shadow-2xl bg-base-100 rounded-xl p-5"
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

                    <input
                        value={"login"}
                        className="my-1 btn btn-primary"
                        type="submit"
                    />
                </form>
            </div>
            <p className="text-center pt-10">
                New user?{" "}
                <Link href={"reg"} className="ml-3 btn btn-primary">
                    Register
                </Link>
            </p>

            {/* <div className="divider">OR</div>

            <div className="flex justify-center items-center">
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn w-1/4"
                >
                    Continue with{" "}
                    <svg
                        className="ml-2"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 488 512"
                        height="1.5em"
                        width="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                    </svg>
                </button>
            </div> */}
        </div>
    );
};

export default Login;