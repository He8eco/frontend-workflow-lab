import { NavLink } from 'react-router'

export function Header() {
  return (
    <header className="header">
      <div>
        <p className="header__eyebrow">Stage 6 React SPA</p>
        <h1>Game Explorer</h1>
      </div>
      <nav className="header-nav" aria-label="Main navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? 'header-nav__link header-nav__link--active'
              : 'header-nav__link'
          }
        >
          Catalog
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive
              ? 'header-nav__link header-nav__link--active'
              : 'header-nav__link'
          }
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  )
}
