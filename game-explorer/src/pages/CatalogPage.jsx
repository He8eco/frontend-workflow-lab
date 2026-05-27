import { useState } from 'react'
import { GameList } from '../components/GameList'
import { GameControls } from '../components/GameControls'

export function CatalogPage({
  games,
  loading,
  error,
  favorites,
  onToggleFavorite,
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [genre, setGenre] = useState('all')
  const [platform, setPlatform] = useState('all')
  const [minRating, setMinRating] = useState(0)
  const [sort, setSort] = useState('default')
  const [visibleCount, setVisibleCount] = useState(6)

  const normalizedSearch = searchQuery.trim().toLowerCase()

  const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(normalizedSearch)
  })

  const genres = [...new Set(games.map((game) => game.genre))]

  const genreFilteredGames = filteredGames.filter((game) => {
    if (genre === 'all') {
      return true
    }

    return game.genre === genre
  })

  const platforms = [...new Set(games.flatMap((game) => game.platforms))]
  const platformFilteredGames = genreFilteredGames.filter((game) => {
    if (platform === 'all') {
      return true
    }

    return game.platforms.includes(platform)
  })

  const ratingFilteredGames = platformFilteredGames.filter((game) => {
    return game.rating >= minRating
  })

  const sortedGames = [...ratingFilteredGames].sort((firstGame, secondGame) => {
    switch (sort) {
      case 'rating-desc':
        return secondGame.rating - firstGame.rating

      case 'rating-asc':
        return firstGame.rating - secondGame.rating

      case 'title-asc':
        return firstGame.title.localeCompare(secondGame.title)

      case 'year-desc':
        return secondGame.releaseYear - firstGame.releaseYear

      case 'year-asc':
        return firstGame.releaseYear - secondGame.releaseYear

      default:
        return 0
    }
  })

  const visibleGames = sortedGames.slice(0, visibleCount)

  const hasMoreGames = visibleCount < sortedGames.length

  function handleLoadMore() {
    setVisibleCount((currentCount) => currentCount + 6)
  }

  function handleResetControls() {
    setSearchQuery('')
    setGenre('all')
    setPlatform('all')
    setMinRating(0)
    setSort('default')
    setVisibleCount(6)
  }

  const hasActiveControls =
    searchQuery.trim() !== '' ||
    genre !== 'all' ||
    platform !== 'all' ||
    minRating !== 0 ||
    sort !== 'default'

  let catalogContent

  if (loading) {
    catalogContent = <p className="catalog-message">Loading games...</p>
  } else if (error) {
    catalogContent = (
      <p className="catalog-message catalog-message--error">{error}</p>
    )
  } else if (sortedGames.length === 0) {
    catalogContent = <p className="catalog-message">No games found</p>
  } else {
    catalogContent = (
      <GameList
        games={visibleGames}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    )
  }

  return (
    <main className="catalog-page">
      <GameControls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        genre={genre}
        setGenre={setGenre}
        genres={genres}
        platform={platform}
        setPlatform={setPlatform}
        platforms={platforms}
        minRating={minRating}
        setMinRating={setMinRating}
        sort={sort}
        setSort={setSort}
        hasActiveControls={hasActiveControls}
        handleResetControls={handleResetControls}
      />

      {catalogContent}

      {hasMoreGames && (
        <div className="load-more-wrapper">
          <button
            className="load-more-button"
            type="button"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        </div>
      )}
    </main>
  )
}
