import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section className="header">
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link className='app-nav__link' to="/">← Back to catalog</Link>
    </section>
  )
}
