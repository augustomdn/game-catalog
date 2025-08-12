export async function GET() {
  const apiKey = process.env.RAWG_API_KEY;

  const response = await fetch(
    `https://api.rawg.io/api/games?key=${apiKey}&ordering=-added&page_size=10`
  );

  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: 'Erro ao buscar top 10 jogos' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const data = await response.json();

  return new Response(JSON.stringify(data.results), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
