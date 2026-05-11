export function PlatformFilter({ platform, onPlatformChange }) {
  return (
    <section className="filter-panel" aria-label="Platform filter">
      <label className="filter-panel__label" htmlFor="game-platform">
        Platform
      </label>

      <select
        id="game-platform"
        className="filter-panel__select"
        value={platform}
        onChange={(event) => onPlatformChange(event.target.value)}
      >
        <option value="all">All platforms</option>
        <option value="PC">PC</option>
        <option value="PlayStation">PlayStation</option>
      </select>
    </section>
  )
}