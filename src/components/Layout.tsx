// src/components/Layout.tsx
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="appShell">
      <div className="topbar">
        <a
          className="brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className="brandMark" aria-hidden />
          <span className="brandText">Justin Paige</span>
        </a>

        <nav className="nav">
          <a href="#about">about</a>
          <a href="#experience">experience</a>
          <a className="cta" href="#contact">
            contact
          </a>
        </nav>
      </div>

      <main id="top">
        <Outlet />
      </main>
    </div>
  )
}