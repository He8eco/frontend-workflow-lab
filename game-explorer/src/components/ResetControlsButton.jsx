import { Button } from 'react-bootstrap'

export function ResetControlsButton({
  handleResetControls,
  hasActiveControls,
}) {
  return (
    <Button
      className="reset-controls-button"
      type="button"
      onClick={handleResetControls}
      disabled={!hasActiveControls}
    >
      Reset controls
    </Button>
  )
}
