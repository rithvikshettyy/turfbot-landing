export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="wrap">
        <div className="head">
          <h2 className="h-sec reveal">Simple. Fast. Automated.</h2>
        </div>

        <div className="steps">
          <div className="step reveal">
            <div className="circle">
              <svg viewBox="0 0 24 24">
                <path d="M7 2l13 7-5 2-2 5z" />
              </svg>
            </div>
            <div className="num">01</div>
            <h3>Player clicks &quot;Book Now&quot;</h3>
            <p>Player clicks &quot;Book Now&quot; on your turf page.</p>
          </div>

          <div className="step reveal d1">
            <div className="circle">
              <svg viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
              </svg>
            </div>
            <div className="num">02</div>
            <h3>WhatsApp opens and books the slot</h3>
            <p>
              WhatsApp opens with a ready-to-send message, then the booking runs
              itself: slot, confirmation and payment.
            </p>
          </div>

          <div className="step reveal d2">
            <div className="circle">
              <svg viewBox="0 0 24 24">
                <path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5z" />
              </svg>
            </div>
            <div className="num">03</div>
            <h3>Booking confirmed + payment link sent</h3>
            <p>
              Booking is confirmed and a UPI payment link is sent automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
