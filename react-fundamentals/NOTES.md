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