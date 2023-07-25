"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthButtons = () => {
    const { data, status } = useSession();

    const isLoggedIn = status === "authenticated";

    return (
        <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
            <li>
                <p className="justify-between">
                    {isLoggedIn ? data?.user?.phone : "no user"}
                </p>
            </li>
            <li>
                {isLoggedIn ? (
                    <button
                        onClick={() => signOut()}
                        className="justify-between"
                    >
                        Logout
                    </button>
                ) : (
                    <Link href={"user/login"}>Login</Link>
                )}
            </li>
        </ul>
    );
};

export default AuthButtons;
