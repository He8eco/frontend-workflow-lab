import { GenreFilter } from './GenreFilter'
import { PlatformFilter } from './PlatformFilter'
import { RatingFilter } from './RatingFilter'
import { ResetControlsButton } from './ResetControlsButton'
import { SearchBar } from './SearchBar'
import { SortSelect } from './SortSelect'

export function GameControls({
  searchQuery,
  setSearchQuery,
  genre,
  setGenre,
  genres,
  platform,
  setPlatform,
  platforms,
  minRating,
  setMinRating,
  sort,
  setSort,
  handleResetControls,
  hasActiveControls,
}) {
  return (
    <section className="game-controls">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <GenreFilter genre={genre} setGenre={setGenre} genres={genres} />
      <RatingFilter minRating={minRating} setMinRating={setMinRating} />
      <PlatformFilter
        platform={platform}
        setPlatform={setPlatform}
        platforms={platforms}
      />
      <SortSelect sort={sort} setSort={setSort} />
      <ResetControlsButton
        handleResetControls={handleResetControls}
        hasActiveControls={hasActiveControls}
      />
    </section>
  )
}
