import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import useReveal from './useReveal'

export default function Layout() {
  const { pathname } = useLocation()

  // Reset scroll position on navigation between pages.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useReveal(pathname)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
