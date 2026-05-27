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