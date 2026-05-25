export function GenreFilter({genre, setGenre, genres}) {
    <select value={genre} onChange={(event) => setGenre(event.target.value)}>
        <option value="all">All genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
}