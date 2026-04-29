import './style.css'
import { initialState } from './state/appState.js'
import { renderApp } from './ui/renderApp.js'
import { getMovies } from './api/movieApi.js'
import { debounce } from './utils/debounce.js'

const state = {...initialState}

const handleSearchInput = debounce((value) => {
  state.search = value
  state.page = 1
  render()
}, 400)

function attachEventListeners() {
  const reloadButton = document.querySelector('.reload-btn')
  const searchInput = document.querySelector('#search')
  const clearSearchButton = document.querySelector('.clear-search-btn')
  

  if (reloadButton) {
    reloadButton.addEventListener('click', ()=>{
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
    state.error = "Failed to load movies"
    state.loading = false
    render()
  }
}

function initApp() {
  render()
  loadMovies()
}
initApp()