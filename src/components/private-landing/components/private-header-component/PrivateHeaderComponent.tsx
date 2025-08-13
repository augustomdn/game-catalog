import Link from "next/link";

export default function PrivateHeaderComponent() {
    return (
        <header className="px-8 py-4 w-full flex justify-between items-center lg:px-40">
            <Link href="/">
                <span className="font-honk text-xl uppercase">Jogopédia</span>
            </Link>
        </header>
    )
}