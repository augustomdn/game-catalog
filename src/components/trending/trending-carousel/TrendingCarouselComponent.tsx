"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import SkeletonComponent from "@/components/skeleton/SkeletonComponent";

type Game = {
    id: number;
    name: string;
    background_image: string;
    rating: number;
};

export default function TrendingCarouselComponent() {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGames() {
            const res = await fetch("/api/rawg/trending");

            if (!res.ok) {
                console.error("Error fetching games: ", res.status);
                setLoading(false); // também para o loading no erro
                return;
            }

            const data = await res.json();
            setGames(data.results);
            setLoading(false);
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
                    {loading
                        ? Array(5).fill(0).map((_, i) => (
                            <CarouselItem
                                key={i}
                                className="basis-2/2 carousel-item-landscape md:basis-1/3 lg:basis-1/5"
                            >
                                <SkeletonComponent className="h-[45vh] rounded-none" />
                            </CarouselItem>
                        ))
                        : games.map((game, index) => (
                            <CarouselItem
                                key={game.id}
                                className="basis-2/2 carousel-item-landscape md:basis-1/3 lg:basis-1/5"
                            >
                                <div className="flex flex-col gap-4">
                                    <Card className="relative h-[45vh] overflow-hidden rounded-none">
                                        <Image
                                            src={game.background_image}
                                            alt={game.name}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            sizes="(max-width: 768px) 100vw, 45vw"
                                            priority={index < 3}
                                        />
                                    </Card>
                                    <CardContent className="flex flex-col p-0">
                                        <h2>{game.name}</h2>
                                    </CardContent>
                                </div>
                            </CarouselItem>
                        ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
