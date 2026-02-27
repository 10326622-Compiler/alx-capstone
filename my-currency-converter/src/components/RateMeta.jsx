/**
 * RateMeta
 * Shows the last-updated timestamp and a Refresh button.
 *
 * Props:
 *   lastUpdated {string}   – human-readable time string
 *   onRefresh   {function} – called when the user clicks Refresh
 */
export default function RateMeta({ lastUpdated, onRefresh }) {
  if (!lastUpdated) return null;

  return (
    <div className="meta-row">
      <span className="meta-item">
        Updated <span className="meta-value">{lastUpdated}</span>
      </span>
      <span
        className="meta-item"
        style={{ cursor: "pointer", color: "var(--accent)" }}
        onClick={onRefresh}
        role="button"
        aria-label="Refresh rates"
      >
        ↻ Refresh
      </span>
    </div>
  );
}