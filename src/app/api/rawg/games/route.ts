import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || "1";

    const apiKey = process.env.RAWG_API_KEY;
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=40`
    );

    if (!response.ok) {
      return NextResponse.json({ error: "Erro ao buscar jogos" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}
