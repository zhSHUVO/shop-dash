import Link from "next/link";

const UserDashboard = async () => {
    const res = await fetch("https://shop-dash.onrender.com/api/auth/user", {
        cache: "force-cache",
    });
    const users = await res.json();

    // const users = data?.users;

    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col lg:flex-row items-center justify-evenly w-full pb-5">
                    <h1>Total users {users.length}</h1>
                    <Link href="/users/add" className="btn btn-neutral">
                        Add User
                    </Link>
                </div>

                <div className="overflow-x-auto flex justify-center ">
                    <table className="table table-fixed text-center lg:w-[50%]">
                        <thead>
                            <tr className="hover">
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr className="hover" key={user._id}>
                                    <td>
                                        <p>{user.phone}</p>
                                    </td>
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
