"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { UpdatePasswordCard } from "@/components/update-password/UpdatePasswordCard";
import FullScreenLoadingComponent from "../../components/full-screen-loading/FullScreenLoadingComponent";

export default function UpdatePasswordPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [sessionValid, setSessionValid] = useState(false);

    useEffect(() => {
        const verifySession = async () => {
            const hash = window.location.hash;

            if (hash.includes("access_token")) {
                const params = new URLSearchParams(hash.substring(1));
                const accessToken = params.get("access_token");
                const refreshToken = params.get("refresh_token");

                if (accessToken && refreshToken) {
                    const { error } = await supabase.auth.setSession({
                        access_token: accessToken,
                        refresh_token: refreshToken
                    });

                    if (!error) {
                        setSessionValid(true);
                        router.replace("/redefinir-senha");
                    } else {
                        router.push("/esqueci-senha");
                    }
                } else {
                    router.push("/esqueci-senha");
                }
            } else {
                router.push("/esqueci-senha");
            }

            setLoading(false);
        };

        verifySession();
    }, [router]);

    if (loading) {
        return <FullScreenLoadingComponent />;
    }

    if (!sessionValid) {
        return null;
    }

    return (
        <main className="w-full min-h-screen flex flex-col justify-between">
            <div className="px-8 py-4 lg:px-40">
                <Link href="/">
                    <span className="font-honk text-4xl uppercase">JOGOPÉDIA</span>
                </Link>
            </div>
            <div className="p-4 flex justify-center">
                <UpdatePasswordCard />
            </div>
            <div className="mt-10 border-t border-solid bg-card">
                <Footer />
            </div>
        </main>
    );
}
