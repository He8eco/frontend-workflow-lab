import { Form } from 'react-bootstrap'

export function GenreFilter({ genre, setGenre, genres }) {
  return (
    <Form.Group controlId="genre-filter">
      <Form.Select
        value={genre}
        onChange={(event) => setGenre(event.target.value)}
        aria-label="Filter by genre"
      >
        <option value="all">All genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}
