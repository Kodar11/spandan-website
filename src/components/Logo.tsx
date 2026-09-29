import { useId } from 'react'

type LogoProps = {
  className?: string
  /** Accessible label; empty string marks the mark as decorative. */
  alt?: string
}

/**
 * The Spandan mark — the extension icon's cyan-to-indigo "S" with its two
 * faint echo arcs, drawn inline so it stays crisp at every size. Geometry is
 * taken unchanged from the extension's icon (public/favicon.svg).
 */
export default function Logo({ className, alt = '' }: LogoProps) {
  const id = useId()
  const grad = `spandan-grad-${id}`
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    >
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset="1" stopColor="#818CF8" />
        </linearGradient>
      </defs>
      <path
        d="M10 24C10 16 16 10 24 10"
        stroke={`url(#${grad})`}
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".35"
      />
      <path
        d="M38 24C38 32 32 38 24 38"
        stroke={`url(#${grad})`}
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".35"
      />
      <path
        d="M16 18C16 13.6 19.6 10 24 10H32C36.4 10 40 13.6 40 18C40 22.4 36.4 26 32 26H24C19.6 26 16 29.6 16 34C16 38.4 19.6 42 24 42H32C36.4 42 40 38.4 40 34"
        stroke={`url(#${grad})`}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}
