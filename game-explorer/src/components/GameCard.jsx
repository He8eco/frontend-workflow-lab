import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router'

export function GameCard({ game, isFavorite, onToggleFavorite }) {
  return (
    <Card className="game-card">
      <div className="cover">
        {game.coverUrl && (
          <Card.Img src={game.coverUrl} alt={`${game.title} cover`} />
        )}
      </div>

      <Card.Body className="game-characteristics">
        <Card.Title className="game-title">{game.title}</Card.Title>
        <Card.Text className="game-rating">Rating: {game.rating}</Card.Text>
        <Card.Text className="game-genre">Genre: {game.genre}</Card.Text>
        <Card.Text className="game-platform">
          Platforms: {game.platforms.join(', ')}
        </Card.Text>
        <Card.Text className="game-release">
          Release year: {game.releaseYear}
        </Card.Text>
        <div className="game-card__actions">
          <Button
            as={Link}
            className="game-card__link"
            to={`/games/${game.id}`}
          >
            View details
          </Button>

          <Button
            className="favorite-button"
            type="button"
            onClick={() => onToggleFavorite(game.id)}
          >
            {isFavorite ? 'Remove' : 'Favorite'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
