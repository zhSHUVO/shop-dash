import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import TopBar from "../components/TopBar";

export const metadata = {
    title: "ShopDash",
    description: "One stop solution for all products online",
};

export default async function PrivateLayout({ children }) {
    const session = await getServerSession(authOptions);
    if (!session?.user) redirect("/user/login");

    return (
        <div>
            <h1 className="text-4xl text-center my-10">Dashboard</h1>
            <div className="">
                <TopBar />
                {children}
            </div>
        </div>
    );
}
