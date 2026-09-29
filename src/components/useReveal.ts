import { useEffect } from 'react'

/**
 * Fades `[data-reveal]` elements in as they scroll into view. Re-runs when
 * `key` changes (the route), so each page gets its own pass. Opts out
 * entirely for reduced-motion visitors or browsers without
 * IntersectionObserver — content is then simply shown in place.
 */
export default function useReveal(key: string) {
  useEffect(() => {
    const root = document.documentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      root.classList.remove('reveal-ready')
      return
    }

    root.classList.add('reveal-ready')
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    const observeAll = () =>
      document
        .querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)')
        .forEach((el) => io.observe(el))
    observeAll()

    // Pick up elements mounted after this pass (lazy content, hot reloads)
    // so nothing is ever left hidden.
    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [key])
}
