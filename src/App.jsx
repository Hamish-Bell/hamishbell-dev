import { useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// components
import Loader from './components/loader/loader.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'

// pages
import Home from './pages/home/home.jsx'

function App() {
  const [loading, setLoading] = useState(true)
  const handleDone = useCallback(() => setLoading(false), [])

  return (
    <div className='app-layout'>
      <div className='app-body'>
        {loading && <Loader onDone={handleDone} />}
        <Navbar />
        <div className='screen-panel'>
          <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App