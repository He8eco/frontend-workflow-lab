# Notes

## Block 1
- Created the `mini-spa-vanilla` project for Stage 4
- Selected movie catalog as the project theme
- Initialized a Vite vanilla project
- Added base project files: README, NOTES, TODO

## Block 2
- Project workflow rule: one feature = one branch + one PR
- Branch names should clearly describe the feature
- NOTES.md is used for decisions, pitfalls and conclusions
- TODO.md is used as the project route, not just a random checklist

## Common pitfalls
- Do not mix multiple features in one branch
- Do not keep project decisions only in memory
- Do not use meaningless branch names

## Block 3
- Built the first application shell for the movie catalog project
- Added header, controls area, catalog section, status section and pagination section
- The project now looks like a small application instead of an empty training template
- The current UI is still static and acts as a base for upcoming features

## Substage 1 — Block 0
- As the project grows, keeping everything in one `main.js` becomes hard to manage
- API logic, state, UI rendering, event handlers and utils should not be mixed together
- Architecture is needed in vanilla JS too, not only in React projects
- The goal is not complexity, but separation of responsibilities and easier project growth

## Substage 1 — Block 1
- Added the first project structure by roles: `api`, `state`, `ui`, `utils`
- `main.js` stays as the application entry point
- The goal of this structure is separation of responsibilities, not unnecessary complexity
- The project now has a cleaner base for future features

## Substage 1 — Block 2
- The app should have one source of truth: a central state object
- UI should not be the source of truth, it should reflect the current state
- The main flow is: event → state change → rerender
- State already needs to include movies, loading, error, search, genre, sort, page and favorites

## Substage 1 — Block 3
- Moved the main application layout out of `main.js` into `ui/renderApp.js`
- `main.js` now works as a clean entry point
- The first render is now based on `initialState`
- The project starts through modules, not through one large file

## Substage 2 — Block 0
- Added the first movie data source
- The app now loads movie data on startup
- The loaded movies are stored in state
- The UI rerenders after movies are loaded
- The app now begins to work with real catalog data instead of only placeholders

## Substage 2 — Block 1
- Replaced static placeholder cards with real movie card rendering
- The catalog now renders cards from `state.movies`
- Added a separate card renderer and movie list renderer
- The UI now reflects real catalog data instead of hardcoded placeholders

## Substage 2 — Block 2
- Added basic UI states for the catalog: loading, error and empty
- The catalog now renders different content depending on state
- UI no longer assumes that movie data is always available
- Loading, error and empty states are handled separately

## Substage 2 — Block 3
- Added manual catalog reload button
- The movie loading logic is now reusable through `loadMovies()`
- The catalog can now be reloaded both on app start and by user action
- UI states still work correctly during repeated loading

## Substage 3 — Block 0
- Search in the catalog should be part of application state
- The current search query is stored in `state.search`
- Search should affect the rendered movie list, not exist separately from the catalog
- At this stage search will work by movie title only

## Substage 3 — Block 1
- Connected the search input to `state.search`
- The search field now updates application state on every input event
- The app rerenders after search state changes
- The input value is now synced with the current state

## Substage 3 — Block 2
- Added movie filtering by `title`
- Search is now case-insensitive
- Empty search returns the full movie list
- The catalog now renders filtered movies instead of always rendering all movies
- Result count is based on filtered movies

## Substage 3 — Block 3
- Added debounce for the search input
- Search now updates state with a small delay instead of rerendering immediately on every keystroke
- Search change now resets the current page to 1
- Search behavior is now closer to a real catalog application

## Substage 3 — Block 4
- Added a clear search button
- Search reset now clears `state.search`
- Search reset also resets the current page to 1
- The catalog can now return to the full movie list through a clear user action

## Substage 4 — Block 0

- Filters are part of application state, not just UI controls.
- Genre filter will be stored in `state.genre`.
- Rating filter will be stored in `state.minRating`.
- `genre: 'all'` means no genre filter.
- `minRating: 0` means no rating filter.
- The future data flow should be: search → filters → sorting → pagination.

## Substage 4 — Block 1

- Added the first real filter: genre.
- Genre select now updates `state.genre`.
- Genre change resets `state.page` to 1.
- `getFilteredMovies(state)` now applies search first and genre filter second.
- `genre: 'all'` means the genre filter is disabled.
- Search and genre filter can now work together.

## Substage 4 — Block 2

- Added the second filter: minimum rating.
- Rating select now updates `state.minRating`.
- `state.minRating` is stored as a number using `Number(event.target.value)`.
- Rating change resets `state.page` to 1.
- `getFilteredMovies(state)` now applies search, genre, and min rating.
- `minRating: 0` means the rating filter is disabled.

## Substage 4 — Block 3

- Search, genre, and min rating now work as one combined filtering pipeline.
- `state.movies` remains the full source list.
- `filteredMovies` is derived from `state.movies`, `state.search`, `state.genre`, and `state.minRating`.
- Filters are applied only when their state values are active.
- The current data flow is: search → genre → minRating.
- Future data flow will be: search → filters → sorting → pagination.

## Substage 4 — Block 4

- Added reset filters behavior.
- Reset filters clears `state.search`.
- Reset filters sets `state.genre` back to `all`.
- Reset filters sets `state.minRating` back to `0`.
- Reset filters resets `state.page` to `1`.
- UI is reset through state update + render, not by manually changing DOM values.

## Substage 5 — Block 0

- Sorting changes the order of items, filtering changes which items are included.
- Selected sorting should be stored in `state.sortBy`.
- `sortBy: 'default'` means no custom sorting.
- JavaScript `.sort()` mutates the original array.
- We should not sort `state.movies` directly.
- Before sorting, create a copy of the array with `[...movies]`.
- Planned sorting values:
  - `default`
  - `title-asc`
  - `title-desc`
  - `rating-desc`
  - `rating-asc`
- Future data flow: search → filters → sorting → pagination.

## Substage 5 — Block 1

- Connected sort select to `state.sortBy`.
- Added sort options:
  - `default`
  - `title-asc`
  - `title-desc`
  - `rating-desc`
  - `rating-asc`
- Sort select change resets `state.page` to 1.
- Selected sort option is preserved after render because options use `state.sortBy`.
- Sorting logic will be implemented in the next blocks.