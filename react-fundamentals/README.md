# React Fundamentals

Учебный проект для Этапа 5 — React фундамент.

Цель проекта — собрать React SPA-каталог игр и на нём отработать компоненты, props, state, controlled forms, useEffect, custom hooks и React Router.

Проект будет постепенно развиваться от чистой Vite React-базы до учебного SPA-каталога с компонентами, props, state, controlled forms, useEffect, custom hooks и React Router.

---

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- ESLint
- Prettier

---

## Learning Goals

В этом проекте отрабатываются:

- компоненты;
- JSX;
- props;
- state;
- однонаправленный поток данных;
- списки и `key`;
- controlled forms;
- `useEffect`;
- custom hooks;
- React Router;
- базовая структура React SPA.

---

## Project Structure

```text
src/
  api/
  components/
  data/
  hooks/
  pages/
  utils/
  App.jsx
  App.css
  index.css
  main.jsx
```

## Current Status

Project foundation is complete. The next step is building the first React Game Library components.

## What changed

- Verified React Fundamentals project foundation.
- Checked development server, build, and lint.
- Added/updated project notes and TODO.
- Confirmed base folder structure for components, pages, hooks, API, data, and utils.
- Confirmed `.gitignore` and Prettier setup.

## Notes

This closes Substage 0. The project is ready for React components, props, and state practice.

# React Game Library

A training React SPA built during Stage 5 — React Fundamentals.

## Features

- Game catalog
- Search with debounce
- Genre/platform/rating filters
- Sorting
- Favorite games
- Favorites persisted in localStorage
- Async game loading simulation
- Loading/error/empty states
- Reload games action
- Custom hooks
- React Router pages
- Game details page
- 404 page

## Tech

- React
- Vite
- React Router
- CSS
- localStorage

## Custom hooks

- `useDebounce(value, delay)`
- `useLocalStorage(key, initialValue)`
- `useGames()`

## Routes

- `/` — catalog
- `/favorites` — favorite games
- `/games/:id` — game details
- `*` — not found page

## Run locally

```bash
npm install
npm run dev