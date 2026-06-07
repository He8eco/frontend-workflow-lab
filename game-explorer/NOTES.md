## Stage 6 — Substage 4 — Catalog components

- Created `GameList` component.
- Created `GameCard` component.
- Moved game list markup out of `App.jsx`.
- `GameList` receives `games` through props.
- `GameList` renders `GameCard` for each game.
- `GameCard` receives one `game` through props.
- `key={game.id}` is used when rendering the list.
- `App.jsx` now focuses more on loading state and page composition.

## Stage 6 — Substage 5 — Controls components

- Moved catalog controls markup out of `App.jsx`.
- Created `GameControls` component.
- Created separate control components for search, genre, platform, rating, sort, and reset.
- `App.jsx` still owns control state and derived catalog data.
- Control components receive values and handlers through props.
- Search, filters, sorting, and reset still work after refactoring.

## Stage 6 — Substage 6 — Load more

- Added `visibleCount` state.
- Added client-side Load more behavior.
- `visibleGames` is created with `sortedGames.slice(0, visibleCount)`.
- `GameList` receives `visibleGames`.
- Empty state is still based on `sortedGames.length`.
- `hasMoreGames` checks whether there are more games to show.
- Load more increases `visibleCount`.
- Reset controls also resets `visibleCount`.

## Stage 6 — Substage 8 — Header navigation

- Added header navigation with `NavLink`.
- Added route for `/favorites`.
- Added temporary `FavoritesPage`.
- `Catalog` link uses `end` so it is active only on `/`.
- Header navigation uses SPA navigation without full page reload.

## Stage 6 — Substage 9 — Game details page

- Added `GameDetailsPage`.
- Added `/games/:id` route.
- Used `useParams()` to read game id from URL.
- Game lookup uses `String(game.id) === id`.
- Added loading, error, not found, and success states.
- Added details links from game cards.

## Stage 6 — Substage 10 — Favorites

- Added favorites state in `App.jsx`.
- Favorites are stored as game ids.
- Added `handleToggleFavorite(gameId)`.
- Favorites are persisted in `localStorage`.
- Header shows favorite games count.
- Game cards can add/remove games from favorites.
- Game details page can add/remove game from favorites.
- Favorites page renders favorite games.
- Empty favorites state shows `No favorite games yet.`

## Stage 6 — Substage 11 — Not found page

- Added `NotFoundPage`.
- Added catch-all route with `path="*"`.
- Unknown URLs now render a 404 page.
- `Game not found` is different from route-level 404.
- `/games/:id` can exist even if the game id is invalid.

## Stage 6 — Final Summary

- Built Game Explorer React SPA.
- Used local mock data through an API layer.
- Loaded games with async `getGames()`.
- Added loading, error, empty, and success states.
- Built catalog components:
  - `GameControls`
  - `GameList`
  - `GameCard`
- Added search, filters, sorting, reset controls, and Load more.
- Added React Router pages:
  - `CatalogPage`
  - `FavoritesPage`
  - `GameDetailsPage`
  - `NotFoundPage`
- Added favorites with localStorage persistence.
- Added details page with `useParams`.
- Added route-level 404 page.
- Polished UI styles.

## Stage 7 — Substage 0 — UI audit and redesign plan

- Started Stage 7 focused on UI, SCSS, Bootstrap, React-Bootstrap, and responsive design.
- Decided to improve the existing Game Explorer project instead of creating a new project.
- The current dark visual direction will be preserved.
- Bootstrap and React-Bootstrap will be used as structure/component tools.
- Custom SCSS will keep the project identity.
- Added `UI_GUIDE.md` to document UI goals, breakpoints, component rules, and redesign plan.

## Stage 7 — Substage 1 — SCSS setup and structure

- Installed Sass.
- Created SCSS structure in `src/styles`.
- Preserved the existing dark Game Explorer visual style.
- Moved global styles to `_globals.scss`.
- Added variables for colors, spacing, radii, shadows, and breakpoints.
- Added mixins for panels, gradients, responsive rules, and buttons.
- Split styles into component and page SCSS partials.
- Fixed responsive structure so tablet and mobile layouts are separated.
- `main.jsx` now imports `styles/index.scss`.

## Stage 7 — Substage 2 — Bootstrap base

- Installed `bootstrap` and `react-bootstrap`.
- Connected Bootstrap compiled CSS before custom SCSS.
- Custom SCSS remains the main visual layer for Game Explorer.
- Bootstrap will be used as a UI foundation for layout and components.
- No major UI refactor was done in this substage.

## Stage 7 — Substage 3 — Bootstrap layout

- Started using React-Bootstrap layout tools.
- Replaced the custom app width wrapper with React-Bootstrap `Container`.
- Used `fluid="xl"` to keep the layout responsive while limiting large desktop width.
- Kept custom SCSS as the main visual layer.
- Updated `.app` styles so Bootstrap controls horizontal layout and SCSS controls vertical spacing.

## Stage 7 — Substage 4 — React-Bootstrap Navbar

- Replaced custom header navigation with React-Bootstrap `Navbar`.
- Used `Navbar.Brand`, `Navbar.Toggle`, `Navbar.Collapse`, `Nav`.
- Preserved custom dark glass UI through SCSS.
- Added responsive burger menu behavior with `expand="lg"`.
- Kept active navigation styles custom instead of relying on default Bootstrap styles.
- Kept React Router `NavLink` directly inside React-Bootstrap `Nav` to preserve custom link styling.
- Avoided `Nav.Link as={NavLink}` because Bootstrap `.nav-link` styles conflicted with custom pill link styles.

## Stage 7 — Substage 5 — React-Bootstrap Forms

- Refactored catalog controls to use React-Bootstrap form components.
- Replaced native inputs/selects with `Form.Control` and `Form.Select`.
- Replaced reset button with React-Bootstrap `Button`.
- Preserved existing catalog filtering and sorting logic.
- Updated SCSS to style Bootstrap `.form-control`, `.form-select`, and `.btn` inside `.game-controls`.
- Kept the custom dark Game Explorer visual style.