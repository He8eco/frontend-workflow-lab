import { useState } from 'react'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { SortSelect } from './components/SortSelect'
import { GenreFilter } from './components/GenreFilter'
import { PlatformFilter } from './components/PlatformFilter'
import { RatingFilter } from './components/RatingFilter'
import { GameList } from './components/GameList'
import { games } from './data/games'
import './App.css'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [favorites, setFavorites] = useState([])
  const [sort, setSort] = useState('default')
  const [genre, setGenre] = useState('all')
  const [platform, setPlatform] = useState('all')
  const [minRating, setMinRating] = useState(0)

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

      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <GenreFilter genre={genre} onGenreChange={setGenre} />
      <PlatformFilter platform={platform} onPlatformChange={setPlatform} />
      <RatingFilter minRating={minRating} onMinRatingChange={setMinRating} />
      <SortSelect sort={sort} onSortChange={setSort} />
      <GameList
        games={sortedGames}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </main>
  )
}
