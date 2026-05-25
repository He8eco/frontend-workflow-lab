export function ResetControlsButton({handleResetControls, hasActiveControls}) {
  return (
    <button
      type="button"
      onClick={handleResetControls}
      disabled={!hasActiveControls}
    >
      Reset controls
    </button>
  )
}
