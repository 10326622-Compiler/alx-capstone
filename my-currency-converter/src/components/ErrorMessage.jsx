/**
 * ErrorMessage
 * Displays a user-friendly error alert.
 *
 * Props:
 *   message {string} – error text to display
 */
export default function ErrorMessage({ message }) {
  return (
    <div className="error-box" role="alert">
      ⚠ {message}
    </div>
  );
}