import { supabase } from './supabaseClient.js'

function normalizeMovie(movie) {
  return {
    id: movie.id,
    title: movie.title,
    year: Number(movie.year),
    rating: Number(movie.rating),
    genre: movie.genre,
    poster: movie.poster || '',
  }
}

export async function getMovies() {
  const { data, error } = await supabase
    .from('movies')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    throw new Error('Failed to load movies')
  }
  return Array.isArray(data) ? data.map(normalizeMovie) : []
}
