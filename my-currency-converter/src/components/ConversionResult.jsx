import { CURRENCIES } from "../constants/currencies";

/**
 * ConversionResult
 * Shows the converted amount, currency code, and live exchange rate.
 *
 * Props:
 *   amount         {string} – original amount entered by the user
 *   convertedAmount{string|null} – computed result (null while loading/error)
 *   fromCurrency   {string} – source currency code
 *   toCurrency     {string} – target currency code
 *   exchangeRate   {number|undefined}
 */
export default function ConversionResult({
  amount,
  convertedAmount,
  fromCurrency,
  toCurrency,
  exchangeRate,
}) {
  const fromInfo = CURRENCIES.find((c) => c.code === fromCurrency);

  if (convertedAmount === null) return null;

  return (
    <div className="result-box">
      <div className="result-label">
        {amount || "0"} {fromInfo?.name} equals
      </div>
      <div className="result-amount">
        <span>{parseFloat(convertedAmount).toLocaleString()}</span>
        <span className="result-currency">{toCurrency}</span>
      </div>
      {exchangeRate && (
        <div className="result-rate">
          1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
        </div>
      )}
    </div>
  );
}