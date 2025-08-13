export default function PrivateMainComponent() {
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
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 justify-center">
                    <div className="bg-amber-400 h-[50vh] lg:h-[42vh]">
                        <div className="w-full bg-red-300 h-3/4 flex justify-center items-center">
                            IMAGEM
                        </div>
                        <div className="w-full bg-red-400 h-1/4 flex justify-center items-center">
                            DESCRIÇÃO
                        </div>
                    </div>
                    <div className="bg-amber-400 h-[50vh] lg:h-[42vh]">
                        <div className="w-full bg-red-300 h-3/4 flex justify-center items-center">
                            IMAGEM
                        </div>
                        <div className="w-full bg-red-400 h-1/4 flex justify-center items-center">
                            DESCRIÇÃO
                        </div>
                    </div>
                    <div className="bg-amber-400 h-[50vh] lg:h-[42vh]">
                        <div className="w-full bg-red-300 h-3/4 flex justify-center items-center">
                            IMAGEM
                        </div>
                        <div className="w-full bg-red-400 h-1/4 flex justify-center items-center">
                            DESCRIÇÃO
                        </div>
                    </div>
                    <div className="bg-amber-400 h-[50vh] lg:h-[42vh]">
                        <div className="w-full bg-red-300 h-3/4 flex justify-center items-center">
                            IMAGEM
                        </div>
                        <div className="w-full bg-red-400 h-1/4 flex justify-center items-center">
                            DESCRIÇÃO
                        </div>
                    </div>
                    <div className="bg-amber-400 h-[50vh] lg:h-[42vh]">
                        <div className="w-full bg-red-300 h-3/4 flex justify-center items-center">
                            IMAGEM
                        </div>
                        <div className="w-full bg-red-400 h-1/4 flex justify-center items-center">
                            DESCRIÇÃO
                        </div>
                    </div>
                    <div className="bg-amber-400 h-[50vh] lg:h-[42vh]">
                        <div className="w-full bg-red-300 h-3/4 flex justify-center items-center">
                            IMAGEM
                        </div>
                        <div className="w-full bg-red-400 h-1/4 flex justify-center items-center">
                            DESCRIÇÃO
                        </div>
                    </div>
                    <div className="bg-amber-400 h-[50vh] lg:h-[42vh]">
                        <div className="w-full bg-red-300 h-3/4 flex justify-center items-center">
                            IMAGEM
                        </div>
                        <div className="w-full bg-red-400 h-1/4 flex justify-center items-center">
                            DESCRIÇÃO
                        </div>
                    </div>
                    <div className="bg-amber-400 h-[50vh] lg:h-[42vh]">
                        <div className="w-full bg-red-300 h-3/4 flex justify-center items-center">
                            IMAGEM
                        </div>
                        <div className="w-full bg-red-400 h-1/4 flex justify-center items-center">
                            DESCRIÇÃO
                        </div>
                    </div>
                    <div className="bg-amber-400 h-[50vh] lg:h-[42vh]">
                        <div className="w-full bg-red-300 h-3/4 flex justify-center items-center">
                            IMAGEM
                        </div>
                        <div className="w-full bg-red-400 h-1/4 flex justify-center items-center">
                            DESCRIÇÃO
                        </div>
                    </div>
                    
                </div>
            </main>
        </>
    )
}