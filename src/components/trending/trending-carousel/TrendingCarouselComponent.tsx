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
import { Star } from "lucide-react";

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
                                className="flex flex-col gap-2 basis-2/2 carousel-item-landscape md:basis-1/3 lg:basis-1/5"
                            >
                                <SkeletonComponent className="h-[45vh]" />
                                <SkeletonComponent className="h-4 w-[200px]" />
                                <SkeletonComponent className="h-4 w-[80px]" />
                            </CarouselItem>
                        ))
                        : games.map((game, index) => (
                            <CarouselItem
                                key={game.id}
                                className="basis-2/2 carousel-item-landscape md:basis-1/3 lg:basis-1/5"
                            >
                                <div className="flex flex-col gap-4">
                                    <Card className="relative h-[45vh] overflow-hidden">
                                        <Image
                                            src={game.background_image}
                                            alt={game.name}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            sizes="(max-width: 768px) 90vw, 45vw"
                                            priority={index < 3}
                                        />
                                    </Card>
                                    <CardContent className="flex flex-col p-0">
                                        <h2 className="font-semibold">{game.name}</h2>
                                        <p className="flex gap-2 text-muted-foreground items-center">{game.rating}  <Star className="text-muted-foreground" size={"1rem"} /></p>
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
