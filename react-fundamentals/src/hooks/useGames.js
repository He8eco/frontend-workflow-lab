import { useCallback, useEffect, useState } from 'react'
import { getGames } from '../api/gameApi'

export function useGames() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadGames = useCallback(async (signal) => {
    setLoading(true)
    setError(null)

    try {
      const loadedGames = await getGames({ signal })

      setGames(loadedGames)
    } catch (error) {
      if (error.name === 'AbortError') {
        return
      }

      console.error(error)

      setGames([])
      setError('Failed to load games')
    } finally {
      if (!signal?.aborted) {
        setLoading(false)
      }
    }
  }, [])

  const reloadGames = useCallback(() => {
    loadGames()
  }, [loadGames])

  useEffect(() => {
    const controller = new AbortController()

    loadGames(controller.signal)

    return () => {
      controller.abort()
    }
  }, [loadGames])

  return {
    games,
    loading,
    error,
    reloadGames,
  }
}
