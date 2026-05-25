export function GameCard({game}) {
  return (
    <div className="game-card">
      <div className="cover"></div>
      <div className="game-characteristics">
        <p className="game-title">{game.title}</p>
        <p className="game-rating">Rating: {game.rating}</p>
        <p className="game-genre">Genre: {game.genre}</p>
        <p className="game-platform">platforms: {game.platforms.join(', ')}</p>
        <p className="game-release">Release year: {game.releaseYear}</p>
      </div>
    </div>
  )
}
