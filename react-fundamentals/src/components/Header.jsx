export function Header({favoritesCount}) {
  return (
    <header className="header">
      <p className="header__eyebrow">Stage 5 · React Fundamentals</p>
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
