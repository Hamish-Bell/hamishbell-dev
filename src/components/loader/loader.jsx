import { useState, useEffect } from 'react'
import './loader.css'

const messages = [
  'Booting up Hamish’s World...',
  'Loading projects...',
  'Polishing awards...',
  'Setting goals...',
  'Almost there...',
]

// Reuse the accent colour saved by the navbar so the loader matches
function savedAccent() {
  try {
    return JSON.parse(localStorage.getItem('navbar-theme'))?.accent || '#77daff'
  } catch (e) {
    return '#77daff'
  }
}

function Loader({ onDone }) {
    const [progress, setProgress] = useState(0)
const [leaving, setLeaving] = useState(false)

  useEffect(() => {
  let current = 0
  let timer

  const STEP_MIN = 4
  const STEP_RANGE = 10
  const DELAY_MIN = 100
  const DELAY_RANGE = 100
  const HOLD_AT_100 = 300
  const FADE_MS = 500

  const tick = () => {
    current = Math.min(100, current + Math.random() * STEP_RANGE + STEP_MIN)
    setProgress(current)

    if (current >= 100) {
      setTimeout(() => setLeaving(true), HOLD_AT_100)
      setTimeout(onDone, HOLD_AT_100 + FADE_MS)
    } else {
      timer = setTimeout(tick, DELAY_MIN + Math.random() * DELAY_RANGE)
    }
  }

  timer = setTimeout(tick, 100)
  return () => clearTimeout(timer)
}, [onDone])

  const message = messages[Math.min(messages.length - 1, Math.floor((progress / 100) * messages.length))]

  return (
    <div className={`loader ${leaving ? 'leaving' : ''}`} style={{ '--accent': savedAccent() }}>
      <div className='loader-inner'>
        <h1 className='loader-title'>HamishBell.Dev </h1>
        <div className='loader-bar'>
          <div className='loader-fill' style={{ width: `${progress}%` }} />
        </div>
        <div className='loader-info'>
          <span>{message}</span>
          <span className='loader-percent'>{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  )
}

export default Loader