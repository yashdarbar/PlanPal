import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import UseProvider from "@/context/userProvider";
import { Navbar } from "@/app/components/navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Toaster position="top-center" />
                    <UseProvider>
                        <Navbar />
                        <div className="mt-[100px] h-full">{children}</div>
                    </UseProvider>
            </body>
        </html>
    );
}
