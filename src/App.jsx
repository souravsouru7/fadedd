import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Navigation */}
      <header className="flex items-center justify-between p-6 lg:p-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-sm flex items-center justify-center shadow-lg">
            <div className="text-white font-bold text-lg">f</div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-12">
          <a href="#" className="luxury-nav text-gray-800 hover:text-yellow-600 transition-colors duration-300 border-b-2 border-gray-800 pb-1">
            ABOUT
          </a>
          <span className="text-gray-400 text-xl">|</span>
          <a href="#" className="luxury-nav text-gray-800 hover:text-yellow-600 transition-colors duration-300">
            SERVICES
          </a>
          <span className="text-gray-400 text-xl">|</span>
          <a href="#" className="luxury-nav text-gray-800 hover:text-yellow-600 transition-colors duration-300">
            GALLERY
          </a>
          <span className="text-gray-400 text-xl">|</span>
          <a href="#" className="luxury-nav text-gray-800 hover:text-yellow-600 transition-colors duration-300">
            CONTACT US
          </a>
        </nav>

        {/* Quick Call Button */}
        <button className="luxury-button gold-gradient text-white px-6 py-3 rounded-full shadow-lg">
          📞 Quick Call
        </button>
      </header>

      {/* Main Content */}
      <main className="flex items-center min-h-[80vh] px-6 lg:px-16">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl fade-in-up">
          {/* Main Title */}
          <h1 className="luxury-title text-6xl lg:text-8xl mb-8 leading-tight">
            FADED
            <br />
            ELEGANCE
          </h1>

          {/* Subtitle */}
          <p className="luxury-subtitle text-xl lg:text-2xl mb-12">
            WHERE LUXURY IS REBORN
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="luxury-button gold-gradient text-white px-10 py-4 rounded-full shadow-lg">
              WHO WE ARE
            </button>
            <button className="luxury-button border-2 border-yellow-600 text-yellow-700 px-10 py-4 rounded-full hover:bg-yellow-600 hover:text-white transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">ENQUIRE NOW</span>
              <div className="absolute inset-0 gold-gradient w-0 h-full transition-all duration-300 group-hover:w-full rounded-full"></div>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 hidden lg:block">
          <div className="relative fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl marble-texture">
              {/* Luxury items arrangement */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center space-y-6">
                  {/* Main luxury item - like a vase or decorative piece */}
                  <div className="w-40 h-40 mx-auto relative">
                    <div className="w-full h-full bg-gradient-to-br from-yellow-600/30 to-yellow-800/20 rounded-full shadow-xl border-4 border-white/50"></div>
                    <div className="absolute inset-4 bg-gradient-to-tl from-gray-700/20 to-gray-400/30 rounded-full"></div>
                  </div>
                  
                  {/* Secondary items */}
                  <div className="flex justify-center space-x-6">
                    <div className="w-24 h-32 bg-gradient-to-b from-gray-600/20 to-gray-800/30 rounded-lg shadow-lg border-2 border-white/30"></div>
                    <div className="w-32 h-24 bg-gradient-to-r from-yellow-600/20 to-yellow-700/30 rounded-full shadow-lg border-2 border-white/30"></div>
                  </div>
                  
                  {/* Base/surface elements */}
                  <div className="w-56 h-8 bg-gradient-to-r from-gray-300/40 via-white/60 to-gray-300/40 rounded-full mx-auto shadow-inner"></div>
                </div>
              </div>
              
              {/* Enhanced marble veining */}
              <div className="absolute inset-0 opacity-40">
                <svg className="w-full h-full" viewBox="0 0 400 600" fill="none">
                  <path d="M50 100C150 80 250 120 350 100" stroke="white" strokeWidth="3" opacity="0.7"/>
                  <path d="M30 200C130 180 230 220 330 200" stroke="white" strokeWidth="2" opacity="0.5"/>
                  <path d="M70 300C170 280 270 320 370 300" stroke="white" strokeWidth="2.5" opacity="0.6"/>
                  <path d="M40 400C140 380 240 420 340 400" stroke="white" strokeWidth="1.5" opacity="0.4"/>
                  <path d="M60 500C160 480 260 520 360 500" stroke="white" strokeWidth="2" opacity="0.5"/>
                  <path d="M80 150C180 130 280 170 380 150" stroke="rgba(217, 119, 6, 0.3)" strokeWidth="1" opacity="0.6"/>
                  <path d="M20 350C120 330 220 370 320 350" stroke="rgba(217, 119, 6, 0.2)" strokeWidth="1.5" opacity="0.4"/>
                </svg>
              </div>
              
              {/* Subtle gold accents */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-yellow-400/30 to-yellow-600/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-12 left-12 w-24 h-24 bg-gradient-to-tl from-yellow-500/20 to-yellow-700/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
