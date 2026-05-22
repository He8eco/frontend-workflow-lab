import { Route, Routes } from 'react-router'
import { CatalogPage } from './pages/CatalogPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { GameDetailsPage } from './pages/GameDetailsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import './App.css'

export default function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/games/:id" element={<GameDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  )
}
