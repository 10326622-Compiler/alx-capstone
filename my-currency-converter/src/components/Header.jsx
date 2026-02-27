/**
 * Header
 * Displays the app title, live-rates badge, and subtitle.
 */
export default function Header() {
  return (
    <div className="header">
      <div className="header-badge">Live Rates</div>
      <h1>Currency <span>Exchange</span></h1>
      <p className="subtitle">Real-time conversion rates</p>
    </div>
  );
}