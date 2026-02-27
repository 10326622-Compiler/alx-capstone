import { useState, useEffect } from "react";
import { ZERO_DECIMAL_CURRENCIES } from "./constants/currencies";
import { useExchangeRates } from "./hooks/useExchangeRates";

import Header            from "./components/Header";
import AmountInput       from "./components/AmountInput";
import CurrencySelector  from "./components/CurrencySelector";
import SwapButton        from "./components/SwapButton";
import ConversionResult  from "./components/ConversionResult";
import LoadingSpinner    from "./components/LoadingSpinner";
import ErrorMessage      from "./components/ErrorMessage";
import RateMeta          from "./components/RateMeta";
import PopularPairs      from "./components/PopularPairs";

import "./styles/global.css";

export default function App() {
  const [amount, setAmount]             = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency]     = useState("GHS");
  const [activePair, setActivePair]     = useState(null);

  const { rates, loading, error, lastUpdated, fetchRates } = useExchangeRates();

  // Re-fetch whenever the base currency changes
  useEffect(() => {
    fetchRates(fromCurrency);
  }, [fromCurrency]);

  // ── Handlers ──────────────────────────────────────────────
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handlePairSelect = (pair) => {
    setFromCurrency(pair.from);
    setToCurrency(pair.to);
    setActivePair(`${pair.from}-${pair.to}`);
  };

  // ── Derived values ─────────────────────────────────────────
  const convertedAmount = (() => {
    if (!rates || !amount || isNaN(parseFloat(amount))) return null;
    const rate = rates[toCurrency];
    if (!rate) return null;
    const decimals = ZERO_DECIMAL_CURRENCIES.includes(toCurrency) ? 0 : 2;
    return (parseFloat(amount) * rate).toFixed(decimals);
  })();

  const exchangeRate = rates?.[toCurrency];

  // ── Render ─────────────────────────────────────────────────
  return (
    <>
      <div className="app">
        {/* Decorative background orbs */}
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />

        <div className="card">
          <Header />

          <AmountInput value={amount} onChange={setAmount} />

          {/* Currency selector row */}
          <div className="field-group">
            <label className="field-label">From → To</label>
            <div className="currency-row">
              <CurrencySelector value={fromCurrency} onChange={setFromCurrency} />
              <SwapButton onClick={handleSwap} />
              <CurrencySelector value={toCurrency} onChange={setToCurrency} />
            </div>
          </div>

          {/* Divider */}
          <div className="divider">
            <div className="divider-line" />
            <span className="divider-text">Result</span>
            <div className="divider-line" />
          </div>

          {/* Result area — loading / error / result */}
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <ConversionResult
              amount={amount}
              convertedAmount={convertedAmount}
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              exchangeRate={exchangeRate}
            />
          )}

          <RateMeta
            lastUpdated={!loading ? lastUpdated : null}
            onRefresh={() => fetchRates(fromCurrency)}
          />

          <PopularPairs activePair={activePair} onSelect={handlePairSelect} />
        </div>
      </div>
    </>
  );
}