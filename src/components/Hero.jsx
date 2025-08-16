import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Linkedin, Twitter, Star, Sparkles, Zap, Crown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const heroRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setMousePosition({
          x: ((e.clientX - rect.left - centerX) / centerX) * 100,
          y: ((e.clientY - rect.top - centerY) / centerY) * 100,
          rawX: e.clientX - rect.left,
          rawY: e.clientY - rect.top
        });
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Dynamic golden cursor glow effect
  useEffect(() => {
    if (glowRef.current && mousePosition.rawX !== undefined) {
      glowRef.current.style.background = `radial-gradient(800px circle at ${mousePosition.rawX}px ${mousePosition.rawY}px, rgba(218, 165, 32, 0.15), rgba(255, 215, 0, 0.08) 40%, transparent 70%)`;
    }
  }, [mousePosition]);

  return (
    <div ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-stone-100 overflow-hidden">
      
      {/* Luxury Golden Cursor Glow */}
      <div 
        ref={glowRef}
        className="fixed inset-0 pointer-events-none transition-opacity duration-500 opacity-80 z-10"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* Sophisticated 3D Parallax Background System */}
      <div className="absolute inset-0">
        {/* Layer 1 - Elegant Golden Orbs */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0) translateY(${scrollY * 0.05}px)`
          }}
        >
          <div className="absolute top-32 left-32 w-96 h-96 bg-gradient-to-br from-yellow-200/40 via-amber-200/30 to-orange-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-40 right-40 w-80 h-80 bg-gradient-to-tl from-yellow-100/50 via-amber-100/40 to-yellow-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-amber-100/30 to-yellow-100/25 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '10s' }} />
        </div>

        {/* Layer 2 - Floating Golden Particles */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translate3d(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px, 0) translateY(${scrollY * 0.1}px)`
          }}
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-luxuryFloat"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${12 + Math.random() * 8}s`,
              }}
            >
              <div 
                className="w-4 h-4 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 rounded-full opacity-70 shadow-lg"
                style={{
                  transform: `scale(${0.2 + Math.random() * 0.8}) rotate(${Math.random() * 360}deg)`,
                  boxShadow: '0 0 25px rgba(218, 165, 32, 0.6), 0 0 50px rgba(255, 215, 0, 0.3)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Layer 3 - Elegant Geometric Elements */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translate3d(${mousePosition.x * 0.06}px, ${mousePosition.y * 0.06}px, 0) translateY(${scrollY * 0.15}px)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <div 
            className="absolute top-1/4 left-1/5 w-48 h-48 border-2 border-yellow-300/60 rounded-full"
            style={{
              transform: `rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg) rotateZ(${scrollY * 0.05}deg)`,
              animation: 'elegantSpin 25s linear infinite',
              boxShadow: '0 0 60px rgba(218, 165, 32, 0.4), inset 0 0 40px rgba(255, 215, 0, 0.2)'
            }}
          />
          <div 
            className="absolute top-2/3 right-1/5 w-36 h-36 bg-gradient-to-br from-yellow-200/40 to-amber-300/30"
            style={{
              transform: `rotate3d(1, 1, 0, ${45 + mousePosition.x * 0.4}deg) translateZ(30px)`,
              animation: 'luxuryPulse 4s ease-in-out infinite',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              boxShadow: '0 25px 50px rgba(218, 165, 32, 0.3)'
            }}
          />
          <div 
            className="absolute top-1/2 left-1/3 w-24 h-24 border border-amber-400/80"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg)`,
              animation: 'elegantBounce 5s ease-in-out infinite',
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              boxShadow: '0 0 40px rgba(218, 165, 32, 0.5)'
            }}
          />
        </div>
      </div>

      {/* Luxury 3D Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          transform: `
            perspective(2500px) 
            rotateX(${65 + mousePosition.y * 0.08}deg) 
            rotateY(${mousePosition.x * 0.03}deg)
            translateZ(-300px) 
            translate3d(${mousePosition.x * 0.25}px, ${mousePosition.y * 0.25}px, 0)
            scale(${1 + scrollY * 0.0003})
          `,
          backgroundImage: `
            linear-gradient(rgba(218, 165, 32, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(218, 165, 32, 0.6) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.2) 0%, transparent 70%)
          `,
          backgroundSize: '80px 80px, 80px 80px, 300px 300px'
        }}
      />

      {/* Luxury Navigation Bar */}
      <nav className="relative z-30 flex items-center justify-between p-8 md:p-10 bg-white/85 backdrop-blur-2xl border-b border-yellow-200/60 shadow-2xl">
        <div className={`flex items-center space-x-4 transition-all duration-1500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-30 opacity-0'}`}>
          <div 
            className="w-14 h-14 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden group cursor-pointer"
            style={{
              transform: `rotateY(${mousePosition.x * 0.1}deg) rotateX(${mousePosition.y * 0.1}deg)`,
              boxShadow: '0 0 40px rgba(218, 165, 32, 0.6), 0 15px 35px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Crown className="text-white w-7 h-7 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent group-hover:from-white/50 transition-all duration-300"></div>
          </div>
          <div>
            <span className="text-gray-800 font-black text-2xl bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
              Faded Elegance
            </span>
            <div className="text-yellow-600/80 text-xs font-bold tracking-[0.3em] uppercase">Luxury Redefined</div>
          </div>
        </div>

        <div className={`hidden md:flex items-center space-x-12 transition-all duration-1500 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
          {['ABOUT', 'SERVICES', 'GALLERY', 'CONTACT'].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-gray-700 hover:text-yellow-600 transition-all duration-500 font-bold text-sm tracking-[0.2em] relative group cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-500 group-hover:w-full shadow-lg shadow-yellow-500/50"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-amber-200/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-400 -z-10"></span>
            </a>
          ))}
        </div>

        <button 
          className={`bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white px-12 py-4 rounded-2xl font-black hover:from-yellow-300 hover:to-amber-500 transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 shadow-2xl relative overflow-hidden group ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-30 opacity-0'}`}
          style={{ 
            transitionDelay: '600ms',
            boxShadow: '0 0 50px rgba(218, 165, 32, 0.6), 0 25px 50px rgba(0, 0, 0, 0.15)'
          }}
        >
          <span className="relative z-10 flex items-center space-x-3">
            <Phone className="w-5 h-5" />
            <span className="tracking-wider">QUICK CALL</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </button>
      </nav>

      {/* Main Hero Content */}
      <div className="relative z-20 flex items-center min-h-screen pt-24">
        <div className="container mx-auto px-8 md:px-12 grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Content - Luxury Typography */}
          <div className="space-y-16">
            <div className={`transition-all duration-1800 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'}`}>
              <div className="flex items-center space-x-4 mb-8">
                <Sparkles className="w-10 h-10 text-yellow-500 animate-pulse" />
                <span className="text-yellow-600 text-base font-black tracking-[0.3em] uppercase">Luxury Experience</span>
                <div className="h-px bg-gradient-to-r from-yellow-400 to-transparent flex-1"></div>
              </div>
              
              <h1 className="text-8xl md:text-9xl xl:text-[10rem] font-black leading-[0.85] relative">
                <span 
                  className="block bg-gradient-to-r from-yellow-400 via-amber-500 via-yellow-600 to-amber-600 bg-clip-text text-transparent relative"
                  style={{
                    transform: `translate3d(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px, 0)`,
                    filter: 'drop-shadow(0 15px 30px rgba(218, 165, 32, 0.4))',
                    textShadow: '0 0 100px rgba(218, 165, 32, 0.8)'
                  }}
                >
                  FADED
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent animate-pulse opacity-60"></div>
                </span>
                <span 
                  className="block text-gray-800 mt-4 relative"
                  style={{
                    transform: `translate3d(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px, 0)`,
                    filter: 'drop-shadow(0 8px 20px rgba(0, 0, 0, 0.1))'
                  }}
                >
                  ELEGANCE
                  <div className="absolute inset-0 text-gray-600/30 animate-pulse"></div>
                </span>
              </h1>
            </div>

            <div className={`transition-all duration-1800 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'}`}>
              <p 
                className="text-4xl md:text-5xl bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent font-light tracking-[0.1em] leading-tight relative"
                style={{
                  transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`,
                  textShadow: '0 0 40px rgba(218, 165, 32, 0.3)'
                }}
              >
                WHERE LUXURY IS REBORN
                <span className="block text-xl text-gray-600 mt-4 font-normal tracking-wide">Experience the extraordinary craftsmanship</span>
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-8 transition-all duration-1800 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'}`}>
              <button 
                className="group relative bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white px-16 py-6 rounded-2xl font-black hover:from-yellow-300 hover:to-amber-500 transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 shadow-2xl overflow-hidden"
                style={{
                  boxShadow: '0 0 60px rgba(218, 165, 32, 0.6), 0 30px 60px rgba(0, 0, 0, 0.2)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center space-x-4 tracking-wider">
                  <Crown className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                  <span>DISCOVER US</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-4 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
              
              <button 
                className="group relative border-3 border-yellow-500 text-yellow-600 px-16 py-6 rounded-2xl font-black hover:text-white hover:border-yellow-400 transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 shadow-2xl overflow-hidden backdrop-blur-sm bg-yellow-50/50"
                style={{
                  boxShadow: '0 0 40px rgba(218, 165, 32, 0.4), inset 0 0 40px rgba(255, 215, 0, 0.1)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center space-x-4 tracking-wider">
                  <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                  <span>START PROJECT</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-4 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>

          {/* Right Content - Luxury 3D Showcase */}
          <div className={`relative transition-all duration-1800 delay-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'}`}>
            <div 
              className="relative group cursor-pointer"
              style={{
                transform: `
                  translate3d(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px, 0) 
                  rotateY(${mousePosition.x * 0.2}deg) 
                  rotateX(${mousePosition.y * -0.1}deg)
                `,
                transformStyle: 'preserve-3d',
                filter: 'drop-shadow(0 60px 120px rgba(218, 165, 32, 0.4))'
              }}
            >
              {/* Luxury 3D Shadow System */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-yellow-300/50 to-amber-400/40 rounded-3xl blur-3xl"
                style={{ 
                  transform: 'translateZ(-200px) rotate(10deg) scale(1.3)',
                  animation: 'luxuryPulse 6s ease-in-out infinite'
                }} 
              />
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-amber-300/40 to-yellow-400/30 rounded-3xl blur-2xl"
                style={{ 
                  transform: 'translateZ(-150px) rotate(-6deg) scale(1.2)',
                  animation: 'luxuryPulse 4s ease-in-out infinite reverse'
                }} 
              />
              <div 
                className="absolute inset-0 bg-gradient-to-bl from-yellow-400/30 to-amber-500/25 rounded-3xl blur-xl"
                style={{ 
                  transform: 'translateZ(-100px) rotate(4deg) scale(1.15)',
                  animation: 'luxuryPulse 8s ease-in-out infinite'
                }} 
              />
              
              {/* Main Luxury Container */}
              <div 
                className="relative bg-gradient-to-br from-white via-gray-50 to-yellow-50/30 rounded-3xl p-12 shadow-2xl border-2 border-yellow-200/60 transform transition-all duration-700 hover:scale-105 group-hover:shadow-3xl overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: `
                    0 0 120px rgba(218, 165, 32, 0.6), 
                    0 60px 120px rgba(0, 0, 0, 0.1),
                    inset 0 0 60px rgba(255, 215, 0, 0.15)
                  `
                }}
              >
                {/* Luxury Golden Border Animation */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 p-[2px] animate-luxuryRotate">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-white via-gray-50 to-yellow-50/30"></div>
                </div>

                <div className="aspect-square bg-gradient-to-br from-gray-50 via-white to-yellow-50/50 rounded-3xl overflow-hidden relative border-2 border-yellow-100/80 shadow-inner">
                  {/* Premium Image Display Area */}
                  <div 
                    className="w-full h-full bg-gradient-to-br from-yellow-50 via-white to-amber-50 rounded-3xl relative overflow-hidden group-hover:scale-105 transition-transform duration-700"
                    style={{
                      transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px, 0)`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 via-transparent to-amber-100/40"></div>
                    <div className="absolute inset-8 bg-white rounded-2xl shadow-2xl overflow-hidden border border-yellow-100">
                      <img 
                        src="/pexels-cottonbro-8441480.png" 
                        alt="Luxury Restoration Service" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-amber-100/20"></div>
                      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-yellow-200/50">
                        <div className="font-black text-lg text-yellow-600">Luxury Restoration</div>
                        <div className="text-sm text-amber-600 font-semibold">Premium Excellence</div>
                      </div>
                    </div>
                  </div>
                   
                  {/* Luxury Overlay Effects */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 via-transparent to-amber-200/30 rounded-3xl"
                    style={{
                      transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 10px)`,
                      mixBlendMode: 'multiply'
                    }}
                  />

                  {/* Premium Info Card */}
                  <div 
                    className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-2xl rounded-2xl p-8 border-2 border-yellow-200/60 shadow-2xl transform transition-all duration-500 hover:scale-105"
                    style={{
                      transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px, 30px)`,
                      boxShadow: '0 0 50px rgba(218, 165, 32, 0.5), 0 25px 50px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className="text-gray-800 font-black text-2xl mb-2">Luxury Restoration</div>
                    <div className="text-yellow-600 font-bold text-xl mb-2">Premium Excellence</div>
                    <div className="text-amber-600/90 text-base font-medium">Where craftsmanship meets perfection</div>
                  </div>
                </div>

                {/* Luxury Floating Elements */}
                <div 
                  className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-2xl opacity-90 group-hover:scale-125 transition-transform duration-500"
                  style={{ 
                    transform: `translate3d(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px, 50px)`,
                    boxShadow: '0 0 60px rgba(218, 165, 32, 0.8)',
                    animation: 'luxuryBounce 4s ease-in-out infinite'
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded-full flex items-center justify-center">
                    <Star className="w-10 h-10 text-white animate-spin" style={{ animationDuration: '4s' }} />
                  </div>
                </div>
                
                <div 
                  className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl rotate-45 shadow-2xl opacity-85 group-hover:rotate-90 transition-transform duration-700"
                  style={{ 
                    transform: `translate3d(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px, 40px) rotate(${45 + mousePosition.x * 0.3}deg)`,
                    boxShadow: '0 0 50px rgba(218, 165, 32, 0.7)',
                    animation: 'luxuryPulse 5s ease-in-out infinite'
                  }} 
                />
                
                <div 
                  className="absolute top-1/4 -right-8 w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full opacity-80"
                  style={{ 
                    transform: `translate3d(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px, 35px)`,
                    boxShadow: '0 0 40px rgba(218, 165, 32, 0.8)',
                    animation: 'luxuryPing 3s ease-in-out infinite'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Contact Information Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-2xl border-t-2 border-yellow-200/60 shadow-2xl">
        <div className="container mx-auto px-8 md:px-12 py-12">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {[
              { icon: Mail, label: 'EMAIL', value: 'sales@fadedelegance.ae', delay: 1400 },
              { icon: Phone, label: 'PHONE', value: '+971 54 577 0967', delay: 1600 },
              { icon: MapPin, label: 'LOCATION', value: 'Dubai, UAE', delay: 1800 }
            ].map(({ icon: Icon, label, value, delay }, index) => (
              <div 
                key={label}
                className={`flex items-center justify-center md:justify-start space-x-8 text-gray-800 transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-30 opacity-0'}`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div 
                  className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-115 hover:rotate-6"
                  style={{
                    boxShadow: '0 0 50px rgba(218, 165, 32, 0.6), 0 15px 30px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <Icon className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent group-hover:from-white/50 transition-all duration-300"></div>
                  <div className="absolute inset-0 animate-pulse bg-yellow-300/20 rounded-3xl"></div>
                </div>
                <div>
                  <div className="text-sm text-yellow-600 font-black tracking-[0.2em] mb-1">{label}</div>
                  <div className="font-black text-gray-800 text-xl mb-1">{value}</div>
                  <div className="text-amber-600/80 text-base">Always available</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Luxury Social Media Sidebar */}
      <div className="fixed left-12 top-1/2 transform -translate-y-1/2 z-30 hidden xl:block">
        <div className={`flex flex-col space-y-8 transition-all duration-1800 delay-2000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-30 opacity-0'}`}>
          {[
            { icon: Instagram, color: 'from-pink-500 to-purple-600', delay: 0 },
            { icon: Facebook, color: 'from-blue-500 to-blue-700', delay: 200 },
            { icon: Linkedin, color: 'from-blue-600 to-blue-800', delay: 400 },
            { icon: Twitter, color: 'from-blue-400 to-blue-600', delay: 600 }
          ].map(({ icon: Icon, color, delay }, index) => (
            <a 
              key={index}
              href="#" 
              className="group w-18 h-18 bg-white/90 backdrop-blur-2xl rounded-2xl flex items-center justify-center text-gray-600 hover:text-white border-2 border-yellow-200/60 hover:border-yellow-400/80 transition-all duration-500 transform hover:scale-125 hover:-translate-y-3 relative overflow-hidden shadow-xl"
              style={{
                transitionDelay: `${delay}ms`,
                boxShadow: '0 0 40px rgba(218, 165, 32, 0.3), 0 15px 30px rgba(0, 0, 0, 0.1)',
                transform: `translate3d(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px, 0)`
              }}
            >
              <Icon className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>

      {/* Luxury Floating Action Button */}
      <div className="fixed bottom-12 right-12 z-30">
        <button 
          className="group w-20 h-20 bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-125 transition-all duration-500 relative overflow-hidden"
          style={{
            animationDuration: '4s',
            boxShadow: '0 0 60px rgba(218, 165, 32, 0.8), 0 25px 50px rgba(0, 0, 0, 0.2)',
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`,
            animation: 'luxuryBounce 4s ease-in-out infinite'
          }}
        >
          <Phone className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent group-hover:from-white/50 transition-all duration-300"></div>
          <div className="absolute inset-0 animate-ping bg-yellow-400 rounded-full opacity-20"></div>
          <div className="absolute inset-0 animate-pulse bg-amber-400 rounded-full opacity-30"></div>
        </button>
      </div>

      {/* Luxury Scroll Indicator */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-20">
        <div 
          className={`flex flex-col items-center space-y-6 transition-all duration-1800 delay-2200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          style={{
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`
          }}
        >
          <div className="text-gray-600 text-sm font-black tracking-[0.3em] uppercase">Scroll</div>
          <div className="w-px h-20 bg-gradient-to-b from-yellow-400 via-amber-500 to-transparent animate-pulse"></div>
          <div className="w-8 h-12 border-2 border-yellow-400/80 rounded-full relative overflow-hidden shadow-lg">
            <div className="w-2 h-4 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full mx-auto mt-3 animate-bounce shadow-inner"></div>
          </div>
        </div>
      </div>

      {/* Luxury Background Ornaments */}
      <div className="absolute top-32 right-32 z-10">
        <div 
          className="w-32 h-32 border border-yellow-300/40 rounded-full animate-spin opacity-60"
          style={{ 
            animationDuration: '30s',
            transform: `translate3d(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px, 0)`
          }}
        >
          <div className="w-16 h-16 border border-amber-400/60 rounded-full m-auto mt-8 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full m-auto mt-4 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-64 left-32 z-10">
        <div 
          className="w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-amber-300/20 rounded-2xl rotate-45 animate-pulse opacity-70"
          style={{ 
            animationDuration: '6s',
            transform: `translate3d(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px, 0) rotate(45deg)`
          }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400/40 to-yellow-500/30 rounded-lg m-auto mt-6 rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
        </div>
      </div>

      {/* Advanced Luxury CSS Animations */}
      <style jsx>{`
        @keyframes luxuryFloat {
          0%, 100% { 
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translate3d(40px, -40px, 20px) rotate(90deg) scale(1.1); 
          }
          50% { 
            transform: translate3d(0, -80px, 40px) rotate(180deg) scale(0.9); 
          }
          75% { 
            transform: translate3d(-40px, -40px, 20px) rotate(270deg) scale(1.1); 
          }
        }

        @keyframes elegantSpin {
          from { 
            transform: rotateZ(0deg) rotateY(0deg); 
          }
          to { 
            transform: rotateZ(360deg) rotateY(360deg); 
          }
        }

        @keyframes luxuryPulse {
          0%, 100% { 
            opacity: 0.7; 
            transform: scale(1) rotate(0deg);
            filter: blur(0px);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.08) rotate(180deg);
            filter: blur(1px);
          }
        }

        @keyframes elegantBounce {
          0%, 100% { 
            transform: translateY(0) rotateX(0deg) rotateZ(0deg);
          }
          25% { 
            transform: translateY(-25px) rotateX(90deg) rotateZ(90deg);
          }
          50% { 
            transform: translateY(-40px) rotateX(180deg) rotateZ(180deg);
          }
          75% { 
            transform: translateY(-25px) rotateX(270deg) rotateZ(270deg);
          }
        }

        @keyframes luxuryBounce {
          0%, 100% { 
            transform: translateY(0) scale(1) rotate(0deg);
          }
          50% { 
            transform: translateY(-30px) scale(1.1) rotate(180deg);
          }
        }

        @keyframes luxuryPing {
          0% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.5);
            opacity: 0.5;
          }
          100% { 
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes luxuryRotate {
          0% { 
            transform: rotate(0deg);
          }
          100% { 
            transform: rotate(360deg);
          }
        }

        @keyframes luxuryGlow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(218, 165, 32, 0.5), 0 0 60px rgba(255, 215, 0, 0.3);
          }
          50% { 
            box-shadow: 0 0 60px rgba(218, 165, 32, 0.8), 0 0 120px rgba(255, 215, 0, 0.6);
          }
        }

        .animate-luxuryFloat {
          animation: luxuryFloat 15s ease-in-out infinite;
        }

        .animate-luxuryRotate {
          animation: luxuryRotate 20s linear infinite;
        }

        .animate-luxuryGlow {
          animation: luxuryGlow 3s ease-in-out infinite;
        }

        /* Premium Scroll Behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced Backdrop Effects */
        @supports (backdrop-filter: blur(40px)) {
          .backdrop-blur-2xl {
            backdrop-filter: blur(40px) saturate(180%);
          }
        }

        /* Luxury Text Effects */
        .bg-clip-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        /* Premium Focus States */
        button:focus, a:focus {
          outline: 3px solid rgba(218, 165, 32, 0.6);
          outline-offset: 3px;
          border-radius: 8px;
        }

        /* Enhanced Mobile Responsiveness */
        @media (max-width: 768px) {
          .text-8xl { font-size: 4.5rem; }
          .text-9xl { font-size: 5.5rem; }
          .text-4xl { font-size: 2rem; }
          .text-5xl { font-size: 2.5rem; }
          
          .space-y-16 > * + * { margin-top: 3rem; }
          .space-y-12 > * + * { margin-top: 2rem; }
          
          .px-16 { padding-left: 2rem; padding-right: 2rem; }
          .py-6 { padding-top: 1rem; padding-bottom: 1rem; }
        }

        @media (max-width: 640px) {
          .text-8xl { font-size: 3.5rem; }
          .text-9xl { font-size: 4rem; }
          
          .gap-24 { gap: 3rem; }
          .gap-8 { gap: 1.5rem; }
          
          .px-12 { padding-left: 1.5rem; padding-right: 1.5rem; }
          .py-4 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        }

        /* Performance Optimizations */
        * {
          will-change: transform;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        /* Luxury Border Gradients */
        .border-3 {
          border-width: 3px;
        }

        /* Premium Shadow Effects */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 80px rgba(218, 165, 32, 0.3);
        }

        /* Advanced Gradient Animations */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }

        /* Luxury Hover Effects */
        .hover\:scale-115:hover {
          transform: scale(1.15);
        }

        .hover\:scale-125:hover {
          transform: scale(1.25);
        }

        /* Enhanced Typography */
        .tracking-\[0\.1em\] {
          letter-spacing: 0.1em;
        }

        .tracking-\[0\.2em\] {
          letter-spacing: 0.2em;
        }

        .tracking-\[0\.3em\] {
          letter-spacing: 0.3em;
        }

        /* Premium Glass Effect */
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Luxury Loading Animation */
        @keyframes luxuryLoad {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-luxury-load {
          animation: luxuryLoad 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;