import { GameCard } from './GameCard'

export function GameList({ games, favorites, onToggleFavorite }) {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          isFavorite={favorites.includes(game.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}
