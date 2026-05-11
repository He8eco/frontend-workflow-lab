import { useState } from 'react'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { GameList } from './components/GameList'
import { games } from './data/games'
import './App.css'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [favorites, setFavorites] = useState([])

  const normalizedSearchQuery = searchQuery.trim().toLowerCase()

  const filteredGames = games.filter((game) =>{
    return game.title.toLowerCase().includes(normalizedSearchQuery)
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
      <Header />

      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery}/>

      <GameList games={filteredGames} 
      favorites={favorites}
      onToggleFavorite={handleToggleFavorite}/>
    </main>
  )
}
