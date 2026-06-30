export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg" id="heroBg" />
      <div className="hero-overlay" />
      <div className="wrap">
        <div className="hero-content">
          <h1 className="reveal">
            Your turf, booked on{' '}
            <span className="accent">WhatsApp</span> Automatically
          </h1>
          <p className="sub reveal d1">
            Confirmations, UPI payments and reminders run themselves, so you
            stop losing slots to missed calls and a full voicemail.
          </p>
          <div className="hero-btns reveal d2">
            <a href="#contact" className="btn btn-primary">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a href="#pricing" className="btn btn-ghost">
              See pricing
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 16l-6-6h12z" />
              </svg>
            </a>
          </div>
          <ul className="hero-trust reveal d3">
            <li>Live in 24 hours</li>
            <li>Players need no app</li>
            <li>From ₹999/mo</li>
          </ul>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 16l-6-6h12z" />
        </svg>
      </div>
    </header>
  )
}
