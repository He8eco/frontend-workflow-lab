import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Header } from './components/Header'
import { getGames } from './api/gameApi'
import { Routes, Route } from 'react-router'
import { CatalogPage } from './pages/CatalogPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { GameDetailsPage } from './pages/GameDetailsPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favoriteGames2')

    if (!savedFavorites) {
      return []
    }

    try {
      return JSON.parse(savedFavorites)
    } catch (error) {
      console.error(error)

      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('favoriteGames', JSON.stringify(favorites))
  }, [favorites])

  function handleToggleFavorite(gameId) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(gameId)) {
        return currentFavorites.filter((favoriteID) => favoriteID !== gameId)
      }

      return [...currentFavorites, gameId]
    })
  }

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

  return (
    <Container className='app px-2' fluid>
      <Header favoritesCount={favorites.length} />
      <Routes>
        <Route
          path="/"
          element={
            <CatalogPage
              games={games}
              loading={loading}
              error={error}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              games={games}
              loading={loading}
              error={error}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          }
        />

        <Route
          path="/games/:id"
          element={
            <GameDetailsPage
              games={games}
              loading={loading}
              error={error}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  )
}

export default App
