const mockMovies = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    rating: 8.8,
    genre: 'Sci-Fi',
    poster: '',
  },
  {
    id: 2,
    title: 'Interstellar',
    year: 2014,
    rating: 8.7,
    genre: 'Sci-Fi',
    poster: '',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    year: 2008,
    rating: 9.0,
    genre: 'Action',
    poster: '',
  },
]

export async function getMovies() {
  return mockMovies
}