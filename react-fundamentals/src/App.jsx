import { useState } from 'react'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { GameList } from './components/GameList'
import { games } from './data/games'
import './App.css'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [favorites, setFavorites] = useState([])
  const [sort, setSort] = useState('default')

  const normalizedSearchQuery = searchQuery.trim().toLowerCase()

  const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(normalizedSearchQuery)
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

      <section className="sort-panel" aria-label="Game sorting">
        <label className="sort-panel__label" htmlFor="game-sort">
          Sort games
        </label>

        <select
          id="game-sort"
          className="sort-panel__select"
          value={sort}
          onChange={(event) => setSort(event.target.value)}
        >
          <option value="default">Default</option>
          <option value="rating-desc">Rating high to low</option>
          <option value="year-desc">Newest first</option>
          <option value="title-asc">Title A-Z</option>
        </select>
      </section>

      <GameList
        games={sortedGames}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </main>
  )
}
