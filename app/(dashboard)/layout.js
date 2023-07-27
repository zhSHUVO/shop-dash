import TopBar from "../components/TopBar";

export const metadata = {
    title: "ShopDash",
    description: "One stop solution for all products online",
};

export default function RootLayout({ children }) {
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
