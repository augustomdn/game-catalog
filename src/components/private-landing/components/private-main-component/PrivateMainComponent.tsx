import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CarouselItem } from "@/components/ui/carousel";
import SkeletonComponent from "@/components/skeleton/SkeletonComponent";

type Game = {
    id: number;
    name: string;
    background_image: string;
    slug: string;
}

export default function PrivateMainComponent() {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchGames() {
            const res = await fetch("/api/rawg/games");

            if (!res.ok) {
                console.error("Error fetching games: ", res.status);
                setLoading(false);
                return;
            }

            const data = await res.json();

            if(data.background_image == "") {
                return "🚧";
            }

            setGames(data.results);
            setLoading(false);
        }

        fetchGames();
    }, []);


    return (
        <>
            <main className="p-8 flex flex-col gap-4 lg:px-40">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-[2rem] text-center font-bold lg:text-[3.5rem]">
                        Explore todos os jogos existentes
                    </h1>
                    <span className="text-muted-foreground text-center">
                        Filtre por gêneros, datas de lançamento, nomes e encontre seu(s) título(s) preferido(s)                    </span>
                </div>
                {/* Barra de pesquisa em seguida */}

                {/* Card com jogos */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
                    {
                        loading ? Array(5).fill(0).map((_, i) => (
                            <Card className="w-full h-full flex flex-col justify-between min-h-[380px] py-0 overflow-hidden" key={i}>
                                <CardContent className="flex-1 flex flex-col justify-between p-0">
                                    <SkeletonComponent className="w-full h-[75%] rounded-b-none" />
                                    <div className="h-[25%] flex flex-col gap-2 p-4">
                                        <SkeletonComponent className="h-4 w-[180px]" />
                                    </div>
                                </CardContent>
                            </Card>

                        ))

                            :

                            games.map((game, index) => (
                                <Card className="w-full h-full flex flex-col justify-between min-h-[380px] py-0 overflow-hidden" key={index}>
                                    <CardHeader className="p-0" hidden>
                                        <CardTitle />
                                    </CardHeader>

                                    <CardContent className="flex-1 flex flex-col justify-between p-0">
                                        <div className="relative w-full h-[75%]">
                                            <Image src={game.background_image || ""} alt={""} fill></Image>
                                        </div>

                                        <div className="h-[25%] flex flex-col gap-2 p-4">
                                            <span className="text-xl font-semibold">
                                                {game.name}
                                            </span>
                                        </div>
                                    </CardContent>
                                    <CardFooter hidden />
                                </Card>
                            ))}


                    {/* <Card className="w-full h-full flex flex-col justify-between min-h-[380px] py-0 overflow-hidden">
                        <CardHeader className="p-0" hidden>
                            <CardTitle />
                        </CardHeader>

                        <CardContent className=" flex-1 flex flex-col justify-between p-0">
                            <div className="w-full h-[75%] bg-google-gradient">
                                <span className="text-xl">
                                    IMAGEM
                                </span>
                            </div>

                            <div className="h-[25%] bg-google-gradient">
                                <span className="text-xl">
                                    DESCRIÇÃO
                                </span>
                            </div>
                        </CardContent>
                        <CardFooter hidden />
                    </Card>
                    <Card className="w-full h-full flex flex-col justify-between min-h-[380px] py-0 overflow-hidden">
                        <CardHeader className="p-0" hidden>
                            <CardTitle />
                        </CardHeader>

                        <CardContent className=" flex-1 flex flex-col justify-between p-0">
                            <div className="w-full h-[75%] bg-google-gradient">
                                <span className="text-xl">
                                    IMAGEM
                                </span>
                            </div>

                            <div className="h-[25%] bg-google-gradient">
                                <span className="text-xl">
                                    DESCRIÇÃO
                                </span>
                            </div>
                        </CardContent>
                        <CardFooter hidden />
                    </Card>
                    <Card className="w-full h-full flex flex-col justify-between min-h-[380px] py-0 overflow-hidden">
                        <CardHeader className="p-0" hidden>
                            <CardTitle />
                        </CardHeader>

                        <CardContent className=" flex-1 flex flex-col justify-between p-0">
                            <div className="w-full h-[75%] bg-google-gradient">
                                <span className="text-xl">
                                    IMAGEM
                                </span>
                            </div>

                            <div className="h-[25%] bg-google-gradient">
                                <span className="text-xl">
                                    DESCRIÇÃO
                                </span>
                            </div>
                        </CardContent>
                        <CardFooter hidden />
                    </Card>
                    <Card className="w-full h-full flex flex-col justify-between min-h-[380px] py-0 overflow-hidden">
                        <CardHeader className="p-0" hidden>
                            <CardTitle />
                        </CardHeader>

                        <CardContent className=" flex-1 flex flex-col justify-between p-0">
                            <div className="w-full h-[75%] bg-google-gradient">
                                <span className="text-xl">
                                    IMAGEM
                                </span>
                            </div>

                            <div className="h-[25%] bg-google-gradient">
                                <span className="text-xl">
                                    DESCRIÇÃO
                                </span>
                            </div>
                        </CardContent>
                        <CardFooter hidden />
                    </Card>
                    <Card className="w-full h-full flex flex-col justify-between min-h-[380px] py-0 overflow-hidden">
                        <CardHeader className="p-0" hidden>
                            <CardTitle />
                        </CardHeader>

                        <CardContent className=" flex-1 flex flex-col justify-between p-0">
                            <div className="w-full h-[75%] bg-google-gradient">
                                <span className="text-xl">
                                    IMAGEM
                                </span>
                            </div>

                            <div className="h-[25%] bg-google-gradient">
                                <span className="text-xl">
                                    DESCRIÇÃO
                                </span>
                            </div>
                        </CardContent>
                        <CardFooter hidden />
                    </Card> */}
                </div>
            </main>
        </>
    )
}




{/* <div className="h-[50vh] lg:h-[42vh] rounded-2xl overflow-hidden">
                        <div className="w-full bg-red-300 h-3/4 flex justify-center items-center">
                            IMAGEM
                        </div>
                        <div className="w-full bg-fuchsia-400 bg-[linear-gradient(90deg,rgba(42,123,155,1)_0%,rgba(87,199,133,1)_50%,rgba(237,221,83,1)_100%)] h-1/4 flex justify-center items-center">
                            DESCRIÇÃO
                        </div>
                    </div> */}