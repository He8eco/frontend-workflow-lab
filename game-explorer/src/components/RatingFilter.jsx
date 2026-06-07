import { Form } from 'react-bootstrap'

export function RatingFilter({ minRating, setMinRating }) {
  return (
    <Form.Group controlId="rating-filter">
      <Form.Select
        value={minRating}
        onChange={(event) => setMinRating(Number(event.target.value))}
        aria-label="Filter by minimum rating"
      >
        <option value="0">All ratings</option>
        <option value="8">8+</option>
        <option value="9">9+</option>
        <option value="9.5">9.5+</option>
      </Form.Select>
    </Form.Group>
  )
}