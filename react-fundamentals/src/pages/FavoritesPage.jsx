import { GameList } from '../components/GameList'

export function FavoritesPage({
  games,
  loading,
  error,
  favorites,
  setFavorites,
}) {
  const favoriteGames = games.filter((game) => {
    return favorites.includes(game.id)
  })

  function handleToggleFavorite(gameId) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(gameId)) {
        return currentFavorites.filter((favoriteId) => favoriteId !== gameId)
      }

      return [...currentFavorites, gameId]
    })
  }

  let favoritesContent

  if (loading) {
    favoritesContent = <p className="catalog-message">Loading games...</p>
  } else if (error) {
    favoritesContent = <p className="catalog-message error-message">{error}</p>
  } else if (favoriteGames.length === 0) {
    favoritesContent = <p className="catalog-message">No favorite games yet.</p>
  } else {
    favoritesContent = (
      <GameList
        games={favoriteGames}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    )
  }

  return (
    <section className='header'>
      <h2>Favorite games</h2>

      {favoritesContent}
    </section>
  )
}