import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./components/AuthProvider";
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
            <AuthProvider>
                <CartProvider>
                    <body>
                        <Navbar />
                        {children}
                        <Footer />
                        <Toaster />
                    </body>
                </CartProvider>
            </AuthProvider>
        </html>
    );
}
