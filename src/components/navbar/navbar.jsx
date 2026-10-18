import { useState, useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './navbar.css'
import { useTheme, palettes } from '../../ThemeContext.jsx'

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

  const [time, setTime] = useState(() => new Date())
  const [open, setOpen] = useState(false)   // mobile drawer open/closed
  const mapRef = useRef(null)

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
      scrollWheelZoom: false,   // so scrolling the navbar doesn't zoom the map
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

    // Custom marker, since Leaflet's default icon breaks under Vite
    L.marker(ADELAIDE, {
      icon: L.divIcon({
        className: 'map-pin',
        html: '<span></span>',
        iconSize: [16, 16],
      }),
    }).addTo(map)

    return () => map.remove()   // cleans up on unmount and in StrictMode
  }, [])

  const pickTheme = (t) => {
    setTheme(t)
    setAccent(palettes[t][2])   // default to the middle swatch
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
      {/* Hamburger button (only visible on small screens) */}
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

      {/* Dimmed backdrop, click to close */}
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
            <div className='create-button'>
              <h1 className='button-text'>+ Create</h1>
            </div>
          </div>

          <div className="line"></div>

          {/* Main Nav Item */}
          <div className='nav-items'>
            <div className='Projects'>
              <div className='text'>
                <h1 className='nav-card-title'>Projects</h1>
                <p className='nav-card-info'>Playlist - Hamish’s World</p>
              </div>
            </div>

            <div className='Awards'>
              <div className='text'>
                <h1 className='nav-card-title'>Awards</h1>
                <p className='nav-card-info'>Playlist - Hamish’s Journey</p>
              </div>
            </div>

            <div className='My-Goals'>
              <div className='text'>
                <h1 className='nav-card-title'>My Goals</h1>
                <p className='nav-card-info'>Playlist - Hamish’s Future</p>
              </div>
            </div>
          </div>

          {/* Lets change things up */}
          <div className='header'>
            <h1 className='title'>Lets change things up.</h1>
          </div>

          <div className="line"></div>

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

          {/* Location + click counter */}
          <div className='info-row'>
            <div className='info-card location-card'>
              <h2 className='info-title'>My Location</h2>
              <div className='map-box' ref={mapRef} />
              <div className='location-footer'>
                <span className='place'>Adelaide, AU</span>
                <span className='clock'>{adelaideTime}</span>
              </div>
            </div>

            <div className='info-card click-card'>
              <span key={count} className='click-number'>{count}</span>
              <button className='click-button' onClick={() => setCount(c => c + 1)}>
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