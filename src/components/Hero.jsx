import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleVideo = () => {
    if (showVideo) {
      setShowVideo(false);
      setIsVideoPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    } else {
      setShowVideo(true);
      setIsVideoPlaying(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900 opacity-90"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Video Background */}
      {showVideo && (
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-black bg-opacity-30 z-20" />
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          >
            <source src="/6649895-uhd_4096_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video Controls Overlay */}
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <div className="text-center animate-scale-in">
              <div className="w-32 h-32 bg-black bg-opacity-50 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-gold border-opacity-30 animate-glow-pulse">
                {isVideoPlaying ? (
                  <Pause className="w-12 h-12 text-gold" />
                ) : (
                  <Play className="w-12 h-12 text-gold ml-1" />
                )}
              </div>
              <p className="text-lg font-light text-white font-inter">
                {isVideoPlaying ? 'Video is playing' : 'Video is paused'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="relative z-40 flex justify-between items-center px-8 py-6 animate-slide-in-top">
        <div className="text-2xl font-bold text-gold tracking-wider font-playfair animate-scale-in">
          FADED ELEGANCE
        </div>
        <div className="hidden md:flex space-x-8 text-white font-inter">
          <a href="#services" className="hover:text-gold transition-colors duration-300 animate-fade-in-right animate-delay-200">Services</a>
          <a href="#portfolio" className="hover:text-gold transition-all duration-300 animate-fade-in-right animate-delay-300">Portfolio</a>
          <a href="#about" className="hover:text-gold transition-all duration-300 animate-fade-in-right animate-delay-400">About</a>
          <a href="#contact" className="hover:text-gold transition-all duration-300 animate-fade-in-right animate-delay-500">Contact</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <div 
          className="max-w-6xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        >
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight font-playfair animate-fade-in-up animate-delay-300">
            <span className="block animate-fade-in-up animate-delay-400">Where Luxury is</span>
            <span className="block text-gradient-luxury animate-fade-in-up animate-delay-500 animate-text-shimmer">
              Reborn
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed max-w-4xl mx-auto font-inter animate-fade-in-up animate-delay-600">
            Premium Repair & Restoration for Your Most Loved Fashion Pieces
          </p>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up animate-delay-700">
            <p className="text-lg text-gray-400 leading-relaxed mb-6 font-inter">
              Welcome to Faded Elegance, where timeless luxury meets expert craftsmanship. 
              We specialize in restoring, repairing, and customizing high-end shoes, bags, 
              and leather goods for men, women, and kids.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed font-inter">
              From color revival to customized artwork, every piece we touch regains its 
              beauty, elegance, and charm.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animate-delay-800">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-gold to-yellow-300 text-black font-semibold rounded-none hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-glow-pulse font-inter">
              <span className="relative z-10">Start Your Restoration</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={toggleVideo}
              className="group flex items-center space-x-3 px-8 py-4 border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 font-inter"
            >
              {showVideo ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span>{showVideo ? 'Hide Video' : 'Watch Our Story'}</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center animate-scale-in animate-delay-600">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2 font-playfair">10,000+</div>
              <div className="text-gray-400 font-inter">Pieces Restored</div>
            </div>
            <div className="text-center animate-scale-in animate-delay-700">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2 font-playfair">15+</div>
              <div className="text-gray-400 font-inter">Years Experience</div>
            </div>
            <div className="text-center animate-scale-in animate-delay-800">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2 font-playfair">99%</div>
              <div className="text-gray-400 font-inter">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold animate-bounce animate-float-enhanced">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-20 bg-gradient-to-b from-gold to-transparent opacity-30 animate-float-enhanced" />
      <div className="absolute bottom-1/4 right-10 w-2 h-20 bg-gradient-to-t from-gold to-transparent opacity-30 animate-float-enhanced" />

      {/* Enhanced Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full opacity-30 animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .bg-gold { background-color: #D4AF37; }
        .text-gold { color: #D4AF37; }
        .border-gold { border-color: #D4AF37; }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default Hero;