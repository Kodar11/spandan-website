import { CHROME_WEB_STORE_URL } from '../siteConfig'

type GetSpandanProps = {
  className?: string
  /** Visible label when the store listing is live. */
  label?: string
  onClick?: () => void
}

/**
 * The primary call to action, shared by every page. Links to the Chrome Web
 * Store once CHROME_WEB_STORE_URL is set; until then it renders as a
 * non-interactive "Coming soon" badge rather than pointing at a fake URL.
 */
export default function GetSpandan({
  className = 'btn btn--primary',
  label = 'Get Spandan',
  onClick,
}: GetSpandanProps) {
  if (!CHROME_WEB_STORE_URL) {
    return (
      <span className={`${className} is-soon`} aria-disabled="true">
        Coming soon
        <span className="sr-only"> to the Chrome Web Store</span>
      </span>
    )
  }

  return (
    <a
      href={CHROME_WEB_STORE_URL}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {label}
      <span className="sr-only"> from the Chrome Web Store</span>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12h14m0 0l-5-5m5 5l-5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}
