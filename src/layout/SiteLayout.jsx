import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

function SiteLayout() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      return undefined
    }

    const frameId = window.requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [hash, pathname])

  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="APNY Freelance home">
          <span className="brand-mark">AP</span>
          <span>APNY Freelance</span>
        </NavLink>
        <nav className="site-nav" aria-label="Main navigation">
          <Link to={{ pathname: '/', hash: '#about' }}>About</Link>
          <NavLink to="/demo">Demos</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <Link to={{ pathname: '/', hash: '#contact' }}>Contact</Link>
        </nav>
      </header>

      <Outlet />
    </div>
  )
}

export default SiteLayout
