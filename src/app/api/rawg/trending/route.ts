export async function GET() {
  const apiKey = process.env.RAWG_API_KEY;

  const response = await fetch(
    `https://api.rawg.io/api/games?key=${apiKey}&ordering=-rating&page_size=12`
  );

  if (!response.ok) {
    return Response.json({ error: "Erro ao buscar jogos" }, { status: 500 });
  }

  const data = await response.json();
  return Response.json(data);
}
