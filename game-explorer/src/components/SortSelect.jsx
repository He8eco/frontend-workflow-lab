import { Form } from 'react-bootstrap'

export function SortSelect({ sort, setSort }) {
  return (
    <Form.Group controlId="sort-select">
      <Form.Select
        value={sort}
        onChange={(event) => setSort(event.target.value)}
        aria-label="Sort games"
      >
        <option value="default">Default</option>
        <option value="rating-desc">Rating: high to low</option>
        <option value="rating-asc">Rating: low to high</option>
        <option value="title-asc">Title: A-Z</option>
        <option value="year-desc">Release year: newest</option>
        <option value="year-asc">Release year: oldest</option>
      </Form.Select>
    </Form.Group>
  )
}