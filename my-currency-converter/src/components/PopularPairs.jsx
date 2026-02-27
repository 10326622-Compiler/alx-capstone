import { POPULAR_PAIRS } from "../constants/currencies";

/**
 * PopularPairs
 * Quick-select chip buttons for common currency pairs.
 *
 * Props:
 *   activePair {string|null}  – currently active pair key, e.g. "USD-EUR"
 *   onSelect   {function}     – called with { from, to } when a chip is clicked
 */
export default function PopularPairs({ activePair, onSelect }) {
  return (
    <div style={{ marginTop: 24 }}>
      <div className="section-title">Popular Pairs</div>
      <div className="popular-chips">
        {POPULAR_PAIRS.map((pair) => {
          const key = `${pair.from}-${pair.to}`;
          return (
            <button
              key={key}
              className={`chip ${activePair === key ? "active" : ""}`}
              onClick={() => onSelect(pair)}
            >
              {pair.from}/{pair.to}
            </button>
          );
        })}
      </div>
    </div>
  );
}