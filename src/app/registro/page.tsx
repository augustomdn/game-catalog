"use client"

import Footer from "@/components/footer/Footer";
import FullScreenLoadingComponent from "@/components/full-screen-loading/FullScreenLoadingComponent";
import { SignUpCard } from "@/components/sign-up/SignUpCard";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SignInPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    });

    if (loading) {
        return <FullScreenLoadingComponent />;
    }

    return (
        <>
            <main className="min-h-screen flex flex-col">
                <div className="px-8 p-4 lg:px-40">
                    <Link href="/">
                        <span className="font-honk text-4xl uppercase">JOGOPÉDIA</span>
                    </Link>
                </div>
                <div className="p-4 flex justify-center">
                    <SignUpCard />
                </div>
                <div className="mt-10 border-t border-solid bg-card">
                    <Footer />
                </div>
            </main>
        </>
    )
}   