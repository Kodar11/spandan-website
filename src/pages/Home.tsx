import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import GetSpandan from '../components/GetSpandan'
import Icon, { type IconName } from '../components/Icon'
import Logo from '../components/Logo'
import {
  HeroScene,
  SettingsPanel,
  TabStrip,
} from '../components/ExtensionVisuals'

const d = (n: number) => ({ '--d': n }) as CSSProperties

/* The manual loop Spandan replaces, then the same loop with Spandan. */
type FlowStep = { label: string; who?: 'you' | 'spandan' }

const WITHOUT: FlowStep[] = [
  { label: 'Music playing' },
  { label: 'A video starts' },
  { label: 'Pause the music', who: 'you' },
  { label: 'Video ends' },
  { label: 'Resume the music', who: 'you' },
]

const WITH: FlowStep[] = [
  { label: 'Music playing' },
  { label: 'A video starts' },
  { label: 'Music pauses', who: 'spandan' },
  { label: 'Video ends' },
  { label: 'Music resumes', who: 'spandan' },
]

const FEATURES: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'pause',
    title: 'Automatic pause',
    body: 'When another tab starts playing audio, your music pauses.',
  },
  {
    icon: 'resume',
    title: 'Automatic resume',
    body: 'When the browser goes quiet, your music comes back on its own.',
  },
  {
    icon: 'clock',
    title: 'Resume delay',
    body: 'Choose how long to wait before resuming, so a short gap in a video doesn’t bring the music straight back.',
  },
  {
    icon: 'fade',
    title: 'Smooth fade',
    body: 'Music fades out and back in over a duration you set — or instantly, if you prefer.',
  },
  {
    icon: 'bookmark',
    title: 'Same position',
    body: 'Playback picks up exactly where it stopped.',
  },
  {
    icon: 'note',
    title: 'Music-tab selection',
    body: 'Pick any YouTube tab as your music tab from the popup.',
  },
  {
    icon: 'globe',
    title: 'Website whitelist',
    body: 'Limit which sites can pause your music. Leave it empty and any audible site can.',
  },
  {
    icon: 'hand',
    title: 'Manual control respected',
    body: 'Pause or mute the music yourself and Spandan leaves it that way.',
  },
  {
    icon: 'power',
    title: 'Enable or disable',
    body: 'Switch Spandan off from the popup whenever you want to be in charge.',
  },
  {
    icon: 'device',
    title: 'Local settings',
    body: 'Your preferences and music-tab choice are stored in your browser.',
  },
]

const PRIVACY: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'userOff',
    title: 'No account',
    body: 'There is nothing to sign up for or log in to.',
  },
  {
    icon: 'cloudOff',
    title: 'No Spandan backend',
    body: 'Spandan doesn’t operate a server that receives your browsing or playback information.',
  },
  {
    icon: 'device',
    title: 'Settings stay local',
    body: 'Preferences and your music-tab choice live in the browser’s extension storage.',
  },
  {
    icon: 'tab',
    title: 'Tab info, used locally',
    body: 'Spandan checks which tabs are playing audio and the state of your music tab — only to do its job.',
  },
]

function Flow({ steps, variant }: { steps: FlowStep[]; variant: 'without' | 'with' }) {
  return (
    <ol className={`flow flow--${variant}`}>
      {steps.map((s, i) => (
        <li key={s.label} className={s.who ? `flow__step is-${s.who}` : 'flow__step'}>
          {i > 0 && (
            <span className="flow__arrow" aria-hidden="true">
              <Icon name="arrowRight" />
            </span>
          )}
          <span className="flow__chip">
            {s.who === 'you' && (
              <span className="flow__who">
                <Icon name="hand" />
                You
              </span>
            )}
            {s.who === 'spandan' && (
              <span className="flow__who">
                <Logo />
                Spandan
              </span>
            )}
            {s.label}
          </span>
        </li>
      ))}
      {variant === 'without' && (
        <li className="flow__step flow__step--repeat">
          <span className="flow__arrow" aria-hidden="true">
            <Icon name="arrowRight" />
          </span>
          <span className="flow__repeat">
            <Icon name="repeat" />
            Repeat, all day
          </span>
        </li>
      )}
    </ol>
  )
}

export default function Home() {
  return (
    <>
      <Seo
        title="Spandan — Adaptive background music for deep focus"
        description="Spandan automatically pauses your background music when another browser tab plays audio and resumes it when the browser becomes quiet."
      />

      {/* Hero ----------------------------------------------------------- */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="hero__brand">
              <span className="x-tile x-tile--lg">
                <Logo />
              </span>
              Spandan
              <span className="hero__kind">Browser extension</span>
            </p>
            <h1>
              Background music that knows when to be{' '}
              <span className="text-gradient">quiet.</span>
            </h1>
            <p className="hero__lead">
              Spandan automatically pauses your music when another browser tab
              starts playing audio, then resumes it when the browser is quiet
              again.
            </p>
            <div className="hero__actions">
              <GetSpandan className="btn btn--primary btn--lg" />
              <a className="btn btn--ghost btn--lg" href="#how-it-works">
                See how it works
                <Icon name="arrowDown" />
              </a>
            </div>
            <ul className="hero__facts">
              <li>
                <Icon name="check" />
                No account
              </li>
              <li>
                <Icon name="check" />
                Settings stay in your browser
              </li>
              <li>
                <Icon name="check" />
                For Chromium browsers
              </li>
            </ul>
          </div>

          <div className="hero__visual">
            <HeroScene />
          </div>
        </div>
      </section>

      {/* Problem --------------------------------------------------------- */}
      <section className="section problem">
        <div className="container">
          <header className="section__head section__head--center" data-reveal>
            <span className="eyebrow">The problem</span>
            <h2>You shouldn’t have to be your music’s pause button.</h2>
            <p>
              A lecture, a tutorial, a clip someone sent you — every time
              another tab makes a sound, you stop what you’re doing twice.
            </p>
          </header>

          <div className="compare">
            <div className="compare__row" data-reveal style={d(1)}>
              <h3 className="compare__label">Without Spandan</h3>
              <Flow steps={WITHOUT} variant="without" />
            </div>
            <div className="compare__row compare__row--with" data-reveal style={d(2)}>
              <h3 className="compare__label">
                With Spandan
              </h3>
              <Flow steps={WITH} variant="with" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works ---------------------------------------------------- */}
      <section id="how-it-works" className="section section--anchor how">
        <div className="container">
          <header className="section__head section__head--split" data-reveal>
            <div>
              <span className="eyebrow">How it works</span>
              <h2>Choose your music tab. Spandan handles the rest.</h2>
            </div>
            <p>
              No playlists to import and no new player to learn. Spandan works
              with the YouTube tab you already have open.
            </p>
          </header>

          <ol className="steps">
            <li className="step" data-reveal style={d(0)}>
              <div className="step__visual">
                <span className="x-cta x-cta--demo" aria-hidden="true">
                  <Icon name="note" />
                  Set Current Tab as Music Tab
                </span>
              </div>
              <span className="step__num">01</span>
              <h3>Choose your music</h3>
              <p>
                Open a YouTube tab, then set it as your music tab from the
                Spandan popup.
              </p>
            </li>
            <li className="step" data-reveal style={d(1)}>
              <div className="step__visual">
                <TabStrip
                  tabs={[
                    { title: 'Lo-fi focus mix', audible: false, music: true },
                    { title: 'Lecture 12', audible: true, active: true },
                  ]}
                />
              </div>
              <span className="step__num">02</span>
              <h3>Browse normally</h3>
              <p>
                Watch a lecture, open a tutorial, play a clip. There’s nothing
                to remember.
              </p>
            </li>
            <li className="step" data-reveal style={d(2)}>
              <div className="step__visual">
                <div className="mini-status" aria-hidden="true">
                  <span className="mini-status__item x-status--paused">
                    <Icon name="pause" />
                    Paused
                  </span>
                  <Icon name="arrowRight" className="mini-status__arrow" />
                  <span className="mini-status__item x-status--playing">
                    <Icon name="wave" />
                    Resumed at 1:42:08
                  </span>
                </div>
              </div>
              <span className="step__num">03</span>
              <h3>Spandan handles the rest</h3>
              <p>
                Music pauses when another tab plays, and returns from the same
                spot once the browser is quiet.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Features -------------------------------------------------------- */}
      <section className="section features">
        <div className="container features__inner">
          <div>
            <header className="section__head" data-reveal>
              <span className="eyebrow">Features</span>
              <h2>Small, and complete.</h2>
              <p>
                Everything Spandan does, in one list. Each setting exists to
                make the pause-and-resume feel natural.
              </p>
            </header>

            <ul className="feature-grid">
              {FEATURES.map((f, i) => (
                <li key={f.title} className="feature" data-reveal style={d(i % 2)}>
                  <span className="feature__icon">
                    <Icon name={f.icon} />
                  </span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="features__visual" data-reveal style={d(1)}>
            <SettingsPanel />
            <p className="features__caption">The Spandan settings page.</p>
          </div>
        </div>
      </section>

      {/* Privacy --------------------------------------------------------- */}
      <section className="section privacy-band">
        <div className="container privacy-band__inner">
          <div className="privacy-band__copy" data-reveal>
            <span className="eyebrow">Local-first</span>
            <h2>Works inside your browser. Nothing to sign up for.</h2>
            <ul className="privacy-points">
              {PRIVACY.map((p) => (
                <li key={p.title}>
                  <span className="privacy-points__icon">
                    <Icon name={p.icon} />
                  </span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/privacy" className="arrow-link">
              Read the privacy policy
              <Icon name="arrowRight" />
            </Link>
          </div>

          <div className="boundary" data-reveal style={d(1)} aria-hidden="true">
            <span className="boundary__label">Your browser</span>
            <div className="boundary__row">
              <span className="node">
                <Icon name="tab" />
                Tabs
              </span>
              <span className="boundary__line" />
              <span className="node node--brand">
                <Logo />
                Spandan
              </span>
              <span className="boundary__line" />
              <span className="node">
                <Icon name="device" />
                Extension storage
              </span>
            </div>
            <div className="boundary__outside">
              <Icon name="cloudOff" />
              No Spandan server
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA ------------------------------------------------------- */}
      <section className="section final">
        <div className="container final__inner" data-reveal>
          <span className="x-tile x-tile--xl" aria-hidden="true">
            <Logo />
          </span>
          <h2>Let your music stay in the background.</h2>
          <p>Choose a tab once. Spandan takes care of the pauses.</p>
          <div className="final__actions">
            <GetSpandan className="btn btn--primary btn--lg" />
            <Link to="/about" className="btn btn--ghost btn--lg">
              Why Spandan exists
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
