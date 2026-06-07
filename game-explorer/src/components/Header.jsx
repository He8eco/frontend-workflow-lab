import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router'

export function Header({ favoritesCount }) {
  return (
    <Navbar className="header" expand="lg">
      <Container fluid className="header__container">
        <Navbar.Brand as={NavLink} to="/" className="header__brand">
          <span className="header__eyebrow">Stage 6 React SPA</span>
          <span className="header__title">Game Explorer</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navigation"
          className="header__toggle"
        />

        <Navbar.Collapse id="main-navigation">
          <Nav className="header-nav ms-lg-auto">
            <NavLink
              as={NavLink}
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
              as={NavLink}
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? 'header-nav__link header-nav__link--active'
                  : 'header-nav__link'
              }
            >
              Favorites ({favoritesCount})
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
