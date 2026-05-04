import './style.css'
import { initialState } from './state/appState.js'
import { renderApp } from './ui/renderApp.js'
import { getMovies } from './api/movieApi.js'
import { debounce } from './utils/debounce.js'

const state = { ...initialState }

const FAVORITES_STORAGE_KEY = 'movie-catalog:favorites'

const handleSearchInput = debounce((value) => {
  state.search = value
  state.page = 1
  render()
}, 400)

function attachEventListeners() {
  const reloadButton = document.querySelector('.reload-btn')
  const searchInput = document.querySelector('#search')
  const clearSearchButton = document.querySelector('.clear-search-btn')
  const genreSelect = document.querySelector('#genre')
  const minRatingSelect = document.querySelector('#min-rating')
  const resetFiltersButton = document.querySelector('.reset-filters-btn')
  const sortSelect = document.querySelector('#sort')
  const favoriteButtons = document.querySelectorAll('.favorite-btn')
  const prevPageButton = document.querySelector('.pagination-prev-btn')
  const nextPageButton = document.querySelector('.pagination-next-btn')
  const pageButtons = document.querySelectorAll('.pagination-page-btn')

  if (reloadButton) {
    reloadButton.addEventListener('click', () => {
      loadMovies()
    })
  }

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      handleSearchInput(event.target.value)
    })
  }
  if (clearSearchButton) {
    clearSearchButton.addEventListener('click', () => {
      state.search = ''
      state.page = 1
      render()
    })
  }

  if (genreSelect) {
    genreSelect.addEventListener('change', (event) => {
      state.genre = event.target.value
      state.page = 1
      render()
    })
  }

  if (minRatingSelect) {
    minRatingSelect.addEventListener('change', (event) => {
      state.minRating = Number(event.target.value)
      state.page = 1
      render()
    })
  }

  if (resetFiltersButton) {
    resetFiltersButton.addEventListener('click', (event) => {
      state.search = ''
      state.genre = 'all'
      state.minRating = 0
      state.page = 1
      render()
    })
  }
  if (sortSelect) {
    sortSelect.addEventListener('change', (event) => {
      state.sortBy = event.target.value
      state.page = 1
      render()
    })
  }

  if (favoriteButtons.length > 0) {
    favoriteButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const movieId = Number(button.dataset.movieId)

        toggleFavorite(movieId)
      })
    })
  }

  if (prevPageButton) {
    prevPageButton.addEventListener('click', () => {
      state.page = Math.max(1, state.page - 1)
      render()
    })
  }

  if (nextPageButton) {
    nextPageButton.addEventListener('click', () => {
      state.page = state.page + 1
      render()
    })
  }

  pageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.page = Number(button.dataset.page)
      render()
    })
  })
}

function toggleFavorite(movieId) {
  const isFavorite = state.favorites.includes(movieId)

  if (isFavorite) {
    state.favorites = state.favorites.filter((id) => id !== movieId)
  } else {
    state.favorites = [...state.favorites, movieId]
  }

  saveFavorites()
  render()
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(state.favorites))
}

function loadFavorites() {
  const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY)

  return savedFavorites ? JSON.parse(savedFavorites) : []
}

function getTotalPages(totalItems, itemsPerPage) {
  return Math.max(1, Math.ceil(totalItems / itemsPerPage))
}

function render() {
  renderApp(state)
  attachEventListeners()
}

async function loadMovies() {
  state.loading = true
  state.error = null
  render()

  try {
    const movies = await getMovies()
    state.movies = movies
    state.loading = false
    render()
  } catch (error) {
    state.movies = []
    state.error = 'Failed to load movies'
    state.loading = false
    render()
  }
}

function initApp() {
  state.favorites = loadFavorites()

  render()
  loadMovies()
}
initApp()
