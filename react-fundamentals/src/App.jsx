import { useState } from 'react'
import { Header } from './components/Header'
import { GameFilters } from './components/GameFilters'
import { GameList } from './components/GameList'
import { games as initialGames } from './data/games'
import './App.css'

export default function App() {
  const [games, setGames] = useState(initialGames)
  const [searchQuery, setSearchQuery] = useState('')
  const [favorites, setFavorites] = useState([])
  const [sort, setSort] = useState('default')
  const [genre, setGenre] = useState('all')
  const [platform, setPlatform] = useState('all')
  const [minRating, setMinRating] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const hasActiveControls =
    searchQuery.trim() !== '' ||
    genre !== 'all' ||
    platform !== 'all' ||
    minRating !== 0 ||
    sort !== 'default'

  const normalizedSearchQuery = searchQuery.trim().toLowerCase()

  const searchedGames = games.filter((game) => {
    return game.title.toLowerCase().includes(normalizedSearchQuery)
  })

  const genreFilteredGames = searchedGames.filter((game) => {
    if (genre === 'all') {
      return true
    }

    return game.genre === genre
  })

  const platformFilteredGames = genreFilteredGames.filter((game) => {
    if (platform === 'all') {
      return true
    }

    return game.platform === platform
  })

  const filteredGames = platformFilteredGames.filter((game) => {
    return game.rating >= minRating
  })
  const sortedGames = [...filteredGames].sort((firstGame, secondGame) => {
    switch (sort) {
      case 'rating-desc':
        return secondGame.rating - firstGame.rating

      case 'year-desc':
        return secondGame.year - firstGame.year

      case 'title-asc':
        return firstGame.title.localeCompare(secondGame.title)

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

  function handleToggleFavorite(gameId) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(gameId)) {
        return currentFavorites.filter((favoriteId) => favoriteId !== gameId)
      }

      return [...currentFavorites, gameId]
    })
  }

  return (
    <main className="app">
      <Header favoritesCount={favorites.length} />

      <GameFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        genre={genre}
        onGenreChange={setGenre}
        platform={platform}
        onPlatformChange={setPlatform}
        minRating={minRating}
        onMinRatingChange={setMinRating}
        sort={sort}
        onSortChange={setSort}
        isResetDisabled={!hasActiveControls}
        onResetControls={handleResetControls}
      />
      <GameList
        games={sortedGames}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </main>
  )
}
