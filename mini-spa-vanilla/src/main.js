import './style.css'

document.querySelector('#app').innerHTML = `
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
        <strong class="favorites-count">0</strong>
      </div>
    </header>

    <section class="controls panel">
      <div class="control-group">
        <label for="search">Search</label>
        <input id="search" type="text" placeholder="Search movies..." />
      </div>

      <div class="control-group">
        <label for="genre">Genre</label>
        <select id="genre">
          <option>All genres</option>
        </select>
      </div>

      <div class="control-group">
        <label for="sort">Sort by</label>
        <select id="sort">
          <option>Default</option>
        </select>
      </div>

      <button class="secondary-btn" type="button">Reset filters</button>
    </section>

    <section class="catalog panel">
      <div class="catalog-toolbar">
        <h2>Catalog</h2>
        <p>Showing <span>0</span> results</p>
      </div>

      <div class="movie-grid">
        <article class="movie-card placeholder-card">
          <div class="poster-placeholder"></div>
          <div class="movie-card-body">
            <h3>Movie card placeholder</h3>
            <p>Movie info will appear here.</p>
          </div>
        </article>

        <article class="movie-card placeholder-card">
          <div class="poster-placeholder"></div>
          <div class="movie-card-body">
            <h3>Movie card placeholder</h3>
            <p>Movie info will appear here.</p>
          </div>
        </article>

        <article class="movie-card placeholder-card">
          <div class="poster-placeholder"></div>
          <div class="movie-card-body">
            <h3>Movie card placeholder</h3>
            <p>Movie info will appear here.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="status panel">
      <h2>Status</h2>
      <p>No data loaded yet.</p>
    </section>

    <section class="pagination panel">
      <button type="button" disabled>Prev</button>
      <button type="button" class="active-page">1</button>
      <button type="button" disabled>2</button>
      <button type="button" disabled>3</button>
      <button type="button" disabled>Next</button>
    </section>
  </main>
`

setupCounter(document.querySelector('#counter'))
