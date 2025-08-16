import React from 'react';
import { ChevronLeft, ChevronRight, Menu, Search, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Split Background with Enhanced Gradients */}
      <div className="absolute inset-0 flex">
        {/* Left side - Vibrant Pink/Red */}
        <div className="w-1/2 bg-gradient-to-br from-[#F74966] via-[#F74966] to-[#e03a5a] relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 right-16 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-8 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
        {/* Right side - Deep Dark Red */}
        <div className="w-1/2 bg-gradient-to-br from-[#6D0F23] via-[#6D0F23] to-[#5a0a1d] relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-16 right-20 w-28 h-28 bg-white rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-20 left-12 w-20 h-20 bg-white rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/3 right-8 w-12 h-12 bg-white rounded-full animate-pulse delay-1200"></div>
          </div>
        </div>
      </div>

      {/* Enhanced center divider with glow effect */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-40 transform -translate-x-0.5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg animate-ping"></div>
      </div>

      {/* Premium Header with Enhanced Styling */}
      <header className="relative z-20 flex items-center justify-between px-12 py-8">
        <div className="flex items-center space-x-8">
          <div className="group cursor-pointer">
            <Menu className="w-6 h-6 text-white group-hover:text-pink-200 transition-all duration-300 transform group-hover:scale-110" />
          </div>
          <h1 className="text-2xl font-light tracking-[0.3em] text-white group cursor-pointer transition-all duration-500 hover:tracking-[0.4em]" 
              style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">FADED</span>
            <span className="block text-pink-200 group-hover:text-white transition-colors duration-300">ELEGANCE</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-4 text-white group cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F74966] to-[#e03a5a] flex items-center justify-center text-white text-sm font-medium shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium tracking-wider group-hover:text-pink-200 transition-colors duration-300" 
                  style={{ fontFamily: 'Inter, sans-serif' }}>Services</span>
          </div>
          <div className="group cursor-pointer">
            <Search className="w-6 h-6 text-white group-hover:text-pink-200 transition-all duration-300 transform group-hover:scale-110" />
          </div>
        </div>
      </header>

      {/* Enhanced Main Content with Premium Icons */}
      <div className="absolute inset-0 flex">
        
        {/* Left Section - Premium Service Visual */}
        <div className="w-1/2 relative flex items-center justify-center">
          <div className="text-center space-y-8 animate-fade-in-left">
            {/* Enhanced luxury icon container */}
            <div className="group cursor-pointer">
              <div className="w-40 h-40 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-500">👜</div>
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <div className="text-white text-lg tracking-[0.2em] font-medium mt-6 group-hover:text-pink-200 transition-colors duration-300" 
                   style={{ fontFamily: 'Playfair Display, serif' }}>
                PREMIUM BAGS
              </div>
              <div className="text-pink-200 text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0" 
                   style={{ fontFamily: 'Inter, sans-serif' }}>
                Expert Restoration
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Premium Service Visual */}
        <div className="w-1/2 relative flex items-center justify-center">
          <div className="text-center space-y-8 animate-fade-in-right">
            <div className="group cursor-pointer">
              <div className="w-40 h-40 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-500">👠</div>
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <div className="text-white text-lg tracking-[0.2em] font-medium mt-6 group-hover:text-pink-200 transition-colors duration-300" 
                   style={{ fontFamily: 'Playfair Display, serif' }}>
                LUXURY SHOES
              </div>
              <div className="text-pink-200 text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0" 
                   style={{ fontFamily: 'Inter, sans-serif' }}>
                Master Craftsmanship
              </div>
            </div>
          </div>
          
          {/* Enhanced floating quote overlay */}
          <div className="absolute top-32 left-12 text-sm text-white leading-tight max-w-36 text-left drop-shadow-2xl z-30 group cursor-pointer" 
               style={{ fontFamily: 'Playfair Display, serif' }}>
            <div className="transform hover:scale-105 transition-transform duration-300">"EXPERT</div>
            <div className="transform hover:scale-105 transition-transform duration-300 delay-100">CRAFTSMANSHIP</div>
            <div className="transform hover:scale-105 transition-transform duration-300 delay-200">FOR YOUR</div>
            <div className="transform hover:scale-105 transition-transform duration-300 delay-300 text-pink-200">TREASURES"</div>
          </div>
        </div>
      </div>

      {/* Enhanced Center Content with Premium Typography */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center max-w-5xl px-8 transform translate-y-8">
          {/* Enhanced main headline with staggered animation */}
          <div className="overflow-hidden">
            <h1 className="text-8xl md:text-9xl font-bold text-white tracking-[0.02em] leading-none mb-6 drop-shadow-2xl transform translate-y-full animate-slide-up" 
                style={{ fontFamily: 'Playfair Display, serif' }}>
              WHERE LUXURY
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-8xl md:text-9xl font-bold text-white tracking-[0.02em] leading-none mb-8 drop-shadow-2xl transform translate-y-full animate-slide-up-delayed" 
                style={{ fontFamily: 'Playfair Display, serif' }}>
              IS REBORN
            </h1>
          </div>
          
          {/* Enhanced subheadline */}
          <div className="text-white text-xl md:text-2xl tracking-[0.15em] font-light mb-12 drop-shadow-lg max-w-3xl mx-auto opacity-0 animate-fade-in-delayed" 
               style={{ fontFamily: 'Inter, sans-serif' }}>
            Premium Repair & Restoration for Your Most Loved Fashion Pieces
          </div>

          {/* Enhanced description with typewriter effect */}
          <div className="text-white/90 text-lg leading-relaxed mb-12 max-w-4xl mx-auto drop-shadow-md opacity-0 animate-fade-in-more-delayed" 
               style={{ fontFamily: 'Inter, sans-serif' }}>
            Welcome to <span className="text-pink-200 font-medium">Faded Elegance</span>, where timeless luxury meets expert craftsmanship. We specialize in restoring, repairing, and customizing high-end shoes, bags, and leather goods for men, women, and kids. From color revival to customized artwork, every piece we touch regains its beauty, elegance, and charm.
          </div>

          {/* Enhanced service categories with hover effects */}
          <div className="flex justify-center space-x-12 mb-12 text-white/80">
            <div className="text-center group cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-[#F74966] mx-auto mb-3 group-hover:scale-125 transition-transform duration-300 shadow-lg group-hover:shadow-xl"></div>
              <span className="text-sm tracking-wider font-medium group-hover:text-[#F74966] transition-colors duration-300" 
                    style={{ fontFamily: 'Inter, sans-serif' }}>RESTORE</span>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-white mx-auto mb-3 group-hover:scale-125 transition-transform duration-300 shadow-lg group-hover:shadow-xl"></div>
              <span className="text-sm tracking-wider font-medium group-hover:text-white transition-colors duration-300" 
                    style={{ fontFamily: 'Inter, sans-serif' }}>REPAIR</span>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-[#6D0F23] mx-auto mb-3 group-hover:scale-125 transition-transform duration-300 shadow-lg group-hover:shadow-xl"></div>
              <span className="text-sm tracking-wider font-medium group-hover:text-[#6D0F23] transition-colors duration-300" 
                    style={{ fontFamily: 'Inter, sans-serif' }}>CUSTOMIZE</span>
            </div>
          </div>

          {/* Enhanced call to action button */}
          <button className="group bg-gradient-to-r from-[#F74966] to-[#6D0F23] hover:from-[#e03a5a] hover:to-[#5a0a1d] text-white px-12 py-4 rounded-full text-lg tracking-widest font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:-translate-y-1 border border-white/20 backdrop-blur-sm" 
                  style={{ fontFamily: 'Inter, sans-serif' }}>
            <span className="flex items-center space-x-3">
              <span>DISCOVER SERVICES</span>
              <Star className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            </span>
          </button>
        </div>
      </div>

      {/* Enhanced Navigation arrows */}
      <button className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 group">
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
          <ChevronLeft className="w-8 h-8 text-white group-hover:text-pink-200 drop-shadow-lg group-hover:scale-110 transition-all duration-300" />
        </div>
      </button>
      
      <button className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 group">
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
          <ChevronRight className="w-8 h-8 text-white group-hover:text-pink-200 drop-shadow-lg group-hover:scale-110 transition-all duration-300" />
        </div>
      </button>

      {/* Enhanced bottom navigation */}
      <div className="absolute bottom-10 right-10 flex space-x-8 text-white z-20">
        <button className="text-sm opacity-60 hover:opacity-100 transition-all duration-300 hover:text-pink-200 font-medium" 
                style={{ fontFamily: 'Inter, sans-serif' }}>SHOES</button>
        <button className="text-sm opacity-60 hover:opacity-100 transition-all duration-300 hover:text-pink-200 font-medium" 
                style={{ fontFamily: 'Inter, sans-serif' }}>BAGS</button>
        <button className="text-sm opacity-100 font-bold text-pink-200 transition-all duration-300" 
                style={{ fontFamily: 'Inter, sans-serif' }}>LEATHER</button>
      </div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-80px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(80px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes slide-up-delayed {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-more-delayed {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-slide-up {
          animation: slide-up 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-slide-up-delayed {
          animation: slide-up 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s forwards;
        }

        .animate-fade-in-more-delayed {
          animation: fade-in-more-delayed 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.8s forwards;
        }
      `}</style>
    </div>
  );
}