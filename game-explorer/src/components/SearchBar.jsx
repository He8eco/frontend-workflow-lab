export function SearchBar({searchQuery, setSearchQuery}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search games..."
      />
    </div>
  )
}
