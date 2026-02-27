import { CURRENCIES } from "../constants/currencies";

/**
 * CurrencySelector
 * A dropdown for choosing a currency, with a flag emoji prefix.
 *
 * Props:
 *   value    {string}   – selected currency code (e.g. "USD")
 *   onChange {function} – called with the new currency code string
 */
export default function CurrencySelector({ value, onChange }) {
  const selected = CURRENCIES.find((c) => c.code === value);

  return (
    <div className="select-wrapper">
      <span className="select-flag">{selected?.flag}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {CURRENCIES.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code} — {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}