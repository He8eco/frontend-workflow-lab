import { Route, Routes } from 'react-router'
import { Header } from './components/Header'
import { useGames } from './hooks/useGames'
import { useLocalStorage } from './hooks/useLocalStorage'
import { CatalogPage } from './pages/CatalogPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { GameDetailsPage } from './pages/GameDetailsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import './App.css'

export default function App() {
  const { games, loading, error, reloadGames } = useGames()
  const [favorites, setFavorites] = useLocalStorage('favoriteGames', [])
  return (
    <main className="app">
      <Header favoritesCount={favorites.length} />

      <Routes>
        <Route
          path="/"
          element={
            <CatalogPage
              games={games}
              loading={loading}
              error={error}
              reloadGames={reloadGames}
              favorites={favorites}
              setFavorites={setFavorites}
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
              setFavorites={setFavorites}
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
              setFavorites={setFavorites}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  )
}
