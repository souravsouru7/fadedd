import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Award, Star, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Show image for 4 seconds, then switch to video
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image (shown first for 4 seconds) */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
        <img
          src="/still-life-say-no-fast-fashion.jpg"
          alt="Luxury leather craftsmanship background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 50px,
                rgba(255,255,255,0.1) 50px,
                rgba(255,255,255,0.1) 52px
              )
            `
          }}
        />
      </div>

      {/* Video Background (shown after 4 seconds) */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${showVideo ? 'opacity-100' : 'opacity-0'}`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/6649895-uhd_4096_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 50px,
                rgba(255,255,255,0.1) 50px,
                rgba(255,255,255,0.1) 52px
              )
            `
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-8 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 tracking-wide">FADED ELEGANCE</h1>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-full px-8 py-3 border border-white/10">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-white hover:text-amber-400 transition-colors font-medium">HOME</a>
              <a href="#" className="text-white hover:text-amber-400 transition-colors font-medium">ABOUT US</a>
              <a href="#" className="text-white hover:text-amber-400 transition-colors font-medium">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-30 px-8 lg:px-16 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
            
            {/* Left Content */}
            <div className={`lg:col-span-6 space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                  One-Stop Solution
                  <br />
                  <span className="text-white">for</span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text">
                    Luxury Leather
                    <br />
                    Care
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-xl text-white/90 font-light leading-relaxed max-w-lg">
                With Convenient Pickup & Delivery Across the UAE
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="group bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-3 hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <span>FREE CONSULTATION</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Content - Testimonial & Product */}
            <div className={`lg:col-span-6 space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              
              {/* Testimonial Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 ml-auto max-w-md">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-white text-lg font-medium mb-4 leading-relaxed">
                  "If you have an old bag that you don't love anymore, send it to Faded Elegance and they will handle it"
                </blockquote>
                
                {/* Attribution */}
                <p className="text-white/70 text-sm">
                  As Sarah shared in her Google Review
                </p>
              </div>

              {/* Product Showcase */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 ml-auto max-w-sm border border-white/30">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop&crop=center"
                    alt="Luxury leather bag restoration"
                    className="w-full h-48 object-cover rounded-2xl mb-4"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    PREMIUM
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">Master Restoration</h3>
                  <p className="text-gray-600">Professional leather care & repair</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold text-amber-600">From AED 299</span>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Contact us</span>
          </div>
        </button>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-yellow-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-amber-300/50 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}