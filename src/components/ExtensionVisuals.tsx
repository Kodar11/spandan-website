/**
 * Illustrative product visuals, drawn in HTML/CSS after the extension's own
 * popup and settings page. They show sample tabs, so each one is hidden from
 * assistive tech and paired with a plain-language description instead.
 */
import { useEffect, useState, type CSSProperties } from 'react'
import Icon, { type IconName } from './Icon'
import Logo from './Logo'

export type PlaybackState = 'playing' | 'paused' | 'waiting'

const STATUS: Record<
  PlaybackState,
  { title: string; detail: string; icon: IconName }
> = {
  playing: { title: 'Music playing', detail: 'Playing normally.', icon: 'wave' },
  paused: {
    title: 'Music paused',
    detail: 'YouTube is playing in another tab.',
    icon: 'pause',
  },
  waiting: {
    title: 'Waiting to resume',
    detail: 'Browser is quiet. Resuming in 3s.',
    icon: 'clock',
  },
}

function Toggle({ on = true }: { on?: boolean }) {
  return <span className={`x-toggle${on ? ' is-on' : ''}`} />
}

/* ---------------------------------------------------------------------- */

export function Popup({
  state,
  className = '',
}: {
  state: PlaybackState
  className?: string
}) {
  const s = STATUS[state]
  return (
    <div className={`x-popup ${className}`} aria-hidden="true">
      <div className="x-popup__head">
        <span className="x-tile">
          <Logo />
        </span>
        <div>
          <strong>Spandan</strong>
          <span>Adaptive music for deep focus</span>
        </div>
      </div>

      <div className="x-card">
        <div className={`x-status x-status--${state}`}>
          <span className="x-status__icon">
            <Icon name={s.icon} />
          </span>
          <div>
            <strong key={state}>{s.title}</strong>
            <span>{s.detail}</span>
          </div>
          {state === 'waiting' && <span className="x-status__timer" />}
        </div>
        <div className="x-musictab">
          <span className="x-musictab__icon">
            <Icon name="note" />
          </span>
          <div>
            <em>Music tab</em>
            <strong>Lo-fi focus mix · 3 hours</strong>
            <span>youtube.com</span>
          </div>
        </div>
      </div>

      <div className="x-card x-row">
        <div>
          <strong>Enable Spandan</strong>
          <span>Automatically manage background music.</span>
        </div>
        <Toggle />
      </div>

      <span className="x-cta">
        <Icon name="note" />
        Set Current Tab as Music Tab
      </span>
      <span className="x-link">
        <Icon name="settings" />
        Open Settings
      </span>
    </div>
  )
}

/* ---------------------------------------------------------------------- */

type Tab = { title: string; audible: boolean; music?: boolean; active?: boolean }

export function TabStrip({ tabs }: { tabs: Tab[] }) {
  return (
    <div className="x-tabs" aria-hidden="true">
      {tabs.map((t) => (
        <span
          key={t.title}
          className={`x-tab${t.active ? ' is-active' : ''}${
            t.music ? ' is-music' : ''
          }`}
        >
          <span className="x-tab__fav">
            <Icon name="play" />
          </span>
          <span className="x-tab__title">{t.title}</span>
          {t.music && (
            <span className="x-tab__badge" title="Music tab">
              <Icon name="note" />
            </span>
          )}
          <span className={`x-tab__audio${t.audible ? ' is-on' : ''}`}>
            <Icon name={t.audible ? 'speaker' : 'pause'} />
          </span>
        </span>
      ))}
    </div>
  )
}

/* ---------------------------------------------------------------------- */

const PHASES: {
  state: PlaybackState
  label: string
  ms: number
}[] = [
  { state: 'playing', label: 'Music plays', ms: 3400 },
  { state: 'paused', label: 'Another tab plays', ms: 3400 },
  { state: 'waiting', label: 'Quiet again', ms: 3000 },
]

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * The hero scene: a browser window with a music tab and a video tab, and the
 * Spandan popup reporting what it is doing. Cycles through the three states
 * on its own; the chips beneath let visitors step through it manually (and
 * are the only control for reduced-motion visitors, who get no auto-play).
 */
export function HeroScene() {
  const [phase, setPhase] = useState(0)
  const [auto, setAuto] = useState(() => !prefersReducedMotion())

  useEffect(() => {
    if (!auto) return
    const t = window.setTimeout(
      () => setPhase((p) => (p + 1) % PHASES.length),
      PHASES[phase].ms,
    )
    return () => window.clearTimeout(t)
  }, [phase, auto])

  const { state } = PHASES[phase]
  const videoPlaying = state === 'paused'

  return (
    <figure className={`scene scene--${state}`}>
      <div className="scene__window" aria-hidden="true">
        <div className="scene__chrome">
          <span className="scene__dots">
            <i />
            <i />
            <i />
          </span>
          <TabStrip
            tabs={[
              {
                title: 'Lo-fi focus mix · YouTube',
                audible: state === 'playing',
                music: true,
              },
              {
                title: 'Intro to Rust · YouTube',
                audible: videoPlaying,
                active: true,
              },
            ]}
          />
        </div>
        <div className="scene__bar">
          <span className="scene__url">youtube.com/watch</span>
          <span className="scene__ext">
            <Logo />
          </span>
        </div>
        <div className="scene__page">
          <div className="scene__video">
            <span className="scene__play">
              <Icon name={videoPlaying ? 'pause' : 'play'} />
            </span>
            <span className="scene__progress">
              <i />
            </span>
          </div>
          <div className="scene__lines">
            <i style={{ width: '62%' }} />
            <i style={{ width: '38%' }} />
          </div>
        </div>
        <Popup state={state} className="scene__popup" />
      </div>

      <figcaption className="scene__steps">
        <span className="sr-only">
          Illustration: while music plays in a YouTube tab, another tab starts
          a video. Spandan pauses the music, waits for the browser to go quiet,
          then resumes it.
        </span>
        {PHASES.map((p, i) => (
          <button
            key={p.state}
            type="button"
            className={`scene__step${i === phase ? ' is-active' : ''}`}
            aria-pressed={i === phase}
            onClick={() => {
              setAuto(false)
              setPhase(i)
            }}
            style={
              {
                '--ms': `${p.ms}ms`,
              } as CSSProperties
            }
          >
            <span className="scene__stepnum">{i + 1}</span>
            {p.label}
            {auto && i === phase && <span className="scene__steptimer" />}
          </button>
        ))}
      </figcaption>
    </figure>
  )
}

/* ---------------------------------------------------------------------- */

/** The extension's settings page, condensed. Values are the sample defaults. */
export function SettingsPanel() {
  return (
    <div className="x-settings" aria-hidden="true">
      <div className="x-settings__head">
        <span className="x-tile">
          <Logo />
        </span>
        <div>
          <strong>Spandan</strong>
          <span>Adaptive background music for deep focus.</span>
        </div>
      </div>

      <em className="x-label">General</em>
      <div className="x-card x-row">
        <div>
          <strong>Enable Spandan</strong>
          <span>Automatically manage background music.</span>
        </div>
        <Toggle />
      </div>

      <em className="x-label">Playback</em>
      <div className="x-card">
        <div className="x-row x-row--split">
          <div>
            <strong>Resume delay</strong>
            <span>How long to wait after other audio stops.</span>
          </div>
          <span className="x-input">
            3000 <small>ms</small>
          </span>
        </div>
        <div className="x-row x-row--split">
          <div>
            <strong>Fade duration</strong>
            <span>How smoothly music fades out and back in.</span>
          </div>
          <span className="x-input">
            500 <small>ms</small>
          </span>
        </div>
      </div>

      <em className="x-label">Detection</em>
      <div className="x-card">
        <div className="x-row x-row--stack">
          <strong>Website whitelist</strong>
          <span>Only these websites can pause your music.</span>
        </div>
        <div className="x-empty">
          <Icon name="globe" />
          <div>
            <strong>No websites added</strong>
            <span>All audible websites can pause your music.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
