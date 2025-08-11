import Footer from "@/components/footer/Footer";
import { SignUpCard } from "@/components/sign-up/SignUpCard";
import Link from "next/link";

export default function SignInPage() {
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