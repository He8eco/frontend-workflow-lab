# React Fundamentals TODO

## Substage 0 — Project foundation

- [x] Understand React role in this learning stage
- [x] Create Vite React project
- [x] Configure dev server host
- [x] Add Prettier config
- [x] Clean default Vite template
- [x] Create base folders
- [x] Add README, NOTES, and TODO
- [x] Commit project foundation

## Substage 1 — Components, props, and state

- [x] Plan React Game Library architecture
- [x] Create `Header`
- [x] Add local games data
- [x] Create `GameList`
- [x] Create `GameCard`
- [x] Pass game data through props
- [x] Add `searchQuery` state
- [x] Create `SearchBar`
- [x] Add `favorites` state
- [x] Handle favorite toggle through props
- [x] Show favorites count in `Header`
- [x] Review props/state flow

## Substage 2 — Lists and keys

- [x] Understand why React needs `key`
- [x] Review current `GameList` rendering
- [x] Add sorting state
- [x] Create `SortSelect`
- [x] Check list behavior with search, sorting, and favorites
- [x] Avoid index as key for dynamic lists
- [x] Close lists and keys substage

## Substage 3 — Controlled forms

- [x] Understand controlled components deeper
- [x] Review current `SearchBar` and `SortSelect`
- [x] Add genre filter
- [x] Add platform filter
- [x] Add minimum rating filter
- [x] Add reset controls button
- [x] Keep filters in `App` state
- [x] Build final filtering chain
- [x] Close controlled forms substage

## Substage 4 — useEffect

- [x] Understand side effects in React
- [x] Prepare `gameApi.js`
- [x] Move games into state
- [x] Load games with `useEffect`
- [x] Add loading state
- [x] Add error state
- [x] Add reload games
- [x] Understand effect dependencies
- [x] Read favorites from localStorage
- [x] Sync favorites to localStorage with `useEffect`
- [x] Understand cleanup basics
- [x] Add AbortController basics
- [x] Refactor loading logic if needed
- [x] Close useEffect substage

## Substage 5 — Custom Hooks

- [x] Understand what custom hooks are
- [x] Create `useDebounce`
- [x] Apply `useDebounce` to search
- [x] Create `useLocalStorage`
- [x] Replace favorites localStorage logic with `useLocalStorage`
- [x] Create `useGames`
- [x] Move game loading logic into `useGames`
- [x] Clean up `App.jsx`
- [x] Close custom hooks substage

## Substage 6 — React Router

- [ ] Add routes
- [ ] Add Header navigation
- [ ] Add item details page
- [ ] Add favorites page
- [ ] Add 404 page
