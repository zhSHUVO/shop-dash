import Link from "next/link";
import AuthButtons from "../AuthButtons";
import CartButton from "../CartButton";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                    Home
                </Link>
            </div>

            <div className="flex-none">
                <div className="flex-1">
                    <Link
                        href="/dashboard"
                        className="btn btn-ghost normal-case "
                    >
                        Dashboard
                    </Link>
                </div>

                <CartButton />

                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="rounded-full">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="2em"
                                width="2em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"></path>
                                </g>
                            </svg>
                        </div>
                    </label>
                    <AuthButtons />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
