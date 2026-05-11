# React Fundamentals Notes

## Stage 5 — Substage 0 — Block 0

- React is a library for building user interfaces.
- In this stage, React will replace manual DOM rendering from the vanilla JS project.
- React UI is based on components, props, state, and events.
- A component is a function that returns UI.
- JSX is a syntax that lets us describe UI inside JavaScript.
- Props are input data for components.
- Props are read-only inside the receiving component.
- State is data that can change over time.
- When state changes, React updates the UI.
- React does not replace JavaScript. It uses JavaScript.
- Arrays, objects, map, filter, sort, async/await, modules, and events are still required.
- The old Movie Catalog render pipeline will be rebuilt through React components.

## Stage 5 — Substage 0 — Block 1

- Created a separate Vite React project inside `frontend-workflow-lab/react-fundamentals`.
- Used the plain React template, not React TypeScript.
- Installed project dependencies with `npm install`.
- Started the development server with `npm run dev`.
- Vite runs the app locally and updates the browser during development.
- `src/main.jsx` is the entry point of the React app.
- `src/App.jsx` is the root app component for now.

## Stage 5 — Substage 0 — Block 2

- Cleaned the default Vite React template.
- Removed demo counter logic from `App.jsx`.
- Removed unused Vite and React logo imports.
- `App.jsx` now contains a minimal root component.
- `src/main.jsx` is the React entry point.
- `createRoot(...).render(...)` mounts the React app into `#root`.
- `index.css` contains global styles and base reset.
- `App.css` contains styles for the root `App` component.
- The project still runs after template cleanup.

## Stage 5 — Substage 0 — Block 3

- Created base project folders inside `src`.
- `components/` will store reusable UI components.
- `pages/` will store route-level page components.
- `hooks/` will store custom React hooks.
- `api/` will store data loading functions.
- `data/` will store temporary local mock data.
- `utils/` will store small pure helper functions.
- Added `.gitkeep` files because Git does not track empty folders.
- The app still runs after creating the folder structure.

## Stage 5 — Substage 0 — Block 4

- Added project learning documentation.
- `README.md` describes the project goal, tech stack, learning goals, structure, and scripts.
- `NOTES.md` stores learning notes, important conclusions, and common mistakes.
- `TODO.md` stores the checklist for Stage 5 progress.
- Documentation files are stored inside `react-fundamentals/`, not in the root of `frontend-workflow-lab`.
- `README.md` is for understanding what the project is and how to run it.
- `NOTES.md` is for personal learning notes.
- `TODO.md` is for tracking completed and upcoming work.
- Documentation helps keep the learning stage structured instead of turning the project into random files.

## Stage 5 — Substage 0 — Block 5

- Verified the React project foundation.
- Checked that the dev server starts correctly.
- Checked that the production build works with `npm run build`.
- Verified that the project structure is ready for React components.
- Checked that `node_modules`, `dist`, and local env files should not be committed.
- `.gitignore` should include dependencies, build output, and local environment files.
- Prettier config keeps formatting consistent.
- ESLint can be used to catch basic code issues.
- Substage 0 is complete when the project foundation is clean and committed.

## Stage 5 — Substage 1 — Block 0

- The Stage 5 project will be a React Game Library.
- The project is not a copy of the previous Movie Catalog.
- It uses a similar catalog structure to practice React fundamentals on a familiar pattern.
- A game item will have fields like `id`, `title`, `year`, `genre`, `platform`, `rating`, and `cover`.
- The first component structure will be `App → Header / SearchBar / GameList → GameCard`.
- `App` will initially own the main state.
- Props will pass data down from parent components to child components.
- Events will go up through callback functions.
- The main data flow is: state lives up, props go down, events go up.

## Stage 5 — Substage 1 — Block 1

- Created the first React component: `Header`.
- A React component is a function that returns JSX.
- Component names should start with a capital letter.
- Lowercase JSX tags are treated as HTML elements.
- Uppercase JSX tags are treated as React components.
- `Header` is exported from `src/components/Header.jsx`.
- `App.jsx` imports `Header` and renders it as `<Header />`.
- `App` now starts becoming a component composition instead of storing all UI directly.

## Stage 5 — Substage 1 — Block 2

- Added local game data in `src/data/games.js`.
- Local data is used first to focus on React components, props, and state without API complexity.
- Each game has `id`, `title`, `year`, `genre`, `platform`, `rating`, and `cover`.
- `id` will be used later as a stable React `key`, for favorites, and for details routes.
- `games.js` exports the games array as a named export.
- The app can import local data with `import { games } from './data/games'`.
- The UI does not render the games yet. Rendering will be handled by `GameList` and `GameCard` in the next block.

## Stage 5 — Substage 1 — Block 3

- Created `GameList` and `GameCard` components.
- `App` imports local `games` data.
- `App` passes the full games array to `GameList` as a prop.
- `GameList` receives `games` and renders a list with `.map()`.
- `GameCard` receives one `game` object as a prop.
- The data flow is `App → GameList → GameCard`.
- `key={game.id}` is used for list items because `id` is stable.
- `GameCard` displays game title, year, genre, platform, and rating.
- Cover images are not used yet; a placeholder with the first title letter is shown instead.

## Stage 5 — Substage 1 — Block 4

- Added the first React state: `searchQuery`.
- `useState('')` creates a state value and a setter function.
- `searchQuery` stores the current search input value.
- `setSearchQuery` updates the search state.
- `SearchBar` receives `searchQuery` and `onSearchChange` through props.
- The search input is controlled because its `value` comes from React state.
- `onChange` sends the new input value back to `App`.
- `App` calculates `filteredGames` from `games` and `searchQuery`.
- `GameList` receives `filteredGames`, not the original full array.
- Empty search shows all games because every string includes an empty string.
- `trim().toLowerCase()` makes search more predictable.
- Added empty state when no games match the search.

## Stage 5 — Substage 1 — Block 5

- Added `favorites` state in `App`.
- Favorites are stored as an array of game ids, not full game objects.
- `handleToggleFavorite(gameId)` adds or removes a game id from favorites.
- State arrays should not be mutated directly.
- Use `.filter()` to remove an item from an array.
- Use spread syntax `[...currentFavorites, gameId]` to add an item immutably.
- `setFavorites((currentFavorites) => ...)` uses the current state value safely.
- `App` passes `favorites` and `onToggleFavorite` down to `GameList`.
- `GameList` calculates `isFavorite` for each game.
- `GameCard` receives `isFavorite` and `onToggleFavorite`.
- `GameCard` does not own favorites state; it only calls the callback when clicked.
- Favorites reset after page reload because they are stored only in React state for now.

## Stage 5 — Substage 1 — Block 6

- Reviewed the first React component structure.
- `App` owns the main state: `searchQuery` and `favorites`.
- `filteredGames` is derived data, not separate state.
- Derived data should usually be calculated from existing data instead of stored separately.
- `SearchBar` receives `searchQuery` and `onSearchChange`.
- `GameList` receives filtered games, favorites, and favorite toggle handler.
- `GameCard` receives one game, `isFavorite`, and `onToggleFavorite`.
- Added `favoritesCount` prop to `Header`.
- `Header` shows favorite count but does not own favorites state.
- Props go down from `App` to child components.
- Events go up through callback functions.
- Substage 1 closes with working components, props, state, search, and favorites.

## Stage 5 — Substage 2 — Block 0

- React renders lists by mapping arrays to JSX elements.
- `.map()` transforms data items into components.
- `key` helps React match list items between renders.
- A stable `id` is a good key because it belongs to the item, not to the position.
- `index` is a risky key when a list can be filtered, sorted, inserted into, or deleted from.
- `key={game.id}` is used by React internally.
- `key` is not passed to the child component as a normal prop.
- If a component needs an id, pass it explicitly or use `game.id`.
- In this project, favorites are tied to game ids, not card positions.
- The best model: `key` is for React, props are for components.

## Stage 5 — Substage 2 — Block 1

- Reviewed the current `GameList` rendering flow.
- `App` passes `filteredGames` to `GameList` as the `games` prop.
- `GameList` receives the full list it needs to render.
- `.map()` takes one `game` at a time and returns a `GameCard`.
- `game` inside `.map()` is just the current array item.
- `key={game.id}` is for React list tracking.
- `game={game}` is a normal prop for `GameCard`.
- `key` and `game` are not the same thing.
- `isFavorite` is calculated in `GameList` with `favorites.includes(game.id)`.
- `onToggleFavorite` is passed through `GameList` to `GameCard`.
- Added `hasGames` for a clearer list/empty conditional render.

## Stage 5 — Substage 2 — Block 2

- Added `sort` state in `App`.
- `sort` stores the current sorting mode.
- `sortedGames` is derived data, not separate state.
- The list flow is now `games → search → sort → GameList`.
- `.sort()` mutates arrays, so sorting should be done on a copied array.
- `[...filteredGames].sort(...)` creates a copy before sorting.
- `rating-desc` sorts games from highest rating to lowest rating.
- `year-desc` sorts games from newest to oldest.
- `title-asc` sorts games alphabetically with `localeCompare`.
- Sorting keeps favorite state stable because favorites are tied to game ids.

## Stage 5 — Substage 2 — Block 3

- Extracted sorting UI into `SortSelect`.
- `SortSelect` is a controlled component.
- `SortSelect` receives the current `sort` value from `App`.
- `SortSelect` receives `onSortChange` callback from `App`.
- The select value is controlled by React state with `value={sort}`.
- When the user selects another option, `SortSelect` calls `onSortChange(event.target.value)`.
- In `App`, `onSortChange` is connected to `setSort`.
- The pattern is the same as `SearchBar`: value goes down, event goes up.
- `App` became cleaner and now composes `Header`, `SearchBar`, `SortSelect`, and `GameList`.

## Stage 5 — Substage 2 — Block 4

- Checked list stability with search, sorting, and favorites.
- `GameList` uses `key={game.id}` for `GameCard`.
- `key={game.id}` helps React track list items by stable game id.
- Favorites are also tied to game ids with `favorites.includes(game.id)`.
- Sorting changes card positions but does not change game ids.
- Search can temporarily hide cards, but favorite state remains tied to ids.
- `key={index}` is risky for dynamic lists because index is only the current position.
- If a card later has local UI state, `key={index}` can make that state move to the wrong item after sorting or filtering.
- The current list is stable because both React tracking and favorite logic use stable game ids.

## Stage 5 — Substage 2 — Block 5

- Closed the lists and keys substage.
- React lists are rendered by mapping data arrays to JSX elements.
- `.map()` turns each game object into a `GameCard`.
- `key` helps React track list items between renders.
- `key` is used by React internally and is not passed as a normal prop.
- Stable `id` values are better keys than array indexes.
- `index` is risky for dynamic lists because it represents position, not item identity.
- The project uses `key={game.id}` for game cards.
- Favorites are also tied to game ids, so sorting and searching do not move favorite state to the wrong game.
- Added sorting with the flow `games → search → sort → GameList`.
- `sort` is state because the user changes it.
- `sortedGames` is derived data because it is calculated from `filteredGames` and `sort`.
- `.sort()` mutates arrays, so the project sorts a copied array with `[...filteredGames].sort(...)`.

## Stage 5 — Substage 3 — Block 0

- Controlled form elements are controlled by React state.
- The form value comes from state through the `value` prop.
- User changes are handled with `onChange`.
- `onChange` sends the new value back to the component that owns the state.
- The main flow is `state → value → input/select → onChange → setState`.
- `SearchBar` is already a controlled input.
- `SortSelect` is already a controlled select.
- Controlled forms make filtering, resetting, synchronization, and validation easier.
- In React, state should usually be the source of truth for form controls.
- Resetting controlled forms means resetting the state values.