import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const infoCards = [
    { title: 'Catálogo Imbatível', description: 'Explore mais de 500.000 jogos de todas as eras, gêneros e plataformas. Do clássico ao indie recém-lançado — tudo em um só lugar.' },
    { title: 'Busca Inteligente', description: 'Encontre qualquer jogo com facilidade usando filtros avançados, sugestões por IA e pesquisa por similaridade.' },
    { title: 'Recomendações Personalizadas', description: 'Receba dicas baseadas no que você gosta de jogar. Quanto mais usa, mais inteligente fica.' },
    { title: 'Comunidade de Jogadores', description: 'Crie listas, favorite jogos, compartilhe reviews e conecte-se com outros gamers com gostos parecidos.' },
]

export default function InfoCardsComponent() {
    return (
        <>
            {infoCards.map((item, index) => (
                <Card className="w-full min-w-full" key={index}>
                    <CardHeader>
                        <CardTitle>
                            <span className="text-xl font-bold">
                                {item.title}
                            </span>
                        </CardTitle>
                        <CardDescription>
                        </CardDescription>
                        <CardAction>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <span>
                            {item.description}
                        </span>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                    </CardFooter>
                </Card>
            ))}


        </>
    )
}