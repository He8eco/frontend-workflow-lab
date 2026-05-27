import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { getGames } from './api/gameApi'
import {Routes, Route} from 'react-router'
import { CatalogPage } from './pages/CatalogPage'

function App() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

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
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<CatalogPage games={games} loading={loading} error={error}/>}/>
      </Routes>
    </div>
  )
}

export default App
