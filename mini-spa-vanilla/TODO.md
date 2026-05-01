# TODO

## Foundation

- [x] Choose project theme
- [x] Create Vite project
- [x] Add README.md
- [x] Add NOTES.md
- [x] Add TODO.md
- [x] Define project workflow rules
- [x] Create base layout

## Architecture

- [x] Plan project structure
- [x] Create `api / state / ui / utils`
- [x] Define application state shape
- [x] Move first render into UI layer
- [x] Connect state to first render

## Catalog

- [x] Add first movie data source
- [x] Load movies on app start
- [x] Render real movie cards
- [x] Handle loading / error / empty states
- [x] Add refresh / reload button

## Search

- [x] Define search logic
- [x] Connect input to `state.search`
- [x] Filter movie list by title
- [x] Add debounce
- [x] Reset page on search change
- [x] Add search reset

## Filters

- [x] Define filter logic
- [x] Add `minRating` to state
- [x] Connect genre select to `state.genre`
- [x] Filter movie list by genre
- [x] Add rating filter
- [x] Combine search and filters
- [x] Reset filters

## Sorting

- [x] Define sorting logic
- [x] Confirm `sortBy` in state
- [x] Connect sort select to `state.sortBy`
- [x] Add title sorting
- [x] Add rating sorting
- [x] Combine search, filters, and sorting

## Favorites

- [x] Define favorites logic
- [x] Confirm `favorites` in state
- [x] Add favorite button to movie cards
- [x] Toggle favorite ids in `state.favorites`
- [x] Update favorite counter
- [x] Save favorites to `localStorage`
- [x] Load favorites from `localStorage`
- [x] Mark favorite cards after reload
- [x] Add favorites only filter

## Features

- [x] Add search
- [x] Add filters
- [x] Add sorting
- [ ] Add favorites
- [ ] Add pagination
