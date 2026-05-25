import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { getGames } from './api/gameApi'
import { GameList } from './components/GameList'

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

  let catalogContent

  if (loading) {
    catalogContent = <p>Loading games...</p>
  } else if (error) {
    catalogContent = <p>{error}</p>
  } else if (games.length === 0) {
    catalogContent = <p>No games found</p>
  } else {
    catalogContent = <GameList games={games}/>
  }

  return (
    <div className="container">
      <Header />
      {catalogContent}
    </div>
  )
}

export default App
