import { appRoot } from './dom.js'

function renderMovieCard(movie) {
  return `
    <article class="movie-card">
      ${
        movie.poster
          ? `<img class="movie-poster" src="${movie.poster}" alt="${movie.title}" />`
          : `<div class="poster-placeholder"></div>`
      }

      <div class="movie-card-body">
        <h3>${movie.title}</h3>
        <p>${movie.genre}</p>
        <p>Year: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `
}

function renderMovieList(movies) {
  return movies.map(renderMovieCard).join('')
}

export function renderApp(state) {
  appRoot.innerHTML = `
    <main class="app-shell">
      <header class="hero panel">
        <div>
          <p class="eyebrow">Stage 4 Project</p>
          <h1>Movie Catalog</h1>
          <p class="hero-text">
            A vanilla JavaScript mini SPA for exploring movies.
          </p>
        </div>

        <div class="favorites-box">
          <span class="favorites-label">Favorites</span>
          <strong class="favorites-count">${state.favorites.length}</strong>
        </div>
      </header>

      <section class="controls panel">
        <div class="control-group">
          <label for="search">Search</label>
          <input id="search" type="text" placeholder="Search movies..." value="${state.search}" />
        </div>

        <div class="control-group">
          <label for="genre">Genre</label>
          <select id="genre">
            <option ${state.genre === 'all' ? 'selected' : ''}>All genres</option>
          </select>
        </div>

        <div class="control-group">
          <label for="sort">Sort by</label>
          <select id="sort">
            <option ${state.sortBy === 'default' ? 'selected' : ''}>Default</option>
          </select>
        </div>

        <button class="secondary-btn" type="button">Reset filters</button>
      </section>

      <section class="catalog panel">
        <div class="catalog-toolbar">
          <h2>Catalog</h2>
          <p>Showing <span>${state.movies.length}</span> results</p>
        </div>

        <div class="movie-grid">
          ${renderMovieList(state.movies)}
        </div>
      </section>

      <section class="status panel">
        <h2>Status</h2>
        <p>${state.loading ? 'Loading...' : state.error ? state.error : 'No data loaded yet.'}</p>
      </section>

      <section class="pagination panel">
        <button type="button" disabled>Prev</button>
        <button type="button" class="active-page">${state.page}</button>
        <button type="button" disabled>2</button>
        <button type="button" disabled>3</button>
        <button type="button" disabled>Next</button>
      </section>
    </main>
  `
}