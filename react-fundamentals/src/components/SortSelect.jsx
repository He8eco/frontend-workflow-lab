export function SortSelect({ sort, onSortChange }) {
  return (
    <section className="sort-panel" aria-label="Game sorting">
      <label className="sort-panel__label" htmlFor="game-sort">
        Sort games
      </label>

      <select
        id="game-sort"
        className="sort-panel__select"
        value={sort}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="default">Default</option>
        <option value="rating-desc">Rating high to low</option>
        <option value="year-desc">Newest first</option>
        <option value="title-asc">Title A-Z</option>
      </select>
    </section>
  )
}