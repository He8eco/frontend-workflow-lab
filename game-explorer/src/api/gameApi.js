import { supabase } from "./supabaseClient"

function normalizePlatforms(platforms) {
  if (Array.isArray(platforms)) {
    return platforms
  }

  if (typeof platforms === 'string') {
    return platforms
      .split(',')
      .map((platform) => platform.trim())
      .filter(Boolean)
  }

  return []
}

function normalizeGame(game) {
  return {
    id: Number(game.id),
    title: game.title,
    rating: Number(game.rating),
    genre: game.genre,
    developer: game.developer,
    releaseYear: Number(game.release_year),
    description: game.description,
    platforms: normalizePlatforms(game.platforms),
    coverUrl: game.cover_url || '',
  }
}
export async function getGames() {
    const {data, error} = await supabase
        .from('games')
        .select('*')
        .order('id', {ascending: true})

    if (error) {
        console.error(error)
        throw new Error("Failed to load games");
        
    }

    return Array.isArray(data) ? data.map(normalizeGame) : []
}
