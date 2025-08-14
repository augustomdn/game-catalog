export async function GET() {
    const games = 'https://api.rawg.io/api/games'
    const apiKey = process.env.RAWG_API_KEY;

    const response = await fetch(
        `${games}?key=${apiKey}&page_size=40`
    );

    if (!response.ok) {
        return Response.json({ error: "Erro ao buscar jogos" }, { status: 500 });
    }

    const data = await response.json();
    return Response.json(data);
}
