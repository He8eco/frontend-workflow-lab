import { Link, useParams } from 'react-router'
import { CatalogState } from '../components/CatalogState'

export function GameDetailsPage({
  games,
  loading,
  error,
  favorites,
  onToggleFavorite,
}) {
  const { id } = useParams()

  const game = games.find((game) => {
    return String(game.id) === id
  })

  if (loading) {
    return (
      <CatalogState
        type="loading"
        title="Loading game"
        message="Please wait while game details are loading."
      />
    )
  }

  if (error) {
    return (
      <CatalogState type="error" title="Failed to load game" message={error} />
    )
  }

  if (!game) {
    return (
      <main className="details-page">
        <Link className="back-link" to="/">
          ← Back to catalog
        </Link>

        <CatalogState
          type="not-found"
          title="Game not found"
          message="This game does not exist or is not available."
        />
      </main>
    )
  }

  const isFavorite = favorites.includes(game.id)
  return (
    <main className="details-page">
      <Link className="back-link" to="/">
        ← Back to catalog
      </Link>

      <section className="details-card">
        <div className="details-cover">
          {game.coverUrl && (
            <img src={game.coverUrl} alt={`${game.title} cover`} />
          )}
        </div>

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
