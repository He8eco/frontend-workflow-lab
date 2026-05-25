export function RatingFilter({minRating, setMinRating}) {
    return (
      <select
        value={minRating}
        onChange={(event) => setMinRating(Number(event.target.value))}
      >
        <option value="0">All ratings</option>
        <option value="8">8+</option>
        <option value="9">9+</option>
        <option value="9.5">9.5+</option>
      </select>)
}