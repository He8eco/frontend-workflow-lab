export function RatingFilter({ minRating, onMinRatingChange }) {
  return (
    <section className="filter-panel" aria-label="Rating filter">
      <label className="filter-panel__label" htmlFor="game-rating">
        Minimum rating
      </label>

      <select
        id="game-rating"
        className="filter-panel__select"
        value={minRating}
        onChange={(event) => onMinRatingChange(Number(event.target.value))}
      >
        <option value="0">Any rating</option>
        <option value="8">8+</option>
        <option value="9">9+</option>
        <option value="9.5">9.5+</option>
      </select>
    </section>
  )
}