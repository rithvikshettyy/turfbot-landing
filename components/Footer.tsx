export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <div className="logo">TurfBook</div>
            <p className="desc">Automated WhatsApp booking system for turfs.</p>
          </div>
          <a href="#contact" className="foot-wa">
            <svg viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
            </svg>
            <span>
              Chat on WhatsApp
              <small>+91 XXXXX XXXXX</small>
            </span>
          </a>
        </div>
        <p className="copy">© 2026 TurfBook. All rights reserved.</p>
      </div>
    </footer>
  )
}
