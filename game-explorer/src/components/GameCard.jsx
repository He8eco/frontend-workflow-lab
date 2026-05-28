import { Link } from 'react-router'

export function GameCard({ game, isFavorite, onToggleFavorite }) {
  return (
    <article className="game-card">
      <div className="cover">
        {game.coverUrl && (
          <img src={game.coverUrl} alt={`${game.title} cover`} />
        )}
      </div>

      <div className="game-characteristics">
        <p className="game-title">{game.title}</p>
        <p className="game-rating">Rating: {game.rating}</p>
        <p className="game-genre">Genre: {game.genre}</p>
        <p className="game-platform">Platforms: {game.platforms.join(', ')}</p>
        <p className="game-release">Release year: {game.releaseYear}</p>
        <div className="game-card__actions">
          <Link className="game-card__link" to={`/games/${game.id}`}>
            View details
          </Link>

          <button
            className="favorite-button"
            type="button"
            onClick={() => onToggleFavorite(game.id)}
          >
            {isFavorite ? 'Remove' : 'Favorite'}
          </button>
        </div>
      </div>
    </article>
  )
}
