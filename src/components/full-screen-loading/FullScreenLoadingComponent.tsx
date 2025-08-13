export default function FullScreenLoadingComponent() {
    return (
        <>
            <div className="absolute w-full h-screen flex justify-center items-center">
                <div className="w-full relative h-full bg-card animate-pulse">
                </div>
            </div>
        </>
    )
}