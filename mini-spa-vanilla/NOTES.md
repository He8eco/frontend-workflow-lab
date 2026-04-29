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