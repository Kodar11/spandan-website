import type { CSSProperties } from 'react'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import { CONTACT_EMAIL } from '../siteConfig'

const TIPS = [
  'What you expected to happen, and what happened instead',
  'Your browser and its version',
  'Your resume delay, fade duration, and whether you use a whitelist',
]

export default function Contact() {
  return (
    <div className="page container">
      <Seo
        title="Contact Spandan"
        description="Contact Spandan with questions, feedback, or a bug report."
      />

      <div className="contact">
        <header className="contact__intro" data-reveal>
          <span className="eyebrow">Contact</span>
          <h1>Questions, feedback, or a bug report?</h1>
          <p className="contact__sub">
            Spandan is a small independent project, so support is handled by
            email.
          </p>
          <a className="email-pill" href={`mailto:${CONTACT_EMAIL}`}>
            <span className="email-pill__icon">
              <Icon name="mail" />
            </span>
            {CONTACT_EMAIL}
          </a>
        </header>

        <div
          className="contact__card"
          data-reveal
          style={{ '--d': 1 } as CSSProperties}
        >
          <p className="contact__lead">Reporting a bug? It helps to include:</p>
          <ul className="contact-topics">
            {TIPS.map((t) => (
              <li key={t}>
                <Icon name="check" />
                {t}
              </li>
            ))}
          </ul>
          <p className="contact-note">
            Replies come from the person who builds Spandan, so they may take a
            little time.
          </p>
        </div>
      </div>
    </div>
  )
}
