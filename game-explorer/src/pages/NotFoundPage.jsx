import { Link } from 'react-router'
import { CatalogState } from '../components/CatalogState'

export function NotFoundPage() {
  return (
    <main className="not-found-page">
      <p className="page-eyebrow">404</p>
      <h2>Page not found</h2>

      <CatalogState
        type="not-found"
        title="This page does not exist"
        message="Check the URL or go back to the catalog."
      />

      <Link className="back-link" to="/">
        ← Back to catalog
      </Link>
    </main>
  )
}
