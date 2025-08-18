import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import RouteLoader from './components/RouteLoader.jsx'
import { AnimatePresence, motion as Motion } from 'framer-motion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RouteLoader>
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <Motion.div
                  key="home"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <App />
                </Motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <Motion.div
                  key="about"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <About />
                </Motion.div>
              }
            />
            <Route
              path="/services"
              element={
                <Motion.div
                  key="services"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Services />
                </Motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </RouteLoader>
    </BrowserRouter>
  </StrictMode>,
)
