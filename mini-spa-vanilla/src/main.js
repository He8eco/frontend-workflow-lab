import './style.css'
import { initialState } from './state/appState.js'
import { renderApp } from './ui/renderApp.js'
import { getMovies } from './api/movieApi.js'

const state = {...initialState}

function attachEventListeners() {
  const reloadButton = document.querySelector('.reload-btn')

  if (reloadButton) {
    reloadButton.addEventListener('click', ()=>{
      loadMovies()
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