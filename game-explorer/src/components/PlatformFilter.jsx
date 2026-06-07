import { Form } from 'react-bootstrap'

export function PlatformFilter({ platform, setPlatform, platforms }) {
  return (
    <Form.Group controlId="platform-filter">
      <Form.Select
        value={platform}
        onChange={(event) => setPlatform(event.target.value)}
        aria-label="Filter by platform"
      >
        <option value="all">All platforms</option>

        {platforms.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}