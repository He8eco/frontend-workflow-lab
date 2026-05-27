import { Link, useParams } from 'react-router'

export function GameDetailsPage({
  games,
  error,
  loading,
  favorites,
  onToggleFavorite,
}) {
  const { id } = useParams()

  const game = games.find((game) => {
    return String(game.id) === id
  })

  const isFavorite = favorites.includes(game.id)

  if (loading) {
    return <p className="catalog-message">Loading game...</p>
  }

  if (error) {
    return <p className="catalog-message catalog-message--error">{error}</p>
  }

  if (!game) {
    return (
      <main className="details-page">
        <Link className="back-link" to="/">
          ← Back to catalog
        </Link>

        <section className="details-card">
          <p className="page-eyebrow">Not found</p>
          <h2>Game not found</h2>
          <p className="details-description">
            This game does not exist or is not available.
          </p>
        </section>
      </main>
    )
  }

  return (
    <main className="details-page">
      <Link className="back-link" to="/">
        ← Back to catalog
      </Link>

      <section className="details-card">
        <div className="details-cover"></div>

        <div className="details-content">
          <p className="page-eyebrow">{game.genre}</p>
          <h2>{game.title}</h2>

          <p className="details-description">{game.description}</p>

          <div className="details-grid">
            <div>
              <span>Rating</span>
              <strong>{game.rating}</strong>
            </div>

            <div>
              <span>Release year</span>
              <strong>{game.releaseYear}</strong>
            </div>

            <div>
              <span>Developer</span>
              <strong>{game.developer}</strong>
            </div>

            <div>
              <span>Platforms</span>
              <strong>{game.platforms.join(', ')}</strong>
            </div>
          </div>
          <button
            className="favorite-button details-favorite-button"
            type="button"
            onClick={() => onToggleFavorite(game.id)}
          >
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </button>
        </div>
      </section>
    </main>
  )
}
