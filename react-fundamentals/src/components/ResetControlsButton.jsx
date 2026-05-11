export function ResetControlsButton({ isDisabled, onResetControls }) {
  return (
    <button
      className="reset-controls-button"
      type="button"
      disabled={isDisabled}
      onClick={onResetControls}
    >
      Reset controls
    </button>
  )
}