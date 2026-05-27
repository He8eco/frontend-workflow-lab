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