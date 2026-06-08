import { Alert, Button, Spinner } from 'react-bootstrap'

export function CatalogState({
  type = 'empty',
  title,
  message,
  actionLabel,
  onAction,
}) {
  const isLoading = type === 'loading'
  const isError = type === 'error'

  return (
    <Alert
      className={`catalog-state catalog-state--${type}`}
      variant={isError ? 'danger' : 'dark'}
    >
      {isLoading && (
        <Spinner
          className="catalog-state__spinner"
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      <div className="catalog-state__content">
        {title && <h2>{title}</h2>}
        {message && <p>{message}</p>}

        {actionLabel && onAction && (
          <Button
            className="catalog-state__button"
            type="button"
            onClick={onAction}
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </Alert>
  )
}
