import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
}

/**
 * Lightweight document-head manager. Sets the page <title> and meta
 * description on mount / when the route changes. Keeps dependencies minimal
 * (no react-helmet) since the site is small and static.
 */
export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
  }, [title, description])

  return null
}
