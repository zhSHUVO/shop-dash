import Link from "next/link";

const UserDashboard = async () => {
    const res = await fetch("https://shop-dash.onrender.com/api/auth/user", {
        cache: "no-store",
    });
    const users = await res.json();

    // const users = data?.users;

    return (
        <div className="pl-10 w-[50%]">
            <div className="flex items-center justify-evenly w-full pb-5">
                <h1>Total users {users.length}</h1>
                <Link href={"/users/add"} className="btn btn-neutral">
                    Add User
                </Link>
            </div>

            <div className="flex justify-center">
                <div className="overflow-x-auto ">
                    <table className="table table-fixed">
                        <thead>
                            <tr className="hover">
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr className="hover" key={user._id}>
                                    <td>
                                        <p>{user.phone}</p>
                                    </td>

                                    <th>
                                        <button className="border-0">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 24 24"
                                                height="2em"
                                                width="2em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
                                            </svg>
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
