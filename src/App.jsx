import { useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// components
import Loader from './components/loader/loader.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Notfound from './components/notFound/notFound.jsx'

// pages
import Home from './pages/home/home.jsx'
import Awards from './pages/awards/awards.jsx'
import About from './pages/about/about.jsx'
import Socials from './pages/socials/socials.jsx'

function App() {
  const [loading, setLoading] = useState(true)
  const handleDone = useCallback(() => setLoading(false), [])

  return (
    <Router>
      <div className='app-layout'>
        <div className='app-body'>
          {loading && <Loader onDone={handleDone} />}
          <Navbar />

          <div className='screen-panel'>
              <Routes>

                {/* Main playlist links */}
                <Route path='/' element={<Home />} />
                <Route path='/awards' element={<Awards />} />
                <Route path='/about' element={<About/>} />

                {/* Extra Pages */}
                <Route path = '/socials' element={<Socials/>}/>
                
                {/* 404 page */}
                <Route path='*' element={<Notfound/>}/>
              </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App