import { useEffect, useState, type ReactNode } from 'react'
import Seo from './Seo'

export type LegalSection = {
  id: string
  heading: string
  body: ReactNode
}

type LegalPageProps = {
  seoTitle: string
  seoDescription: string
  title: string
  lastUpdated: string
  intro: ReactNode
  sections: LegalSection[]
}

/** Tracks which section heading is currently nearest the top of the page. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const visible = new Map<string, boolean>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting)
        const first = ids.find((id) => visible.get(id))
        if (first) setActive(first)
      },
      { rootMargin: '-90px 0px -60% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])

  return active
}

/**
 * Shared layout for long-form legal pages such as the Privacy Policy. Renders a
 * readable, well-spaced document with a numbered table of contents — a
 * sticky sidebar on wide screens, a collapsible list on small ones — so the
 * page never reads as a wall of text.
 */
export default function LegalPage({
  seoTitle,
  seoDescription,
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  const [ids] = useState(() => sections.map((s) => s.id))
  const active = useActiveSection(ids)

  const tocList = (
    <ol>
      {sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className={active === s.id ? 'is-active' : undefined}
            aria-current={active === s.id ? 'location' : undefined}
          >
            <span className="toc__num">{String(i + 1).padStart(2, '0')}</span>
            {s.heading}
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <div className="page container legal">
      <Seo title={seoTitle} description={seoDescription} />

      <header className="page__header legal__header" data-reveal>
        <span className="eyebrow">Legal</span>
        <h1>{title}</h1>
        <p className="page__meta">Last updated: {lastUpdated}</p>
        <div className="page__intro">{intro}</div>
      </header>

      <div className="legal__body">
        <aside className="legal__aside">
          <nav className="toc toc--sidebar" aria-label="On this page">
            <h2>On this page</h2>
            {tocList}
          </nav>
        </aside>

        <details className="toc toc--inline">
          <summary>
            <span>On this page</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </summary>
          <nav aria-label="On this page (collapsible)">{tocList}</nav>
        </details>

        <article className="prose">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
              <h2 id={`${s.id}-h`}>
                <span className="prose__num">{String(i + 1).padStart(2, '0')}</span>
                {s.heading}
              </h2>
              {s.body}
            </section>
          ))}
        </article>
      </div>
    </div>
  )
}
