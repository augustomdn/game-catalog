'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
    fetch('/api/rawg/trending')
      .then(res => res.json())
      .then(data => setGames(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando jogos...</p>;

  return (
    <div className="mx-8">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {games.map((game, index) => (
            <CarouselItem key={game.id} className="basis-2/2 md:basis-1/3 lg:basis-1/5">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-4">
                  {/* <span className="text-3xl font-semibold mb-2">{index + 1}</span> */}
                  <img
                    src={game.background_image}
                    alt={game.name}
                    className="aspect-square w-full object-cover rounded-md mb-2"
                    loading="lazy"
                  />
                  <h3 className="text-center font-semibold text-lg">{game.name}</h3>
                  <p className="text-sm text-gray-600">Nota: {game.rating.toFixed(1)}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
