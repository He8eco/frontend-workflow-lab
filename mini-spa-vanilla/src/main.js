import './style.css'
import { initialState } from './state/appState.js'
import { renderApp } from './ui/renderApp.js'
import { getMovies } from './api/movieApi.js'

const state = {...initialState}

function attachEventListeners() {
  const reloadButton = document.querySelector('.reload-btn')
  const searchInput = document.querySelector('#search')

  if (reloadButton) {
    reloadButton.addEventListener('click', ()=>{
      loadMovies()
    })
  }

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      state.search = event.target.value
      render()
      const newSearchInput = document.querySelector('#search')
     if (newSearchInput) {
      newSearchInput.focus()
      newSearchInput.setSelectionRange(
        newSearchInput.value.length,
        newSearchInput.value.length
      )
    }
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