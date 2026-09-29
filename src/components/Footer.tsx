import { Link } from 'react-router-dom'
import Logo from './Logo'
import { CHROME_WEB_STORE_URL, CONTACT_EMAIL, TAGLINE } from '../siteConfig'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__brandline">
              <Logo className="footer__mark" />
              Spandan
            </span>
            <p className="footer__tagline">{TAGLINE}</p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {CHROME_WEB_STORE_URL && (
                <li>
                  <a
                    href={CHROME_WEB_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__store"
                  >
                    Chrome Web Store
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M8 16L16 8M9 8h7v7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Spandan</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </footer>
  )
}
