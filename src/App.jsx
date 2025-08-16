import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Navigation */}
      <header className="flex items-center justify-between p-6 lg:p-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-[#D89F30] to-[#734918] rounded-sm flex items-center justify-center shadow-lg">
            <div className="text-white font-bold text-lg">f</div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-12">
          <a href="#" className="luxury-nav text-gray-800 hover:text-[#D89F30] transition-colors duration-300 border-b-2 border-gray-800 pb-1">
            ABOUT
          </a>
          <span className="text-gray-400 text-xl">|</span>
          <a href="#" className="luxury-nav text-gray-800 hover:text-[#D89F30] transition-colors duration-300">
            SERVICES
          </a>
          <span className="text-gray-400 text-xl">|</span>
          <a href="#" className="luxury-nav text-gray-800 hover:text-[#D89F30] transition-colors duration-300">
            GALLERY
          </a>
          <span className="text-gray-400 text-xl">|</span>
          <a href="#" className="luxury-nav text-gray-800 hover:text-[#D89F30] transition-colors duration-300">
            CONTACT US
          </a>
        </nav>

        {/* Quick Call Button */}
        <button className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-6 py-3 rounded-full shadow-lg">
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
            <button className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-10 py-4 rounded-full shadow-lg">
              WHO WE ARE
            </button>
            <button className="luxury-button border-2 border-[#D89F30] text-[#D89F30] px-10 py-4 rounded-full hover:bg-[#D89F30] hover:text-white transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">ENQUIRE NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D89F30] to-[#734918] w-0 h-full transition-all duration-300 group-hover:w-full rounded-full"></div>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 hidden lg:block">
          <div className="relative fade-in-up flex justify-center items-center" style={{animationDelay: '0.3s'}}>
            {/* Main image from online - medium size */}
            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&h=525&fit=crop&crop=center"
              alt="Luxury leather craftsmanship showcase"
              className="w-[600px] h-[425px] object-cover rounded-2xl shadow-2xl"
            />
            
            {/* Premium badge overlay */}
            <div className="absolute top-8 right-8 bg-[#D89F30] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              PREMIUM
            </div>
            
            {/* Subtle decorative elements */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-[#D89F30]/30 to-[#734918]/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-12 right-12 w-24 h-24 bg-gradient-to-tl from-[#D89F30]/20 to-[#734918]/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
