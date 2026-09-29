import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <div className="page container notfound">
      <Seo
        title="Page not found — Spandan"
        description="The page you were looking for could not be found."
      />
      <header className="page__header page__header--center">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p className="page__intro">
          The page you were looking for doesn’t exist or may have moved.
        </p>
      </header>
      <div className="notfound__actions">
        <Link to="/" className="btn btn--primary">
          Back to home
        </Link>
      </div>
    </div>
  )
}
