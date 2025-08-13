"use client"

import Footer from "@/components/footer/Footer";
import { ForgotPasswordCard } from "@/components/forgot-password/ForgotPasswordCard";
import FullScreenLoadingComponent from "@/components/full-screen-loading/FullScreenLoadingComponent";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ForgotPasswordPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    });

    if (loading) {
        return <FullScreenLoadingComponent />;
    }

    return (
        <>
            <main className="w-full min-h-screen flex flex-col justify-between">
                <div className="px-8 py-4 lg:px-40">
                    <Link href="/">
                        <span className="font-honk text-4xl uppercase">JOGOPÉDIA</span>
                    </Link>
                </div>
                <div className="p-4 flex justify-center">
                    <ForgotPasswordCard />
                </div>
                <div className="mt-10 border-t border-solid bg-card">
                    <Footer />
                </div>
            </main>
        </>
    )
}   