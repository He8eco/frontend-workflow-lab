import { GameList } from '../components/GameList'
import { CatalogState } from '../components/CatalogState'
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
    favoritesContent = (
      <CatalogState
        type="loading"
        title="Loading favorites"
        message="Please wait while your saved games are loading."
      />
    )
  } else if (error) {
    favoritesContent = (
      <CatalogState
        type="error"
        title="Failed to load favorites"
        message={error}
      />
    )
  } else if (favoriteGames.length === 0) {
    favoritesContent = (
      <CatalogState
        type="empty"
        title="No favorite games yet"
        message="Add games to favorites from the catalog or details page."
      />
    )
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
      <header className="page-header">
        <p className="page-eyebrow">Saved games</p>
        <h2>Favorites</h2>
        <p className="page-description">
          Your favorite games are saved locally in this browser.
        </p>
      </header>

      {favoritesContent}
    </main>
  )
}
