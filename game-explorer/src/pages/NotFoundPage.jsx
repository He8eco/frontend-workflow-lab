import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <main className="not-found-page">
      <p className="page-eyebrow">404</p>
      <h2>Page not found</h2>
      <p className="catalog-message">
        The page you are looking for does not exist.
      </p>

      <Link className="back-link" to="/">
        ← Back to catalog
      </Link>
    </main>
  )
}
