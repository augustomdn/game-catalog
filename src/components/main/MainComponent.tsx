import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

// bg-[url(/assets/images/main-wallpaper.webp)] bg-fill bg-no-repeat

export default function MainComponent() {
    return (
        <main className="p-8 min-h-[60vh] flex flex-col items-center justify-center gap-4 lg:px-40">
            <h1 className="text-[2rem] text-center font-bold lg:text-[3.5rem]">
                Tudo sobre jogos, consoles e muito mais, sem limites
            </h1>
            <p className="text-center lg:font-semibold">Tudo 100% gratuito.</p>
            <p className="text-center lg:font-semibold">Efetue seu cadastro e mergulhe no mundo dos jogos da melhor forma.</p>

            <Button asChild>
                <Link href="/registro"><span>Cadastre-se</span></Link>
            </Button>
        </main>

    )
}