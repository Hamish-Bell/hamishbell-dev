import { createContext, useContext, useState, useEffect } from 'react'

export const palettes = {
  Strawberry: ['#f4b6c8', '#f08fb0', '#e8638f', '#d63f73', '#b82a5c'],
  Blueberry: ['#a8c8ff', '#8fb4ff', '#7a9fff', '#6488ff', '#4d6fff'],
  Gooseberry: ['#c5f0a4', '#a8e57f', '#8bd65e', '#6cc24a', '#4fa83a'],
  Cranberry: ['#f4a6a6', '#ee7f7f', '#e25b5b', '#c93c3c', '#a82a2a'],
  Blackberry: ['#e3b4ff', '#c77aff', '#aa3fff', '#8c0aff', '#5e008c']
}

const STORAGE_KEY = 'navbar-theme'

const ThemeContext = createContext(null)

function loadSaved() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if (
      saved &&
      palettes[saved.theme] &&
      palettes[saved.theme].includes(saved.accent)
    ) {
      return saved
    }
  } catch (e) {
    // Use the default theme if saved data is invalid.
  }

  return {
    theme: 'Blueberry',
    accent: palettes.Blueberry[2],
  }
}

export function ThemeProvider({ children }) {
  const [saved] = useState(loadSaved)

  const [theme, setTheme] = useState(saved.theme)
  const [accent, setAccent] = useState(saved.accent)

  useEffect(() => {
    const colours = palettes[theme]

    colours.forEach((colour, index) => {
      document.documentElement.style.setProperty(
        `--palette-${index + 1}`,
        colour
      )
    })

    document.documentElement.style.setProperty('--accent', accent)

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ theme, accent })
      )
    } catch (e) {
      // The theme still works if localStorage is unavailable.
    }
  }, [theme, accent])

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, accent, setAccent, palettes }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }

  return context
}
