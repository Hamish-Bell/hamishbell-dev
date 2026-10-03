import { useState, useCallback } from 'react'
import Loader from './components/loader/loader.jsx'
import Navbar from './components/navbar/navbar.jsx'

function App() {
  const [loading, setLoading] = useState(true)
  const handleDone = useCallback(() => setLoading(false), [])

  return (
    <>
      {loading && <Loader onDone={handleDone} />}
      <Navbar />
      {/* ...the rest of your app */}
    </>
  )
}

export default App