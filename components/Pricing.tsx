function WaIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5z" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap pricing-grid">
        <div className="head">
          <h2 className="h-sec reveal">
            Choose the plan
            <br />
            <span className="g">that fits you.</span>
          </h2>
        </div>

        <div className="plans">
          {/* Starter */}
          <div className="plan reveal">
            <h3>Starter</h3>
            <div className="price">
              ₹999<span>/month</span>
            </div>
            <ul>
              <li>
                <CheckIcon />
                WhatsApp redirect
              </li>
              <li>
                <CheckIcon />
                Manual slot sheet
              </li>
              <li>
                <CheckIcon />
                Up to 20 bookings/day
              </li>
            </ul>
            <a href="#contact" className="plan-cta">
              <WaIcon />
              Chat on WhatsApp
            </a>
          </div>

          {/* Pro */}
          <div className="plan popular reveal d1">
            <span className="badge">MOST POPULAR</span>
            <h3>Pro</h3>
            <div className="price">
              ₹2,499<span>/month</span>
            </div>
            <ul>
              <li>
                <CheckIcon />
                Full WhatsApp bot
              </li>
              <li>
                <CheckIcon />
                Auto confirmations
              </li>
              <li>
                <CheckIcon />
                UPI payment links
              </li>
              <li>
                <CheckIcon />
                Monthly booking reports
              </li>
            </ul>
            <a href="#contact" className="plan-cta">
              <WaIcon />
              Chat on WhatsApp
            </a>
          </div>

          {/* Business */}
          <div className="plan reveal d2">
            <h3>Business</h3>
            <div className="price">
              ₹4,999<span>/month</span>
            </div>
            <ul>
              <li>
                <CheckIcon />
                Multi-turf management
              </li>
              <li>
                <CheckIcon />
                Priority support
              </li>
              <li>
                <CheckIcon />
                Tournament management
              </li>
              <li>
                <CheckIcon />
                Custom branding
              </li>
            </ul>
            <a href="#contact" className="plan-cta">
              <WaIcon />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
