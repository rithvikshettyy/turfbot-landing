const faqs = [
  {
    q: 'Do my players need to install an app?',
    a: 'No. Everything happens inside WhatsApp, which your players already have. They tap a link, pick a slot and pay. Nothing to download.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most turfs are live within 24 hours. Send us your details and we configure your slots, payment link and reminders for you.',
  },
  {
    q: 'How do payments work?',
    a: 'A UPI payment link is sent in the chat as soon as a slot is picked, so bookings are paid before kickoff. The money goes straight to your account.',
  },
  {
    q: 'Can I change plans or cancel later?',
    a: 'Yes. Plans are monthly, so you can upgrade, downgrade or cancel anytime. No lock-in.',
  },
]

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="head">
          <h2 className="h-sec reveal">
            Questions, <span className="g">answered.</span>
          </h2>
        </div>

        <div className="faq-list reveal d1">
          {faqs.map((item, i) => (
            <details key={i}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
