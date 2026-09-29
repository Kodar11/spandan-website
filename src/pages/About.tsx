import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import Logo from '../components/Logo'

const d = (n: number) => ({ '--d': n }) as CSSProperties

const IS_NOT = [
  'A music streaming service',
  'A recommendation engine',
  'An AI assistant',
  'A social platform',
  'An analytics product',
]

export default function About() {
  return (
    <div className="page container about">
      <Seo
        title="About — Spandan"
        description="About Spandan — a focused browser extension for adaptive background music."
      />

      <header className="page__header about__header" data-reveal>
        <span className="eyebrow">About</span>
        <h1>One small problem, solved quietly.</h1>
        <p className="page__intro">
          Background music is great until another tab needs your attention.
          Spandan was built to remove that tiny interruption from the workflow.
        </p>
      </header>

      <div className="about__story prose prose--wide" data-reveal>
        <h2>Why it exists</h2>
        <p>
          A lot of focused work happens with music in the background: writing
          code, studying, reading, working through a long document. And a lot
          of that work also involves other audio — a lecture, a tutorial, a
          video someone shared, a clip you need to check.
        </p>
        <p>
          Each time, the routine is the same. Find the music tab. Pause it.
          Watch the thing. Find the music tab again. Press play. It takes a few
          seconds, but it happens many times a day, and every time it pulls you
          out of what you were doing.
        </p>
        <p>
          Spandan does those few seconds for you. You tell it which YouTube tab
          is your music. When another tab starts playing audio, Spandan pauses
          the music. When the browser is quiet again, it waits a moment, then
          fades the music back in from the same spot.
        </p>
      </div>

      <div className="about__defs">
        <section className="about__def about__def--is" data-reveal>
          <span className="about__def-mark" aria-hidden="true">
            <Logo />
          </span>
          <h2>What Spandan is</h2>
          <p className="about__def-lead">
            Automatic background-music control for your browser.
          </p>
          <p>
            A browser extension that watches for audible tabs and pauses or
            resumes the one music tab you chose. A few settings — resume delay,
            fade duration, a website whitelist — let you tune how it behaves.
          </p>
        </section>

        <section className="about__def" data-reveal style={d(1)}>
          <h2>What Spandan is not</h2>
          <ul className="not-list">
            {IS_NOT.map((item) => (
              <li key={item}>
                <span aria-hidden="true">—</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="about__close" data-reveal>
        <span className="eyebrow">Built as a focused utility</span>
        <h2>It does one thing, on purpose.</h2>
        <p>
          It would be easy to keep adding things: playlists, statistics,
          focus timers, a dashboard. Spandan deliberately doesn’t. The best
          version of a tool like this is the one you forget is installed —
          until you notice you haven’t touched the pause button all day.
        </p>
        <p>
          Spandan is a small independent project. If something doesn’t work
          the way you expect, or you have an idea that fits its narrow scope,
          the <Link to="/contact" className="link">contact page</Link> is the
          best way to reach the person who builds it.
        </p>
        <Link to="/" className="arrow-link">
          See how Spandan works
          <Icon name="arrowRight" />
        </Link>
      </section>
    </div>
  )
}
