/**
 * LoadingSpinner
 * Shown while exchange rates are being fetched.
 */
export default function LoadingSpinner() {
  return (
    <div className="loading">
      <div className="spinner" />
      Fetching latest rates...
    </div>
  );
}