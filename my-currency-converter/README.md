# 💱 Currency Converter

A real-time currency converter built with **React** and **Vite**, powered by the [ExchangeRate-API](https://www.exchangerate-api.com/). Supports 30+ currencies with live rates, instant conversion, and a clean dark UI.

---

## 🚀 Live Demo

> Deploy link here (add after deploying to Vercel or Netlify)

---

## 📸 Features

- 🔄 Real-time exchange rates via ExchangeRate-API (v6)
- 💱 Convert between 30+ world currencies
- 🚀 Swap from/to currencies with one click
- ⚡ Popular currency pair quick-select chips
- 🕐 Last-updated timestamp with manual refresh
- 📱 Fully responsive — works on mobile, tablet, desktop
- ⚠️ User-friendly error handling for network failures

---

## 🗂️ Project Structure

```
my-currency-converter/
├── index.html
├── vite.config.js
├── package.json
├── .env                          ← API key (never commit this)
└── src/
    ├── main.jsx                  ← App entry point
    ├── App.jsx                   ← Root component, owns all state
    │
    ├── constants/
    │   └── currencies.js         ← Currency list, popular pairs
    │
    ├── styles/
    │   └── global.css            ← Global styles and CSS variables
    │
    ├── hooks/
    │   └── useExchangeRates.js   ← Custom hook for fetching rates
    │
    └── components/
        ├── Header.jsx            ← App title and badge
        ├── AmountInput.jsx       ← Number input field
        ├── CurrencySelector.jsx  ← Dropdown with flag emoji
        ├── SwapButton.jsx        ← Swap from/to currencies
        ├── ConversionResult.jsx  ← Converted amount display
        ├── LoadingSpinner.jsx    ← Loading state indicator
        ├── ErrorMessage.jsx      ← Error alert display
        ├── RateMeta.jsx          ← Last updated + refresh button
        └── PopularPairs.jsx      ← Quick-select pair chips
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI components and state management |
| Vite | Build tool and dev server |
| ExchangeRate-API | Live currency exchange rates |
| CSS Variables | Theming and consistent design |
| Google Fonts | Syne + Space Mono typography |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18 or higher
- A free API key from [exchangerate-api.com](https://www.exchangerate-api.com/)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/my-currency-converter.git
cd my-currency-converter
```

**2. Install dependencies**
```bash
npm install
```

**3. Create your `.env` file** in the project root
```
VITE_EXCHANGE_API_KEY=your_api_key_here
```

**4. Start the development server**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_EXCHANGE_API_KEY` | Your ExchangeRate-API key (required) |

> **Important:** Never commit your `.env` file to Git. It is already listed in `.gitignore`.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |

---

## 🌍 Supported Currencies

USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, BRL, MXN, KRW, SGD, HKD, NOK, SEK, DKK, NZD, ZAR, TRY, RUB, AED, SAR, THB, IDR, GHS, NGN, KES, EGP, MAD

---

## 🚢 Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

Add `VITE_EXCHANGE_API_KEY` in your Vercel project under **Settings → Environment Variables**.

### Netlify

```bash
npm run build
```

Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop), then add `VITE_EXCHANGE_API_KEY` under **Site Configuration → Environment Variables**.

---

## 🧩 Component Overview

### `useExchangeRates` (custom hook)
Handles all API logic. Fetches from ExchangeRate-API v6 and exposes `{ rates, loading, error, lastUpdated, fetchRates }`.

### `CurrencySelector`
Reusable dropdown that renders a flag emoji alongside each currency name. Accepts `value` and `onChange` props.

### `ConversionResult`
Displays the converted amount, target currency code, and the raw exchange rate (e.g. `1 USD = 14.23 GHS`).

### `AmountInput`
Controlled number input. Passes changes up to `App.jsx` via `onChange`.

### `PopularPairs`
Renders quick-select chip buttons. Clicking a chip sets both `fromCurrency` and `toCurrency` at once.

---

## 📄 License

This project was built as part of the **ALX Capstone Project**.

---

## 🙏 Acknowledgements

- [ExchangeRate-API](https://www.exchangerate-api.com/) for providing free currency data
- [Vite](https://vitejs.dev/) for the lightning-fast build tooling
- [Google Fonts](https://fonts.google.com/) for Syne and Space Mono