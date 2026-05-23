import { Link, useParams } from 'react-router'

export function GameDetailsPage({
  games,
  loading,
  error,
  favorites,
  setFavorites,
}) {
  const { id } = useParams()

  const game = games.find((game) => {
    return String(game.id) === id
  })

  function handleToggleFavorite() {
    if (!game) {
      return
    }

    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(game.id)) {
        return currentFavorites.filter((favoriteId) => favoriteId !== game.id)
      }

      return [...currentFavorites, game.id]
    })
  }

  if (loading) {
    return <p className="catalog-message">Loading game...</p>
  }

  if (error) {
    return <p className="catalog-message error-message">{error}</p>
  }

  if (!game) {
    return (
      <section className="header">
        <h2>Game not found</h2>
        <p>This game does not exist or is not available.</p>

        <Link className="app-nav__link back-to-catalog" to="/">
          ← Back to catalog
        </Link>
      </section>
    )
  }

  const isFavorite = favorites.includes(game.id)

  return (
    <section className="header game-details">
      <Link className="app-nav__link back-to-catalog" to="/">
        ← Back to catalog
      </Link>

      <article className="game-details__card">
        <h2>{game.title}</h2>

        <p>
          <strong>Genre:</strong> {game.genre}
        </p>

        <p>
          <strong>Platform:</strong> {game.platform}
        </p>

        <p>
          <strong>Rating:</strong> {game.rating}
        </p>

        <p>
          <strong>Year:</strong> {game.year}
        </p>

        <button
          className="game-card__favorite-button"
          type="button"
          onClick={handleToggleFavorite}
        >
          {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </article>
    </section>
  )
}
