import { Form } from 'react-bootstrap'

export function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <Form.Group className="search-bar" controlId="game-search">
      <Form.Control
        type="search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search games..."
        aria-label="Search games by title"
      />
    </Form.Group>
  )
}
