export function SortSelect({sort, setSort}) {
  return (
    <select value={sort} onChange={(event) => setSort(event.target.value)}>
      <option value="default">Default</option>
      <option value="rating-desc">Rating: high to low</option>
      <option value="rating-asc">Rating: low to high</option>
      <option value="title-asc">Title: A-Z</option>
      <option value="year-desc">Release year: newest</option>
      <option value="year-asc">Release year: oldest</option>
    </select>
  )
}
