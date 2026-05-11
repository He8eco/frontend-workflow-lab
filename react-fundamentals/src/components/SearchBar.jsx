export function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <section className="search-panel" aria-label="Game search">
      <label className="search-panel__label" htmlFor="game-search">
        Search games
      </label>

      <input
        id="game-search"
        className="search-panel__input"
        type="search"
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search by title..."
      />
    </section>
  )
}