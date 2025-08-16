import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Award, Sparkles, Crown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden">
      
      {/* Premium Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        {/* Multi-layer Gradients for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/30 via-transparent to-amber-900/20" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-yellow-800/10 to-amber-700/20" />
      </div>

      {/* Enhanced Animated Elements */}
      <div className="absolute inset-0">
        {/* Premium Golden Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-400/20 via-amber-500/15 to-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-300/25 via-yellow-400/15 to-amber-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
        {/* Luxury Sparkles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Sparkles className="w-3 h-3 text-yellow-400/60" />
          </div>
        ))}
        
        {/* Floating Diamonds */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`diamond-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-br from-yellow-300 to-amber-500 rotate-45 animate-bounce opacity-70"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Geometric Luxury Elements */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 border-2 border-yellow-400/40 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-3/4 right-1/4 w-8 h-8 border-2 border-amber-400/50 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-1/6 w-4 h-4 bg-gradient-to-r from-yellow-400/60 to-amber-500/60 rotate-45 animate-pulse" />
        
        {/* Moving Light Beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-yellow-300/30 via-yellow-400/20 to-transparent transform -skew-x-12 animate-pulse" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-amber-300/25 via-amber-400/15 to-transparent transform skew-x-12 animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Radial Shine Effect */}
        <div 
          className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 opacity-20"
          style={{
            background: `radial-gradient(circle at center, rgba(255, 193, 7, 0.3) 0%, rgba(255, 193, 7, 0.1) 30%, transparent 60%)`,
            animation: 'shine 6s ease-in-out infinite'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Premium Badge with Crown */}
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/90 to-amber-600/90 backdrop-blur-lg border border-yellow-300/50 px-6 py-3 rounded-full shadow-2xl">
                <Crown className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-sm tracking-wider">UAE'S PREMIER LUXURY RESTORATION</span>
              </div>

              {/* Main Headline with Enhanced Typography */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-8xl font-black leading-tight tracking-tight">
                  <span className="block text-white drop-shadow-lg">Where</span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
                    Luxury
                  </span>
                  <span className="block text-white drop-shadow-lg">is Reborn</span>
                </h1>

                {/* Enhanced Rating */}
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                    ))}
                  </div>
                  <span className="text-white font-bold text-lg drop-shadow">5.0</span>
                  <span className="text-yellow-300">•</span>
                  <span className="text-gray-200 font-semibold">10,000+ clients</span>
                </div>
              </div>

              {/* Enhanced Subheadline */}
              <h2 className="text-xl lg:text-3xl font-bold text-gray-100 leading-relaxed max-w-xl drop-shadow-lg">
                Premium Repair & Restoration for Your Most Loved Fashion Pieces
              </h2>

              {/* Description with Better Contrast */}
              <p className="text-gray-200 text-lg leading-relaxed max-w-xl drop-shadow">
                Welcome to Faded Elegance, where timeless luxury meets expert craftsmanship. We specialize in restoring, repairing, and customizing high-end shoes, bags, and leather goods for men, women, and kids.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-3 shadow-2xl hover:shadow-yellow-500/25 hover:-translate-y-1 transition-all duration-300 border-2 border-yellow-400">
                  <span>Start Your Restoration</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="border-2 border-yellow-400 bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black hover:-translate-y-1 transition-all duration-300">
                  View Gallery
                </button>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="flex items-center space-x-10 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">50K+</div>
                  <div className="text-gray-300 text-sm font-semibold">Items Restored</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">15+</div>
                  <div className="text-gray-300 text-sm font-semibold">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">99%</div>
                  <div className="text-gray-300 text-sm font-semibold">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Enhanced Right Visual */}
            <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Luxury Product Display */}
              <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-yellow-300/30">
                
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-500/10 to-yellow-600/20 rounded-3xl blur-xl -z-10"></div>
                
                {/* Center Focus Item with Enhanced Design */}
                <div className="flex justify-center mb-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-700 to-yellow-800 rounded-lg flex items-center justify-center shadow-inner relative z-10">
                      <span className="text-3xl">👜</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Product Grid */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: '👠', bg: 'from-pink-400 to-rose-500' },
                    { icon: '⌚', bg: 'from-blue-400 to-indigo-500' },
                    { icon: '🧥', bg: 'from-green-400 to-emerald-500' },
                    { icon: '👔', bg: 'from-purple-400 to-violet-500' }
                  ].map((item, index) => (
                    <div key={index} className={`w-16 h-16 bg-gradient-to-br ${item.bg} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer`}>
                      <span className="text-xl filter drop-shadow-sm">{item.icon}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Service Categories */}
                <div className="space-y-3">
                  {[
                    { name: 'Handbags & Purses', level: 'Premium', color: 'text-yellow-600' },
                    { name: 'Luxury Footwear', level: 'Master Craft', color: 'text-amber-600' },
                    { name: 'Leather Goods', level: 'Expert Care', color: 'text-yellow-700' }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center justify-between py-2 px-3 bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-sm">
                      <span className="text-gray-700 font-semibold">{service.name}</span>
                      <span className={`${service.color} font-bold text-sm px-3 py-1 bg-yellow-100 rounded-full`}>
                        {service.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Quality Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full p-4 shadow-2xl border-4 border-white animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-white text-2xl">🏆</span>
              </div>

              {/* Premium Certification Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full p-3 shadow-xl border-4 border-white">
                <Award className="w-6 h-6 text-white" />
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute top-12 left-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
              <div className="absolute bottom-24 right-12 w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -left-6 w-2 h-2 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
              
              {/* Luxury Sparkle Effects */}
              <Sparkles className="absolute top-8 right-16 w-4 h-4 text-yellow-400 animate-pulse" />
              <Sparkles className="absolute bottom-16 left-12 w-3 h-3 text-amber-500 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { 
            transform: translateX(0%) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateX(5%) rotate(1deg);
            opacity: 0.4;
          }
          50% { 
            transform: translateX(-5%) rotate(-1deg);
            opacity: 0.2;
          }
          75% {
            transform: translateX(3%) rotate(0.5deg);
            opacity: 0.35;
          }
        }
        
        @keyframes shine {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;