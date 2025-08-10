import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Joystick, Lightbulb, Search, Users } from "lucide-react";

const infoCards = [
    {
        title: 'Catálogo Imbatível',
        description: 'Explore mais de 500.000 jogos de todas as eras, gêneros e plataformas. Do clássico ao indie recém-lançado — tudo em um só lugar.',
        icon: <Joystick size={"2em"} />
    },
    {
        title: 'Busca Inteligente',
        description: 'Encontre qualquer jogo com facilidade usando filtros avançados, sugestões por IA e pesquisa por similaridade.',
        icon: <Search size={"2em"} />
    },
    {
        title: 'Recomendações Personalizadas',
        description: 'Receba dicas baseadas no que você gosta de jogar. Quanto mais usa, mais inteligente fica.',
        icon: <Lightbulb size={"2em"} />
    },
    {
        title: 'Comunidade de Jogadores',
        description: 'Crie listas, favorite jogos, compartilhe reviews e conecte-se com outros gamers com gostos parecidos.',
        icon: <Users size={"2em"} />
    },
];

export default function InfoCardsComponent() {
    return (
        <>
            {infoCards.map((item, index) => (
                <Card
                    key={index}
                    className="w-full h-full flex flex-col justify-between min-h-[280px] p-4"

                    // conflitando com modo claro
                    // style={{
                    //     background: "linear-gradient(149deg, #192247 0%, #210e17 96.86%)",
                    // }}

                >
                    <CardHeader className="p-0">
                        <CardTitle className="text-xl font-bold">
                            {item.title}
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col justify-between p-0">
                        <span className="text-base text-muted-foreground">
                            {item.description}
                        </span>

                        <div className="flex justify-end">
                            <span className="text-xl text-primary">
                                {item.icon}
                            </span>
                        </div>
                    </CardContent>

                    <CardFooter />
                </Card>
            ))}
        </>
    );
}
