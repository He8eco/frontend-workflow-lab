import { NavLink } from 'react-router'

export function Header({ favoritesCount }) {
  return (
    <header className="header">
      <div className='header__nav'>
        <p className="header__eyebrow">Stage 5 · React Fundamentals</p>

        <nav className="app-nav" aria-label="Main navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'app-nav__link app-nav__link--active' : 'app-nav__link'
            }
          >
            Catalog
          </NavLink>
          <NavLink
            to="/favorites"
            end
            className={({ isActive }) =>
              isActive ? 'app-nav__link app-nav__link--active' : 'app-nav__link'
            }
          >
            Favorites
          </NavLink>
        </nav>
      </div>
      <h1 className="header__title">React Game Library</h1>
      <p className="header__subtitle">
        Build your game collection while learning components, props, and state.
      </p>
      <p className="header__stats">
        Favorite games: <strong>{favoritesCount}</strong>
      </p>
    </header>
  )
}
