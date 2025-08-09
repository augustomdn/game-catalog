import InfoCardsComponent from "./info-cards/InfoCardsComponent";

export default function InfosComponent() {
    return (
        <div className="p-8 w-full flex flex-col gap-4">
            <h2 className="text-xl font-bold">Por que fazer parte?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <InfoCardsComponent />
            </div>
        </div>
    );
}


// linear-gradient(
//                     149deg,
//                     #192247 0%,
//                     #210e17 96.86%
//                 )