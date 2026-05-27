# Game Explorer

Game Explorer is a React SPA for browsing games, filtering the catalog, viewing game details, and saving favorite games.

## Features

- Game catalog
- Search by title
- Genre filter
- Platform filter
- Rating filter
- Sorting
- Load more
- Game details page
- Favorite games
- Favorites saved in localStorage
- Header navigation
- 404 page
- Loading, error, empty and success states

## Tech Stack

- React
- Vite
- React Router
- CSS
- localStorage

## Routes

- `/` — catalog
- `/favorites` — favorite games
- `/games/:id` — game details
- `*` — not found page

## Run locally

```bash
npm install
npm run dev