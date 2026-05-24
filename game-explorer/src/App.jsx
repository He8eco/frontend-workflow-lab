import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { getGames } from './api/gameApi'

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
    catalogContent = (
      <div className="game-list">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <div className="cover"></div>
            <div className="game-characteristics">
              <p className="game-title">{game.title}</p>
              <p className="game-rating">Rating: {game.rating}</p>
              <p className="game-genre">Genre: {game.genre}</p>
              <p className="game-platform">
                platforms: {game.platforms.join(', ')}
              </p>
              <p className="game-release">Release year: {game.releaseYear}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="container">
      <Header />
      {catalogContent}
    </div>
  )
}

export default App
