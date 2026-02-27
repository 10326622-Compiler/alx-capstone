import { useState, useCallback } from "react";

export function useExchangeRates() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchRates = useCallback(async (base) => {
    setLoading(true);
    setError(null);

    try {
      const key = import.meta.env.VITE_EXCHANGE_API_KEY;
      const res = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${base}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      if (data.result === "error") throw new Error(data["error-type"]);

      setRates(data.conversion_rates);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch {
      setError("Unable to fetch exchange rates. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }, []);

  return { rates, loading, error, lastUpdated, fetchRates };
}