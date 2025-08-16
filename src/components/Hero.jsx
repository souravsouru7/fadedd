import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Award, Star } from 'lucide-react';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const luxuryImages = [
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=600&fit=crop&crop=center"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % luxuryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* Flowing Gradient Lines */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-amber-500/20 animate-pulse"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-yellow-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-30"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               animation: 'gridMove 20s linear infinite'
             }}>
        </div>
        
        {/* Leather Texture Pattern */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: `
                 radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.3) 2px, transparent 2px),
                 radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.2) 1px, transparent 1px)
               `,
               backgroundSize: '30px 30px, 20px 20px'
             }}>
        </div>
        
        {/* Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ filter: 'blur(1px)' }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(245, 158, 11, 0.4)" />
              <stop offset="50%" stopColor="rgba(245, 158, 11, 0.1)" />
              <stop offset="100%" stopColor="rgba(245, 158, 11, 0.4)" />
            </linearGradient>
          </defs>
          <path d="M0,300 Q400,100 800,200 T1600,150" stroke="url(#lineGradient)" strokeWidth="2" fill="none">
            <animate attributeName="d" 
                     values="M0,300 Q400,100 800,200 T1600,150;M0,200 Q400,300 800,100 T1600,250;M0,300 Q400,100 800,200 T1600,150" 
                     dur="15s" 
                     repeatCount="indefinite"/>
          </path>
          <path d="M0,500 Q600,200 1200,400 T2400,300" stroke="url(#lineGradient)" strokeWidth="1" fill="none" opacity="0.6">
            <animate attributeName="d" 
                     values="M0,500 Q600,200 1200,400 T2400,300;M0,400 Q600,500 1200,200 T2400,450;M0,500 Q600,200 1200,400 T2400,300" 
                     dur="20s" 
                     repeatCount="indefinite"/>
          </path>
        </svg>
        
        {/* Sparkling Particles */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-4/5 w-1.5 h-1.5 bg-amber-300 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/6 right-1/4 w-1 h-1 bg-amber-500 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-1500"></div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(50px) translateY(50px); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 lg:px-12 py-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-black" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              Faded Elegance
            </h1>
            <p className="text-xs text-gray-400 tracking-widest">LUXURY RESTORATION</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-gray-300">
          <a href="#" className="hover:text-amber-400 transition-colors">Services</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Gallery</a>
          <a href="#" className="hover:text-amber-400 transition-colors">About</a>
          <button className="bg-amber-500 text-black px-6 py-2 rounded-full font-medium hover:bg-amber-400 transition-colors">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="relative z-30 flex items-center justify-between px-6 lg:px-12 py-12 lg:py-20">
        {/* Left Content */}
        <div className={`flex-1 max-w-3xl transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-8">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">Premium Craftsmanship Since 2020</span>
          </div>

          {/* Main Headlines */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Where Luxury
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              is Reborn
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Premium Repair & Restoration for Your Most Loved Fashion Pieces
          </p>

          <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl">
            Welcome to Faded Elegance, where timeless luxury meets expert craftsmanship. We specialize in restoring, repairing, and customizing high-end shoes, bags, and leather goods for men, women, and kids. From color revival to customized artwork, every piece we touch regains its beauty, elegance, and charm.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-amber-400 hover:to-amber-500 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Start Your Restoration
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-500 hover:text-black transition-all duration-300">
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 text-center sm:text-left">
            <div>
              <div className="text-3xl font-bold text-amber-400">500+</div>
              <div className="text-gray-400">Pieces Restored</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="flex items-center">
              <div className="flex text-amber-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="text-gray-400">Premium Rating</div>
            </div>
          </div>
        </div>

        {/* Right Visual Section */}
        <div className={`hidden lg:block flex-1 max-w-lg transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative w-full h-96 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              {luxuryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Luxury restoration work"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-amber-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-amber-400 font-bold">Before & After</div>
                      <div className="text-white text-sm">Expert Restoration</div>
                    </div>
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
            {/* Image Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {luxuryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? 'bg-amber-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}