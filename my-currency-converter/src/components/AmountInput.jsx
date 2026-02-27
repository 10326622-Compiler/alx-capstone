/**
 * AmountInput
 * Controlled input for the amount the user wants to convert.
 *
 * Props:
 *   value    {string}   – current amount string
 *   onChange {function} – called with the new string value
 */
export default function AmountInput({ value, onChange }) {
  return (
    <div className="field-group" style={{ marginBottom: 16 }}>
      <label className="field-label">Amount</label>
      <input
        type="number"
        className="amount-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="0"
        min="0"
      />
    </div>
  );
}