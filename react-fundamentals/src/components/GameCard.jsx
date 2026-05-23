import { Link } from 'react-router'

export function GameCard({ game, isFavorite, onToggleFavorite }) {
  return (
    <article className="game-card">
      <div className="game-card__cover">
        <span>{game.title.slice(0, 1)}</span>
      </div>

      <div className="game-card__body">
        <p className="game-card__meta">
          {game.genre} · {game.platform}
        </p>

        <h2 className="game-card__title">{game.title}</h2>

        <div className="game-card__details">
          <span>{game.year}</span>
          <span>Rating {game.rating}</span>
        </div>
        <button
          className="game-card__favorite-button"
          type="button"
          onClick={() => onToggleFavorite(game.id)}
        >
          {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </div>
      <Link className="app-nav__link view-details" to={`/games/${game.id}`}>
        View details
      </Link>
    </article>
  )
}
