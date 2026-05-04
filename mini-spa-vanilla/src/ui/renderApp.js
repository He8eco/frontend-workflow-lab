import { appRoot } from './dom.js'
import { html } from '../utils/html.js'

function renderMovieCard(movie, favorites) {
  const isFavorite = favorites.includes(movie.id)

  return `
    <article class="movie-card">
      <button
        class="favorite-btn ${isFavorite ? 'is-favorite' : ''}"
        type="button"
        data-movie-id="${movie.id}"
        aria-label="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}"
      >
      ${isFavorite ? '♥' : '♡'}
      </button>

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

function renderMovieList(movies, favorites) {
  return movies.map((movie) => renderMovieCard(movie, favorites)).join('')
}

function getFilteredMovies(state) {
  const normalizedSearch = state.search.trim().toLowerCase()
  let filteredMovies = state.movies

  if (normalizedSearch) {
    filteredMovies = filteredMovies.filter((movie) =>
      movie.title.toLowerCase().includes(normalizedSearch)
    )
  }

  if (state.genre !== 'all') {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.genre === state.genre
    )
  }

  if (state.minRating > 0) {
    filteredMovies = filteredMovies.filter(
      (movie) => movie.rating >= state.minRating
    )
  }

  switch (state.sortBy) {
    case 'title-asc':
      filteredMovies = [...filteredMovies].sort((a, b) =>
        a.title.localeCompare(b.title)
      )
      break

    case 'title-desc':
      filteredMovies = [...filteredMovies].sort((a, b) =>
        b.title.localeCompare(a.title)
      )
      break

    case 'rating-desc':
      filteredMovies = [...filteredMovies].sort((a, b) => b.rating - a.rating)
      break

    case 'rating-asc':
      filteredMovies = [...filteredMovies].sort((a, b) => a.rating - b.rating)
      break

    default:
      break
  }

  return filteredMovies
}

function getTotalPages(totalItems, itemsPerPage) {
  return Math.max(1, Math.ceil(totalItems / itemsPerPage))
}

function getPaginatedMovies(movies, state) {
  const startIndex = (state.page - 1) * state.itemsPerPage
  const endIndex = startIndex + state.itemsPerPage

  return movies.slice(startIndex, endIndex)
}

function renderCatalogContent(state, movies) {
  if (state.loading) {
    return `<p class="catalog-message">Loading movies...</p>`
  }
  if (state.error) {
    return `<p class="catalog-message error-message">${state.error}</p>`
  }
  if (movies.length === 0) {
    return `<p class="catalog-message">No movies found.</p>`
  }

  return renderMovieList(movies, state.favorites)
}
export function renderApp(state) {
  const filteredMovies = getFilteredMovies(state)
  const totalPages = getTotalPages(filteredMovies.length, state.itemsPerPage)
  const paginatedMovies = getPaginatedMovies(filteredMovies, state)

  appRoot.innerHTML = html`
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
            <option
              value="Sci-Fi"
              ${state.genre === 'Sci-Fi' ? 'selected' : ''}
            >
              Sci-Fi
            </option>
            <option
              value="Action"
              ${state.genre === 'Action' ? 'selected' : ''}
            >
              Action
            </option>
          </select>
        </div>

        <div class="control-group">
          <label for="sort">Sort by</label>
          <select id="sort">
            <option
              value="default"
              ${state.sortBy === 'default' ? 'selected' : ''}
            >
              Default
            </option>
            <option
              value="title-asc"
              ${state.sortBy === 'title-asc' ? 'selected' : ''}
            >
              Title A–Z
            </option>
            <option
              value="title-desc"
              ${state.sortBy === 'title-desc' ? 'selected' : ''}
            >
              Title Z–A
            </option>
            <option
              value="rating-desc"
              ${state.sortBy === 'rating-desc' ? 'selected' : ''}
            >
              Rating high to low
            </option>
            <option
              value="rating-asc"
              ${state.sortBy === 'rating-asc' ? 'selected' : ''}
            >
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
          <p>
            Showing <span>${paginatedMovies.length}</span> of
            <span>${filteredMovies.length}</span> results
          </p>
          <button class="reload-btn" type="button">Reload catalog</button>
        </div>

        <div class="movie-grid">
          ${renderCatalogContent(state, paginatedMovies)}
        </div>
      </section>

      <section class="status panel">
        <h2>Status</h2>
        <p>
          ${state.loading
            ? 'Loading...'
            : state.error
              ? state.error
              : filteredMovies.length === 0
                ? 'No movies found.'
                : 'Movies loaded successfully.'}
        </p>
      </section>

      <section class="pagination panel">
        <button
          class="pagination-prev-btn"
          type="button"
          ${state.page === 1 ? 'disabled' : ''}
        >
          Prev
        </button>

        <span class="pagination-info">
          Page ${state.page} of ${totalPages}
        </span>

        <button
          class="pagination-next-btn"
          type="button"
          ${state.page === totalPages ? 'disabled' : ''}
        >
          Next
        </button>
      </section>
    </main>
  `
}
