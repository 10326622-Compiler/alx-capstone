import { useState, useCallback } from "react";

/**
 * useExchangeRates
 * Fetches exchange rates for a given base currency.
 * Falls back to Claude AI estimates if the public API is unavailable.
 *
 * Returns: { rates, loading, error, lastUpdated, fetchRates }
 */
export function useExchangeRates() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchRates = useCallback(async (base) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setRates(data.rates);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch {
      try {
        const response = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "claude-sonnet-4-6",
            max_tokens: 1000,
            messages: [{
              role: "user",
              content: `Give me approximate current exchange rates from ${base} to all major currencies as a JSON object (currency code => rate). Include: EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, BRL, MXN, KRW, SGD, HKD, NOK, SEK, DKK, NZD, ZAR, TRY, AED, SAR, THB, IDR, GHS, NGN, KES, EGP, MAD, RUB, USD. Return ONLY the JSON object, no explanation or markdown.`
            }]
          })
        });
        const aiData = await response.json();
        const text = aiData.content?.[0]?.text || "{}";
        const clean = text.replace(/```json|```/g, "").trim();
        const parsed = JSON.parse(clean);
        parsed[base] = 1;
        setRates(parsed);
        setLastUpdated(new Date().toLocaleTimeString() + " (est.)");
      } catch {
        setError("Unable to fetch exchange rates. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { rates, loading, error, lastUpdated, fetchRates };
}