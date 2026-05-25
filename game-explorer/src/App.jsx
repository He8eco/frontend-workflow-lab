import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { getGames } from './api/gameApi'
import { GameList } from './components/GameList'
import { GameControls } from './components/GameControls'

function App() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [genre, setGenre] = useState('all')
  const [platform, setPlatform] = useState('all')
  const [minRating, setMinRating] = useState(0)
  const [sort, setSort] = useState('default')

  async function loadGames() {
    setLoading(true)
    setError(null)

    try {
      const loadedGames = await getGames()
      setGames(loadedGames)
    } catch (error) {
      console.error(error)
      setGames([])
      setError('Failed to load games')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadGames()
  }, [])

  const normalizedSearch = searchQuery.trim().toLowerCase()

  const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(normalizedSearch)
  })

  const genres = [...new Set(games.map((game) => game.genre))]

  const genreFilteredGames = filteredGames.filter((game) => {
    if (genre === 'all') {
      return true
    }

    return game.genre === genre
  })

  const platforms = [...new Set(games.flatMap((game) => game.platforms))]
  const platformFilteredGames = genreFilteredGames.filter((game) => {
    if (platform === 'all') {
      return true
    }

    return game.platforms.includes(platform)
  })

  const ratingFilteredGames = platformFilteredGames.filter((game) => {
    return game.rating >= minRating
  })

  const sortedGames = [...ratingFilteredGames].sort((firstGame, secondGame) => {
    switch (sort) {
      case 'rating-desc':
        return secondGame.rating - firstGame.rating

      case 'rating-asc':
        return firstGame.rating - secondGame.rating

      case 'title-asc':
        return firstGame.title.localeCompare(secondGame.title)

      case 'year-desc':
        return secondGame.releaseYear - firstGame.releaseYear

      case 'year-asc':
        return firstGame.releaseYear - secondGame.releaseYear

      default:
        return 0
    }
  })

  function handleResetControls() {
    setSearchQuery('')
    setGenre('all')
    setPlatform('all')
    setMinRating(0)
    setSort('default')
  }

  const hasActiveControls =
    searchQuery.trim() !== '' ||
    genre !== 'all' ||
    platform !== 'all' ||
    minRating !== 0 ||
    sort !== 'default'

  let catalogContent

  if (loading) {
    catalogContent = <p>Loading games...</p>
  } else if (error) {
    catalogContent = <p>{error}</p>
  } else if (sortedGames.length === 0) {
    catalogContent = <p>No games found</p>
  } else {
    catalogContent = <GameList games={sortedGames} />
  }

  return (
    <div className="container">
      <Header />
      <GameControls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        genre={genre}
        setGenre={setGenre}
        genres={genres}
        platform={platform}
        setPlatform={setPlatform}
        platforms={platforms}
        minRating={minRating}
        setMinRating={setMinRating}
        sort={sort}
        setSort={setSort}
        hasActiveControls={hasActiveControls}
        handleResetControls={handleResetControls}
      />
      {catalogContent}
    </div>
  )
}

export default App
