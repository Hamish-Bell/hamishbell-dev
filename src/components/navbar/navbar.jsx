import { useState, useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './navbar.css'
import { useTheme, palettes } from '../../ThemeContext.jsx'
import { Link, useLocation } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const themes = Object.keys(palettes)

const COUNT_KEY = 'navbar-click-count'
const ADELAIDE = [-34.9285, 138.6007]

function Navbar() {
  const { theme, setTheme, accent, setAccent } = useTheme()

  const [count, setCount] = useState(() => {
    try {
      return Number(localStorage.getItem(COUNT_KEY)) || 0
    } catch (e) {
      return 0
    }
  })

  const location = useLocation()
  const isHome = location.pathname === '/'

  const [time, setTime] = useState(() => new Date())
  const [open, setOpen] = useState(false)
  const mapRef = useRef(null)

  // Close navbar when the page changes
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Save the click count
  useEffect(() => {
    try {
      localStorage.setItem(COUNT_KEY, String(count))
    } catch (e) {}
  }, [count])

  // Live clock, ticks every second
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  // Escape closes the mobile drawer
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Stop the page behind the drawer from scrolling while it's open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Leaflet map, created once
  useEffect(() => {
    const map = L.map(mapRef.current, {
      center: ADELAIDE,
      zoom: 10,
      zoomControl: false,
      scrollWheelZoom: false,
    })

    map.attributionControl.setPrefix(false)

    L.tileLayer(
      `https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?key=${import.meta.env.VITE_CARTO_KEY}`,
      {
        attribution: '© OpenStreetMap, © CARTO',
        subdomains: 'abcd',
        maxZoom: 19,
      }
    ).addTo(map)

    return () => map.remove()
  }, [])

  const pickTheme = (t) => {
    setTheme(t)
    setAccent(palettes[t][2])
  }

  const adelaideTime = time.toLocaleTimeString('en-AU', {
    timeZone: 'Australia/Adelaide',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  return (
    <>
      {/* Hamburger button */}
      <button
        className={`hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        style={{ '--accent': accent }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Dimmed backdrop */}
      <div
        className={`backdrop ${open ? 'show' : ''}`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`navbar-container ${open ? 'open' : ''}`}
        style={{ '--accent': accent }}
      >
        <div className='library'>
          <div className='header'>
            <h1 className='title'>Your Library</h1>

            {/* Home button */}
            <Link
              to='/'
              className={`home-button ${isHome ? 'active' : ''}`}
              aria-label='Home'
              title='Home'
              onClick={() => setOpen(false)}
            >
              <FaHome className='home-icon' />
            </Link>
          </div>

          <div className='line'></div>

          {/* Main navigation items */}
          <div className='nav-items'>
            <div
              className='Projects'
              onClick={() => setOpen(false)}
            >
              <div className='text'>
                <h1 className='nav-card-title'>Projects</h1>
                <p className='nav-card-info'>
                  Playlist - Hamish’s Creations
                </p>
              </div>
            </div>

            <Link
              to='/awards'
              className='Awards'
              onClick={() => setOpen(false)}
            >
              <div className='text'>
                <h1 className='nav-card-title'>Awards</h1>
                <p className='nav-card-info'>
                  Playlist - Hamish’s Achievements
                </p>
              </div>
            </Link>

            <div
              className='About'
              onClick={() => setOpen(false)}
            >
              <div className='text'>
                <h1 className='nav-card-title'>About</h1>
                <p className='nav-card-info'>
                  Playlist - Hamish’s Story
                </p>
              </div>
            </div>
          </div>

          {/* Theme settings */}
          <div className='header'>
            <h1 className='title'>Lets change things up.</h1>
          </div>

          <div className='line'></div>

          <div className='nav-settings'>
            <div className='theme'>
              <h1 className='theme-title'>Theme</h1>

              <div className='options-bar-container'>
                <ul className='options-items'>
                  {themes.map(t => (
                    <li
                      key={t}
                      className={`item ${theme === t ? 'active' : ''}`}
                      onClick={() => pickTheme(t)}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='swatches'>
                {palettes[theme].map(c => (
                  <button
                    key={c}
                    className={`swatch ${accent === c ? 'active' : ''}`}
                    style={{ backgroundColor: c }}
                    onClick={() => setAccent(c)}
                    aria-label={`Use colour ${c}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Location and click counter */}
          <div className='info-row'>
            <div className='info-card location-card'>
              <h2 className='info-title'>My Location</h2>

              <div className='map-box' ref={mapRef}></div>

              <div className='location-footer'>
                <span className='place'>Adelaide, AU</span>
                <span className='clock'>{adelaideTime}</span>
              </div>
            </div>

            <div className='info-card click-card'>
              <span key={count} className='click-number'>
                {count}
              </span>

              <button
                className='click-button'
                onClick={() => setCount(c => c + 1)}
              >
                CLICK ME
              </button>

              <p className='click-text'>
                you’ve clicked {count} {count === 1 ? 'time' : 'times'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar