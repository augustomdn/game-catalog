import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import SkeletonComponent from "@/components/skeleton/SkeletonComponent";
import { LoaderCircle } from "lucide-react";

type Game = {
  id: number;
  name: string;
  background_image: string;
  slug: string;
};

export default function PrivateMainComponent() {
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({});

  const fetchGames = async (pageNum: number) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/rawg/games?page=${pageNum}`);
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        setHasMore(false);
        return;
      }

      setGames((prevGames) => {
        const newGames = data.results.filter(
          (game: Game) => !prevGames.some((g) => g.id === game.id)
        );
        return [...prevGames, ...newGames];
      });
    } catch (err) {
      console.error("Erro ao buscar jogos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasMore) fetchGames(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        !loading &&
        hasMore
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  const handleImageLoad = (id: number) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <main className="p-8 flex flex-col gap-4 lg:px-40">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-[2rem] text-center font-bold lg:text-[3.5rem]">
          Explore todos os jogos existentes
        </h1>
        <span className="text-muted-foreground text-center">
          Filtre por gêneros, datas de lançamento, nomes e encontre seu(s) título(s) preferido(s)
        </span>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {games.map((game) => (
          <Card
            className="w-full h-full flex flex-col justify-between min-h-[380px] py-0 overflow-hidden"
            key={game.id}
          >
            <CardHeader className="p-0" hidden>
              <CardTitle />
            </CardHeader>

            <CardContent className="flex-1 flex flex-col justify-between p-0">
              <div className="relative w-full h-[75%]">
                {!imagesLoaded[game.id] && <SkeletonComponent className="w-full h-full" />}
                <Image
                  src={game.background_image || ""}
                  alt={game.name}
                  fill
                  className={`object-cover transition-opacity duration-300 ${
                    imagesLoaded[game.id] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleImageLoad(game.id)}
                />
              </div>

              <div className="h-[25%] flex flex-col gap-2 p-4">
                <span className="text-xl font-semibold">{game.name}</span>
              </div>
            </CardContent>
            <CardFooter hidden />
          </Card>
        ))}

        {loading && games.length === 0 &&
          Array(6)
            .fill(0)
            .map((_, i) => (
              <Card
                className="w-full h-full flex flex-col justify-between min-h-[380px] py-0 overflow-hidden"
                key={i}
              >
                <CardContent className="flex-1 flex flex-col justify-between p-0">
                  <SkeletonComponent className="w-full h-[75%] rounded-b-none" />
                  <div className="h-[25%] flex flex-col gap-2 p-4">
                    <SkeletonComponent className="h-4 w-[180px]" />
                  </div>
                </CardContent>
              </Card>
            ))}

        {loading && games.length > 0 && (
          <div className="col-span-full flex justify-center items-center p-4 gap-2 bg-card m-auto rounded-2xl">
            <LoaderCircle className="animate-spin" />
          </div>
        )}
      </div>
    </main>
  );
}
