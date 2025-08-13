import TrendingCarouselComponent from "./trending-carousel/TrendingCarouselComponent";

export default function TrendingComponent() {
    return (
        <div className="p-8 w-full flex flex-col gap-4 lg:px-40">
            <h2 className="text-xl font-bold lg:text-[1.5rem]">Em alta</h2>

            <div>
                <TrendingCarouselComponent/>
            </div>
        </div>
    )
}