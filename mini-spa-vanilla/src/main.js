import './style.css'
import { initialState } from './state/appState.js'
import { renderApp } from './ui/renderApp.js'
import { getMovies } from './api/movieApi.js'

const state = {...initialState}

async function initApp() {
  state.loading = true
  renderApp(state)

  try {
    const movies = await getMovies()
    state.movies = movies
    state.loading = false
    renderApp(state)
  } catch (error) {
    state.error = "Failed to load movies"
    state.loading = false
    renderApp(state)
  }
}

initApp()