import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
                    <Card className="w-full h-full flex flex-col justify-between min-h-[380px] py-0 overflow-hidden">
                        <CardHeader className="p-0" hidden>
                            <CardTitle />
                        </CardHeader>

                        <CardContent className=" flex-1 flex flex-col justify-between p-0">
                            <div className="w-full h-[75%] bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 to-red-500">
                                <span className="text-xl">
                                    IMAGEM
                                </span>
                            </div>

                            <div className="h-[25%] bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 to-red-500">
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
                            <div className="w-full h-[75%] bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 to-red-500">
                                <span className="text-xl">
                                    IMAGEM
                                </span>
                            </div>

                            <div className="h-[25%] bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 to-red-500">
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
                            <div className="w-full h-[75%] bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 to-red-500">
                                <span className="text-xl">
                                    IMAGEM
                                </span>
                            </div>

                            <div className="h-[25%] bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 to-red-500">
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
                            <div className="w-full h-[75%] bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 to-red-500">
                                <span className="text-xl">
                                    IMAGEM
                                </span>
                            </div>

                            <div className="h-[25%] bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 to-red-500">
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
                            <div className="w-full h-[75%] bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 to-red-500">
                                <span className="text-xl">
                                    IMAGEM
                                </span>
                            </div>

                            <div className="h-[25%] bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 to-red-500">
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
                            <div className="w-full h-[75%] bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 to-red-500">
                                <span className="text-xl">
                                    IMAGEM
                                </span>
                            </div>

                            <div className="h-[25%] bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 to-red-500">
                                <span className="text-xl">
                                    DESCRIÇÃO
                                </span>
                            </div>
                        </CardContent>
                        <CardFooter hidden />
                    </Card>
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