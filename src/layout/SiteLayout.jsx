import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

function SiteLayout() {
  const { hash, pathname } = useLocation()
  const currentYear = new Date().getFullYear()

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

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-brand">
            <Link className="brand" to="/" aria-label="APNY Freelance home">
              <span className="brand-mark">AP</span>
              <span>APNY Freelance</span>
            </Link>
            <p>Websites for businesses ready to look sharper online.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <Link to={{ pathname: '/', hash: '#about' }}>About</Link>
            <Link to="/demo">Demos</Link>
            <Link to="/projects">Projects</Link>
            <Link to={{ pathname: '/', hash: '#contact' }}>Contact</Link>
          </nav>
          <div className="footer-meta">
            <Link className="profile-link" to={{ pathname: '/', hash: '#contact' }}>
              Start a project
            </Link>
            <p>&copy; {currentYear} APNY Freelance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
