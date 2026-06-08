# Game Explorer

Game Explorer is a React SPA for browsing games, filtering the catalog, viewing game details, and saving favorite games.

The project was built as a frontend learning project and later polished to feel closer to a real product UI.

## Live Demo

Project is deployed on Vercel:

[Open Game Explorer](YOUR_VERCEL_LINK)

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
- Loading, error, empty and not-found states
- Responsive layout
- Supabase data source

## Tech Stack

- React
- Vite
- React Router
- Supabase
- Bootstrap
- React-Bootstrap
- SCSS
- localStorage
- Vercel

## UI / UX Improvements

The project includes a polished UI layer:

- SCSS structure with variables and mixins
- Dark theme with blue/purple accents
- Responsive Bootstrap layout
- React-Bootstrap Navbar with mobile collapse
- React-Bootstrap Forms for catalog controls
- React-Bootstrap Cards for game cards
- Reusable UI state component for loading, error, empty and not-found states
- Mobile-friendly layout for catalog, details, favorites and 404 pages

## Routes

- `/` — game catalog
- `/favorites` — favorite games
- `/games/:id` — game details
- `*` — not found page

## Run locally

```bash
npm install
npm run dev