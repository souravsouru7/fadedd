import React, { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Loading from './components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Show loading for 3 seconds, then start transition
    const timer = setTimeout(() => {
      setIsTransitioning(true)
      // After transition animation completes, hide loading completely
      setTimeout(() => {
        setIsLoading(false)
      }, 500) // 500ms for fade out animation
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      {/* Loading Component with Fade Out */}
      {isLoading && (
        <div 
          className={`absolute inset-0 z-50 transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Loading />
        </div>
      )}
      
      {/* Main Content with Fade In */}
      <div 
        className={`transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Hero />
      </div>
    </div>
  )
}

export default App
