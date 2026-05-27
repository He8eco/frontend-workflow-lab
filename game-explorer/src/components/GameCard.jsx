import { Link } from 'react-router'

export function GameCard({ game }) {
  return (
    <article className="game-card">
      <div className="cover"></div>

      <div className="game-characteristics">
        <p className="game-title">{game.title}</p>
        <p className="game-rating">Rating: {game.rating}</p>
        <p className="game-genre">Genre: {game.genre}</p>
        <p className="game-platform">Platforms: {game.platforms.join(', ')}</p>
        <p className="game-release">Release year: {game.releaseYear}</p>
        <Link className="game-card__link" to={`/games/${game.id}`}>
          View details
        </Link>
      </div>
    </article>
  )
}
