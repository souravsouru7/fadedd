import React from 'react'

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center' }}
      >
        <source src="/load.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen">
        {/* Header Navigation */}
        <header className="flex items-center justify-between p-6 lg:p-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/fenav.png" 
              alt="Faded Elegance Logo" 
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-12">
            <a href="#" className="luxury-nav text-[#D89F30] hover:text-white transition-colors duration-300 border-b-2 border-[#D89F30] pb-1 font-semibold text-lg tracking-wide">
              ABOUT
            </a>
            <span className="text-[#D89F30] text-2xl font-bold">|</span>
            <a href="#" className="luxury-nav text-[#D89F30] hover:text-white transition-colors duration-300 font-semibold text-lg tracking-wide">
              SERVICES
            </a>
            <span className="text-[#D89F30] text-2xl font-bold">|</span>
            <a href="#" className="luxury-nav text-[#D89F30] hover:text-white transition-colors duration-300 font-semibold text-lg tracking-wide">
              GALLERY
            </a>
            <span className="text-[#D89F30] text-2xl font-bold">|</span>
            <a href="#" className="luxury-nav text-[#D89F30] hover:text-white transition-colors duration-300 font-semibold text-lg tracking-wide">
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
            <div className="mb-8">
              <img 
                src="/fetext.png" 
                alt="Faded Elegance" 
                className="w-full max-w-2xl h-auto object-contain"
              />
            </div>

            {/* Subtitle */}
            <p className="luxury-subtitle text-xl lg:text-2xl mb-12 text-white">
              WHERE LUXURY IS REBORN
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-10 py-4 rounded-full shadow-lg text-lg font-semibold">
                WHO WE ARE
              </button>
              <button className="luxury-button border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-[#D89F30] transition-all duration-300 relative overflow-hidden group text-lg font-semibold">
                <span className="relative z-10">ENQUIRE NOW</span>
                <div className="absolute inset-0 bg-white w-0 h-full transition-all duration-300 group-hover:w-full rounded-full"></div>
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
              <div className="absolute top-8 right-8 bg-[#D89F30] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg luxury-nav">
                PREMIUM
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-[#D89F30]/30 to-[#734918]/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-12 right-12 w-24 h-24 bg-gradient-to-tl from-[#D89F30]/20 to-[#734918]/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}