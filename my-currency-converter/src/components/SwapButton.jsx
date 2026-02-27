/**
 * SwapButton
 * Rotates 180° on hover. Triggers swapping from/to currencies.
 *
 * Props:
 *   onClick {function} – called when the button is clicked
 */
export default function SwapButton({ onClick }) {
  return (
    <button
      className="swap-btn"
      onClick={onClick}
      title="Swap currencies"
      aria-label="Swap currencies"
    >
      ⇄
    </button>
  );
}