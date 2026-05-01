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

function getFilteredMovies(state) {
  const normalizedSearch = state.search.trim().toLowerCase()
  let filteredMovies = state.movies

  if (normalizedSearch) {
    filteredMovies = filteredMovies.filter((movie) => movie.title.toLowerCase().includes(normalizedSearch))
  }
  
  if (state.genre !== 'all')  {
    filteredMovies = filteredMovies.filter((movie) => movie.genre === state.genre)
  }

  if (state.minRating > 0) {
    filteredMovies = filteredMovies.filter((movie) => movie.rating >= state.minRating)
  }

  if (state.sortBy === 'title-asc') {
    filteredMovies = [...filteredMovies].sort((a,b)=>a.title.localeCompare(b.title))
  }

  if (state.sortBy === 'title-desc') {
    filteredMovies = [...filteredMovies].sort((a,b) => b.title.localeCompare(a.title))
  }

  if (state.sortBy === 'rating-desc') {
    filteredMovies = [...filteredMovies].sort((a,b) => b.rating - a.rating)
  }

  if (state.sortBy === 'rating-asc') {
    filteredMovies = [...filteredMovies].sort((a,b) => a.rating - b.rating)
  }
  return filteredMovies
}

function renderCatalogContent(state, filteredMovies) {
 if (state.loading) {
  return `<p class="catalog-message">Loading movies...</p>`
 }
 if (state.error) {
  return `<p class="catalog-message error-message">${state.error}</p>`
 }
 if (filteredMovies.length === 0) {
    return `<p class="catalog-message">No movies found.</p>`
  }

  return renderMovieList(filteredMovies)
}
export function renderApp(state) {
  const filteredMovies = getFilteredMovies(state)

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
          <div class="search-row">
            <input
              id="search"
              type="text"
              placeholder="Search movies..."
              value="${state.search}"
          />
          <button class="clear-search-btn" type="button">Clear search</button>
        </div>
        </div>
        <div class="control-group">
          <label for="genre">Genre</label>
          <select id="genre">
            
  <option value="all" ${state.genre === 'all' ? 'selected' : ''}>
    All genres
  </option>
  <option value="Sci-Fi" ${state.genre === 'Sci-Fi' ? 'selected' : ''}>
    Sci-Fi
  </option>
  <option value="Action" ${state.genre === 'Action' ? 'selected' : ''}>
    Action
  </option>
          </select>
        </div>

        <div class="control-group">
  <label for="sort">Sort by</label>
  <select id="sort">
    <option value="default" ${state.sortBy === 'default' ? 'selected' : ''}>
      Default
    </option>
    <option value="title-asc" ${state.sortBy === 'title-asc' ? 'selected' : ''}>
      Title A–Z
    </option>
    <option value="title-desc" ${state.sortBy === 'title-desc' ? 'selected' : ''}>
      Title Z–A
    </option>
    <option value="rating-desc" ${state.sortBy === 'rating-desc' ? 'selected' : ''}>
      Rating high to low
    </option>
    <option value="rating-asc" ${state.sortBy === 'rating-asc' ? 'selected' : ''}>
      Rating low to high
    </option>
  </select>
</div>
        <div class="control-group">
  <label for="min-rating">Rating</label>
  <select id="min-rating">
    <option value="0" ${state.minRating === 0 ? 'selected' : ''}>
      All ratings
    </option>
    <option value="7" ${state.minRating === 7 ? 'selected' : ''}>
      7+
    </option>
    <option value="8" ${state.minRating === 8 ? 'selected' : ''}>
      8+
    </option>
    <option value="9" ${state.minRating === 9 ? 'selected' : ''}>
      9+
    </option>
  </select>
</div>
        <button class="reset-filters-btn" type="button">Reset filters</button>
      </section>

      <section class="catalog panel">
        <div class="catalog-toolbar">
          <h2>Catalog</h2>
          <p>Showing <span>${filteredMovies.length}</span> results</p>
            <button class="reload-btn" type="button">Reload catalog</button>
        </div>

        <div class="movie-grid">
          ${renderCatalogContent(state, filteredMovies)}
        </div>
      </section>

      <section class="status panel">
        <h2>Status</h2>
        <p>${state.loading ? 'Loading...' : state.error ? state.error : filteredMovies.length === 0 ? 'No movies found.' : 'Movies loaded successfully.'}</p>
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