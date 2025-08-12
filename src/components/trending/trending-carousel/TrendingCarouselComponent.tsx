"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

type Game = {
    id: number,
    name: string,
    background_image: string,
    rating: number,
}

export default function TrendingCarouselComponent() {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
    console.log('fetchGames disparado');
    async function fetchGames() {
        const res = await fetch('/api/rawg/trending')

        if (!res.ok) {
            console.error('Error fetching games: ', res.status,)
        }

        const data = await res.json();
        setGames(data.results);
    }

    fetchGames();
}, []);

    return (
        <div className="mx-8">
            <Carousel
                opts={{
                    align: "start",
                }}
                className=""
            >
                <CarouselContent>
                    {games.map((game, index) => (
                        <CarouselItem key={index} className="basis-2/2 md:basis-1/3 lg:basis-1/5">
                            <div className="">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                        <img src={game.background_image} alt="" className="w-[200px] h-[200px]" />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    )
}