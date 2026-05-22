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

## Stage 5 — Substage 3 — Block 2

- Added controlled genre filter.
- `genre` state lives in `App`.
- Default genre value is `all`.
- `GenreFilter` receives `genre` and `onGenreChange` through props.
- The genre select is controlled with `value={genre}`.
- `onChange` sends the selected genre value back to `App`.
- The filtering chain is now `games → search → genre → sort → GameList`.
- If `genre === 'all'`, all searched games are kept.
- Otherwise, only games with `game.genre === genre` are kept.
- Genre filtering works together with search, sorting, favorites, and empty state.

## Stage 5 — Substage 3 — Block 3

- Added controlled platform filter.
- `platform` state lives in `App`.
- Default platform value is `all`.
- `PlatformFilter` receives `platform` and `onPlatformChange` through props.
- The platform select is controlled with `value={platform}`.
- `onChange` sends the selected platform value back to `App`.
- The filtering chain is now `games → search → genre → platform → sort → GameList`.
- If `platform === 'all'`, all genre-filtered games are kept.
- Otherwise, only games with `game.platform === platform` are kept.
- Platform filtering works together with search, genre, sorting, favorites, and empty state.

## Stage 5 — Substage 3 — Block 4

- Added controlled minimum rating filter.
- `minRating` state lives in `App`.
- Default `minRating` value is `0`.
- `RatingFilter` receives `minRating` and `onMinRatingChange` through props.
- The rating select is controlled with `value={minRating}`.
- Select values come from the DOM as strings, so `Number(event.target.value)` converts them to numbers.
- Rating filtering keeps games where `game.rating >= minRating`.
- If `minRating` is `0`, all games pass the rating filter.
- The filtering chain is now `games → search → genre → platform → minRating → sort → GameList`.
- Rating filtering works together with search, genre, platform, sorting, favorites, and empty state.

## Stage 5 — Substage 3 — Block 5

- Added reset controls button.
- Resetting controlled forms means resetting their state values.
- `handleResetControls()` resets `searchQuery`, `genre`, `platform`, `minRating`, and `sort`.
- `favorites` are not reset because they are not part of the filter/sort controls.
- Added `hasActiveControls` derived boolean.
- `hasActiveControls` checks whether any search/filter/sort control differs from its default value.
- The reset button is disabled when there are no active controls.
- Controlled components update automatically after reset because their `value` comes from state.
- The reset flow is `button click → handleResetControls → setState calls → controlled values update → GameList recalculates`.

## Stage 5 — Substage 3 — Block 6

- Grouped search, filters, sorting, and reset controls into `GameFilters`.
- `GameFilters` is a composition component.
- `GameFilters` does not own form state.
- `App` still owns `searchQuery`, `genre`, `platform`, `minRating`, and `sort`.
- `GameFilters` receives values and callbacks through props.
- `GameFilters` passes those values and callbacks down to smaller controls.
- This keeps `App` cleaner while preserving the same state flow.
- The component tree is now `App → GameFilters → SearchBar / GenreFilter / PlatformFilter / RatingFilter / SortSelect / ResetControlsButton`.
- Grouping controls changed structure, not behavior.

## Stage 5 — Substage 3 — Block 7

- Closed the controlled forms substage.
- Controlled form elements use React state as the source of truth.
- The main flow is `state → value → input/select → onChange → setState → UI update`.
- `SearchBar` controls `searchQuery`.
- `GenreFilter` controls `genre`.
- `PlatformFilter` controls `platform`.
- `RatingFilter` controls `minRating`.
- `SortSelect` controls `sort`.
- `ResetControlsButton` resets search, filters, and sorting through state updates.
- `GameFilters` groups all controls but does not own their state.
- `App` owns form state and calculates derived data.
- The final data chain is `games → search → genre → platform → minRating → sort → GameList`.
- `searchedGames`, `genreFilteredGames`, `platformFilteredGames`, `filteredGames`, and `sortedGames` are derived data.
- Derived data is calculated from state and source data instead of being stored as separate state.
- Favorites are intentionally not reset by `Reset controls`.
- Controlled forms make filtering, sorting, reset, and future validation easier.

## Stage 5 — Substage 4 — Block 0

- `useEffect` is used for side effects.
- A side effect is an action that goes outside normal render calculation.
- Examples of side effects: data loading, localStorage sync, timers, subscriptions, event listeners, request cancellation.
- Render code should stay pure and calculate UI from props and state.
- Derived data like filtered or sorted games should not be stored in state through `useEffect`.
- If something can be calculated from existing state/data during render, calculate it directly.
- `useEffect` is needed when a component must synchronize with something outside React.
- `SearchBar`, filters, sorting, and `hasActiveControls` do not need `useEffect`.
- Loading games and syncing favorites with localStorage will need `useEffect`.
- Basic effect shape: `useEffect(() => { ... }, dependencies)`.
- Effects run after render.
- Event handlers and effects are different: event handlers respond to user actions, effects synchronize after render based on dependencies.

## Stage 5 — Substage 4 — Block 1

- Created `src/api/gameApi.js` as a small API layer for game data.
- `App.jsx` should not depend on `src/data/games.js` forever.
- `getGames()` will become the single entry point for loading games.
- For now, `getGames()` returns local games from `src/data/games.js`.
- `getGames()` is async to match the shape of a real API request.
- Later, `getGames()` can add delay, errors, fetch, Supabase, or another backend without rewriting the UI.
- The goal is to separate data source details from React components.

## Stage 5 — Substage 4 — Block 2

- Moved game data into React state.
- Renamed imported `games` to `initialGames` to avoid a name conflict.
- `games` is now a state value inside `App`.
- For this block, `games` can be initialized with `initialGames` to avoid breaking the UI before `useEffect` loading is added.
- `loading` and `error` state are prepared for future async loading.
- If setters are not used yet, state can be declared without setters to avoid lint warnings.
- Later, `useEffect` will load games through `getGames()` and update `games`, `loading`, and `error`.

## Stage 5 — Substage 4 — Block 3

- Games are now loaded through `useEffect`.
- `games` state starts as an empty array.
- `useEffect(..., [])` runs once after the first render.
- `getGames()` is called inside the effect.
- The effect updates React state with `setGames(loadedGames)`.
- An async function is declared inside the effect because the effect callback itself should not be async.
- `useEffect(async () => {})` is not recommended because async functions return a Promise.
- Without the dependency array, the effect would run after every render.
- Loading/error UI will be handled in the next block.

## Stage 5 — Substage 4 — Block 4

- Added loading/error handling for async game loading.
- `setLoading(true)` marks the start of loading.
- `setError(null)` clears previous errors before loading.
- `try/catch/finally` handles success, failure, and loading cleanup.
- `setGames(loadedGames)` stores successful results.
- `setGames([])` clears games when loading fails.
- `setError('Failed to load games')` stores a user-facing error message.
- `console.error(error)` keeps the technical error visible for development.
- UI state order should be: loading → error → empty → success.
- Empty state means the request succeeded but there are no games to show.
- Error state means the request failed.
- Loading state means the request is still in progress.

## Stage 5 — Substage 4 — Block 5

- Moved `loadGames()` out of `useEffect`.
- `loadGames()` is now reused for initial loading and manual reload.
- `useEffect(() => { loadGames() }, [])` runs the initial load after the first render.
- The Reload button calls `loadGames()` from an event handler.
- Reload is a user event, so it does not require a separate `useEffect`.
- `setError(null)` clears previous errors before every new load.
- `disabled={loading}` prevents multiple reload clicks during active loading.
- Adding `loadGames` to the dependency array can cause extra effect runs if the function is recreated on every render.
- `useCallback` is not needed yet; dependencies will be handled in a later block.

## Stage 5 — Substage 4 — Block 6

- `useEffect` dependencies define when the effect runs.
- No dependency array means the effect runs after every render.
- Empty dependency array `[]` means the effect runs after the first render.
- `[value]` means the effect runs after the first render and when `value` changes.
- Effects should include reactive values they use from the component.
- Reactive values include props, state, variables, and functions declared inside the component.
- `loadGames` is declared inside `App`, so ESLint may warn that it is a missing dependency.
- Adding `loadGames` to dependencies can cause extra runs if `loadGames` is recreated on every render.
- `useState` setter functions like `setGames`, `setLoading`, and `setError` are stable.
- Stale closure means an effect may keep old values from the render where it was created.
- Do not use `useEffect` to calculate derived data like filtering or sorting.
- For this project, initial game loading still uses `useEffect(() => { loadGames() }, [])`.
- `useCallback` can be useful later, but it is not needed for this block.

## Stage 5 — Substage 4 — Block 7

- Favorites now read their initial value from `localStorage`.
- `localStorage.getItem('favoriteGames')` returns a string or `null`.
- `JSON.parse()` converts the saved JSON string back into a JavaScript value.
- `useState(() => { ... })` uses an initializer function.
- The initializer function runs only when React initializes the state.
- Reading `localStorage` in the initializer avoids an extra render with empty favorites.
- If there are no saved favorites, the initial value is `[]`.
- If saved JSON is broken, the app catches the error and falls back to `[]`.
- `Array.isArray()` protects the app from invalid saved data shapes.
- This block only reads favorites; writing favorites to `localStorage` will be handled in the next block.

## Stage 5 — Substage 4 — Block 8

- Favorites are now synced to `localStorage` with `useEffect`.
- `favorites` state is the source of truth while the app is running.
- `localStorage` is used to persist favorites between page reloads.
- `useEffect(() => { ... }, [favorites])` runs after the first render and whenever `favorites` changes.
- `JSON.stringify(favorites)` converts the array into a string for `localStorage`.
- `handleToggleFavorite` only updates React state.
- The effect is responsible for syncing the external storage.
- `Reset controls` should not clear favorites because favorites are not a filter.
- `try/catch` around `localStorage.setItem` protects the app from storage write errors.

## Stage 5 — Substage 4 — Block 9

- Cleanup is a function returned from `useEffect`.
- Cleanup should stop or undo what the effect setup started.
- React runs cleanup before re-running an effect with changed dependencies.
- React also runs cleanup when the component unmounts.
- In development Strict Mode, React may run setup → cleanup → setup to check effect correctness.
- `setTimeout` should be cleaned with `clearTimeout`.
- `setInterval` should be cleaned with `clearInterval`.
- `addEventListener` should be cleaned with `removeEventListener`.
- Subscriptions should be cleaned with unsubscribe/disconnect logic.
- Simple derived data does not need `useEffect` or cleanup.
- Writing favorites to `localStorage` does not need cleanup because it does not leave a running process.
- Current game loading does not have request cancellation yet.
- AbortController will be handled later.
- Rule: if an effect creates something long-lived, cleanup should remove it.

## Stage 5 — Substage 4 — Block 10

- `AbortController` can be used to cancel async operations.
- `controller.signal` is passed to the async operation.
- `controller.abort()` triggers cancellation.
- `getGames({ signal })` now accepts an optional abort signal.
- The fake `sleep(ms, signal)` can reject with `AbortError` when aborted.
- `useEffect` creates an `AbortController` for initial game loading.
- The effect cleanup calls `controller.abort()`.
- `AbortError` should not be shown to the user as a normal loading error.
- Request cancellation is useful when a component unmounts or when an old request becomes irrelevant.
- Manual reload still uses `loadGames()` without a signal because the button is disabled while loading.

## Stage 5 — Substage 4 — Block 11

- `loadGames` is now wrapped in `useCallback`.
- `useCallback` keeps the same function reference between renders while dependencies do not change.
- `loadGames` is used inside the initial loading effect.
- Because the effect uses `loadGames`, `loadGames` should be included in the effect dependencies.
- `useEffect(..., [loadGames])` is now correct because `loadGames` is stable.
- `loadGames` can use an empty dependency array because it only uses stable state setters and imported `getGames`.
- `onClick={() => loadGames()}` is used because `onClick={loadGames}` would pass the click event as the first argument.
- Not every handler needs `useCallback`; it is used here because `loadGames` participates in effect dependencies.
- Bigger extraction into custom hooks is intentionally postponed until the custom hooks substage.

## Stage 5 — Substage 4 — Summary

- `useEffect` is used for side effects, not for normal render calculations.
- Derived data like search, filtering, sorting, and `hasActiveControls` should be calculated during render.
- Game loading is a side effect because it synchronizes the app with an external data source.
- Games are loaded through `getGames()` from `src/api/gameApi.js`.
- `loading`, `error`, and `games` state describe the async loading lifecycle.
- Catalog UI renders in this order: loading → error → empty → success.
- `Reload games` reuses the same `loadGames()` function as the initial load.
- `localStorage` is used to persist favorite games between page reloads.
- Favorites are read from `localStorage` with a `useState` initializer.
- Favorites are written to `localStorage` with a `useEffect` that depends on `[favorites]`.
- Cleanup is used when an effect creates something that must be stopped or removed.
- `AbortController` cancels the initial game loading when the effect cleanup runs.
- `AbortError` should not be shown as a normal user-facing error.
- `loadGames` is wrapped in `useCallback` because it is used inside an effect dependency array.
- `useEffect` dependencies should reflect the reactive values used by the effect.
- Do not hide dependency problems by randomly changing dependency arrays.

## Stage 5 — Substage 5 — Block 0

- A custom hook is a JavaScript function that starts with `use`.
- Custom hooks can use React hooks inside them.
- Custom hooks help extract reusable stateful logic from components.
- Components return UI, custom hooks return data and functions.
- Custom hooks follow the same Rules of Hooks as built-in hooks.
- Hooks should be called at the top level of components or other hooks.
- Do not call hooks inside conditions, loops, nested functions, or after unstable early returns.
- `useDebounce` will delay a changing value.
- `useLocalStorage` will handle reading and writing state to localStorage.
- `useGames` will handle games loading, loading state, error state, reload, and abort logic.
- Not every piece of logic needs a custom hook.
- Derived data like filtering and sorting can stay in render if it is simple and readable.

## Stage 5 — Substage 5 — Block 1

- Created `useDebounce(value, delay)`.
- `useDebounce` is a custom hook because it starts with `use` and uses React hooks inside.
- The hook stores `debouncedValue` in internal state.
- When `value` changes, the hook starts a timer.
- If `value` changes again before the timer finishes, cleanup clears the old timer.
- After `delay` ms without changes, `debouncedValue` updates.
- `useEffect` dependencies are `[value, delay]` because the effect uses both values.
- Search input still uses `searchQuery` so typing feels immediate.
- Filtering uses `debouncedSearchQuery` so list updates are delayed.
- `hasActiveControls` should still use `searchQuery` because controls should react immediately.

## Stage 5 — Substage 5 — Block 2

- Created `useLocalStorage(key, initialValue)`.
- `useLocalStorage` returns `[value, setValue]`, similar to `useState`.
- The hook reads initial state from `localStorage`.
- If there is no saved value, it uses `initialValue`.
- If saved JSON is broken, it catches the error and falls back to `initialValue`.
- The hook writes updates to `localStorage` with `useEffect`.
- The storage effect depends on `[key, value]`.
- `JSON.stringify(value)` is used before saving.
- `JSON.parse(savedValue)` is used when reading.
- `App.jsx` now uses `const [favorites, setFavorites] = useLocalStorage('favoriteGames', [])`.
- The old favorites localStorage effect was removed from `App.jsx`.
- `handleToggleFavorite` still works because `setFavorites` behaves like a normal state setter.

## Stage 5 — Substage 5 — Block 3

- Created `useGames`.
- Moved game loading state into `useGames`.
- `useGames` owns `games`, `loading`, and `error`.
- `useGames` owns initial loading with `useEffect`.
- `useGames` owns `AbortController` cleanup for initial loading.
- Internal `loadGames(signal)` accepts an optional abort signal.
- Public `reloadGames()` does not accept arguments and is safe to pass directly to `onClick`.
- `App.jsx` now receives `games`, `loading`, `error`, and `reloadGames` from `useGames`.
- `App.jsx` no longer imports `getGames`.
- `App.jsx` no longer owns the initial loading effect.
- Custom hooks can hide implementation details while exposing a simple API to components.

## Stage 5 — Substage 5 — Block 4

- Cleaned up `App.jsx` after extracting custom hooks.
- Removed unused imports like `useEffect`, `useCallback`, and `getGames` from `App.jsx`.
- `App.jsx` now gets game loading data from `useGames`.
- `App.jsx` gets persistent favorites state from `useLocalStorage`.
- `App.jsx` gets delayed search value from `useDebounce`.
- `hasActiveControls` still uses `searchQuery` because controls should react immediately.
- Filtering uses `debouncedSearchQuery`.
- The filtering and sorting pipeline stays in `App.jsx` because it is simple derived data.
- `catalogContent` still handles loading → error → empty → success.
- `reloadGames` is safe to pass directly to `onClick`.