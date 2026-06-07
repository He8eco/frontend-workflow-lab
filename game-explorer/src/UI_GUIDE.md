# UI Guide — Game Explorer

## Goal

Improve Game Explorer UI so the project feels like a polished product, not just a training React app.

The UI should be:

- consistent
- responsive
- readable
- comfortable on desktop and mobile
- visually connected across all pages

## Current design direction

The project keeps a dark visual style with:

- dark background
- blue/purple accents
- soft gradients
- rounded cards
- glass-like panels
- subtle hover states

Bootstrap and React-Bootstrap will be used as UI tools, but the project should still keep its custom Game Explorer identity.

## Main UI areas to improve

- Header and navigation
- Catalog layout
- Search and filters
- Game cards
- Details page
- Favorites page
- 404 page
- Loading, error and empty states
- Mobile layout

## SCSS goals

SCSS should help organize styles into smaller files.

Planned structure:

- `styles/_variables.scss`
- `styles/_mixins.scss`
- `styles/_globals.scss`
- `styles/components/`
- `styles/pages/`
- `styles/index.scss`

## Bootstrap / React-Bootstrap usage

Bootstrap will be used for:

- layout containers
- responsive grid
- navbar
- forms
- buttons
- cards
- alerts
- spinner/offcanvas/modal if needed

Custom SCSS will be used for:

- dark theme
- gradients
- custom spacing
- card polish
- page-specific visual style

## Breakpoints

Basic responsive targets:

- mobile: below 768px
- tablet: 768px and up
- desktop: 992px and up
- large desktop: 1200px and up

## Component rules

- Components should use consistent spacing.
- Buttons should have clear states: default, hover, active, disabled.
- Forms should use one consistent visual style.
- Cards should not randomly stretch when only one item is visible.
- Empty states should explain what happened.
- Error states should be noticeable and recoverable where possible.
- Mobile layout should not have horizontal scroll.

## Stage 7 plan

- Add SCSS setup and structure.
- Move global styles to SCSS.
- Add variables and mixins.
- Connect Bootstrap.
- Refactor layout with Bootstrap.
- Refactor Navbar with React-Bootstrap.
- Refactor forms with React-Bootstrap.
- Refactor cards with React-Bootstrap.
- Improve responsive layout.
- Polish pages and states.
- Update README.