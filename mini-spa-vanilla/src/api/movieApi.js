import { supabase } from './supabaseClient.js'

export async function getMovies() {
  const { data, error } = await supabase
    .from('movies')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    throw new Error('Failed to load movies')
  }
  return data
}
