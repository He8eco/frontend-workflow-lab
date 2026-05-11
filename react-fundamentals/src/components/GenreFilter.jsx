export function GenreFilter({ genre, onGenreChange }) {
  return (
    <section className="filter-panel" aria-label="Genre filter">
      <label className="filter-panel__label" htmlFor="game-genre">
        Genre
      </label>

      <select
        id="game-genre"
        className="filter-panel__select"
        value={genre}
        onChange={(event) => onGenreChange(event.target.value)}
      >
        <option value="all">All genres</option>
        <option value="RPG">RPG</option>
        <option value="Action RPG">Action RPG</option>
        <option value="Action Adventure">Action Adventure</option>
        <option value="Shooter">Shooter</option>
        <option value="Roguelike">Roguelike</option>
        <option value="Metroidvania">Metroidvania</option>
        <option value="CRPG">CRPG</option>
        <option value="Survival Horror">Survival Horror</option>
      </select>
    </section>
  )
}
