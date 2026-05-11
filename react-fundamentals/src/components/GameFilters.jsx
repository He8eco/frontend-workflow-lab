import { GenreFilter } from './GenreFilter'
import { PlatformFilter } from './PlatformFilter'
import { RatingFilter } from './RatingFilter'
import { ResetControlsButton } from './ResetControlsButton'
import { SearchBar } from './SearchBar'
import { SortSelect } from './SortSelect'

export function GameFilters({
  searchQuery,
  onSearchChange,
  genre,
  onGenreChange,
  platform,
  onPlatformChange,
  minRating,
  onMinRatingChange,
  sort,
  onSortChange,
  isResetDisabled,
  onResetControls,
}) {
  return (
    <section className="game-filters" aria-label="Game controls">
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />

      <div className="game-filters__grid">
        <GenreFilter genre={genre} onGenreChange={onGenreChange} />

        <PlatformFilter
          platform={platform}
          onPlatformChange={onPlatformChange}
        />

        <RatingFilter
          minRating={minRating}
          onMinRatingChange={onMinRatingChange}
        />

        <SortSelect sort={sort} onSortChange={onSortChange} />
      </div>

      <ResetControlsButton
        isDisabled={isResetDisabled}
        onResetControls={onResetControls}
      />
    </section>
  )
}