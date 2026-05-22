import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section className="not-found-page">
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to="/">Back to catalog</Link>
    </section>
  )
}
