import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import "./globals.css";

export const metadata = {
    title: "ShopDash",
    description: "One stop solution for all products online",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
