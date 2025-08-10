import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

// bg-[url(/assets/images/main-wallpaper.webp)] bg-fill bg-no-repeat

export default function MainComponent() {
    return (
        <main className="p-8 min-h-[31vh] flex flex-col items-center justify-center gap-4 lg:px-40">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl text-center font-bold">
                    Tudo sobre jogos, consoles e muito mais, sem limites
                </h1>
                <p className="text-center">Tudo 100% gratuito.</p>
                <p className="text-center">Efetue seu cadastro e mergulhe no mundo dos jogos da melhor forma.</p>
                {/* <Image src={"/assets/images/FF7.png"} alt={"Final Fantasy 7 Image"} width={300} height={300} className="border-b border-solid"></Image> */}
                <Button asChild>
                    <Link href="/registro">Cadastre-se</Link>
                </Button>
            </div>
        </main>

    )
}