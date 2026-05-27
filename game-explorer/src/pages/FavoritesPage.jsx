import { GameList } from '../components/GameList'

export function FavoritesPage({
  games,
  loading,
  error,
  favorites,
  onToggleFavorite,
}) {
  const favoriteGames = games.filter((game) => {
    favorites.includes(game.id)
  })

  let favoritesContent

  if (loading) {
    favoritesContent = <p className="catalog-message">Loading games...</p>
  } else if (error) {
    favoritesContent = (
      <p className="catalog-message catalog-message--error">{error}</p>
    )
  } else if (favoriteGames.length === 0) {
    favoritesContent = <p className="catalog-message">No favorite games yet.</p>
  } else {
    favoritesContent = (
      <GameList
        games={favoriteGames}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    )
  }

  return (
    <main className="favorites-page">
      <p className="page-eyebrow">Saved games</p>
      <h2>Favorites</h2>

      {favoritesContent}
    </main>
  )
}
