import { GameCard } from './GameCard'

export function GameList({ games, favorites, onToggleFavorite }) {
  const hasGames = games.length > 0

  return (
    <section className="game-list-section">
      <div className="game-list-section__header">
        <h2>Games</h2>
        <p>{games.length} games found</p>
      </div>
      {hasGames ? (
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
      ) : (
        <p className="game-list-section__empty">No games found.</p>
      )}
    </section>
  )
}
