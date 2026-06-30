function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
    </svg>
  )
}

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="wrap">
        <div className="head">
          <h2 className="h-sec reveal">
            Everything you need.
            <br />
            <span className="g">Automated.</span>
          </h2>
        </div>

        <div className="b-grid">
          <article className="b-feature reveal">
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
              </svg>
            </div>
            <h3>Instant slot confirmation</h3>
            <p>Players get confirmed in seconds. No back-and-forth phone calls.</p>
          </article>

          <article className="b-feature reveal d1">
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M13 3H6v2h4c1.1 0 2 .9 2 2H6v2h6c0 1.1-.9 2-2 2H6v2.4L10.6 21h2.8L8.8 15H10c2.2 0 4-1.8 4-4h2V9h-2.2c-.2-.8-.6-1.4-1.1-2H16V5h-3z" />
              </svg>
            </div>
            <h3>UPI payment links</h3>
            <p>Sent automatically in chat. The money lands before players arrive.</p>
          </article>

          <ul className="b-list reveal d2">
            <li>
              <CheckIcon />
              <div>
                <h4>Booking reminders</h4>
                <p>An auto reminder one hour before the slot cuts no-shows.</p>
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <h4>Works on every phone</h4>
                <p>It runs in WhatsApp, so players install nothing.</p>
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <h4>Real-time availability</h4>
                <p>Players see which slots are open before they book.</p>
              </div>
            </li>
            <li>
              <CheckIcon />
              <div>
                <h4>Monthly reports</h4>
                <p>See bookings, revenue and busy hours, every month.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
