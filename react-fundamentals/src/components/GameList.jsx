import { GameCard } from './GameCard'

export function GameList({ games }) {
  return (
    <section className="game-list-section">
      <div className="game-list-section__header">
        <h2>Games</h2>
        <p>{games.length} games found</p>
      </div>
      {games.length === 0 ? (
        <p className="game-list-section__empty">No games found.</p>
      ) : (
        <div className="game-list">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </section>
  )
}
