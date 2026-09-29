/**
 * Small line-icon set used across the site. Every icon is decorative — the
 * text beside it always carries the meaning.
 */
const PATHS = {
  note: 'M9 18V5l11-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM20 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
  wave: 'M4 10v4M8 6v12M12 9v6M16 4v16M20 10v4',
  pause: 'M9 6v12M15 6v12',
  play: 'M8 5.5v13l10.5-6.5L8 5.5z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  speaker:
    'M11 5L6 9H3v6h3l5 4V5zM15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13',
  resume: 'M3 12a9 9 0 1 0 2.64-6.36L3 8.3M3 3v5.3h5.3',
  fade: 'M3 18c4.5 0 5-12 9-12s4.5 12 9 12',
  bookmark: 'M6 4h12v16l-6-4.2L6 20V4z',
  tab: 'M3 8h18v11H3V8zM3 8l1.6-3h6.8L13 8',
  globe:
    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z',
  hand:
    'M8 13V5.5a1.5 1.5 0 0 1 3 0V11m0-1.5V4a1.5 1.5 0 0 1 3 0v7m0-5a1.5 1.5 0 0 1 3 0v5.5m0-3a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.2a6 6 0 0 1-4.9-2.5L3.6 15.4a1.5 1.5 0 0 1 2.3-1.9L8 15.5',
  power: 'M12 3v8M6.3 6.3a8 8 0 1 0 11.4 0',
  device: 'M4 5h16v11H4V5zM2 19h20',
  check: 'M5 12.5l4.2 4.2L19 7',
  userOff:
    'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20a7.5 7.5 0 0 1 12.2-5.8M3 3l18 18',
  cloudOff:
    'M3 3l18 18M8.5 6.3A6 6 0 0 1 17 8.5a4.5 4.5 0 0 1 3.2 7.7M17 18H7a4 4 0 0 1-1.6-7.7',
  repeat:
    'M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3',
  arrowRight: 'M5 12h14m0 0l-5-5m5 5l-5 5',
  arrowDown: 'M12 5v14m0 0l-5-5m5 5l5-5',
  settings:
    'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 13.5l1.6 1.2-2 3.4-1.9-.7a7.6 7.6 0 0 1-2.1 1.2L14.6 21h-4l-.4-2.4a7.6 7.6 0 0 1-2-1.2l-2 .8-2-3.5 1.7-1.2a7.7 7.7 0 0 1 0-2.4L4.2 9.9l2-3.4 1.9.7a7.6 7.6 0 0 1 2.1-1.2L10.6 3h4l.4 2.4a7.6 7.6 0 0 1 2 1.2l2-.8 2 3.5-1.7 1.2a7.7 7.7 0 0 1 .1 2.4z',
  mail: 'M3 5h18v14H3V5zM4 7l8 6 8-6',
} as const

export type IconName = keyof typeof PATHS

type IconProps = {
  name: IconName
  className?: string
}

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
