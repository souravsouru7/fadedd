import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowRight, Sparkles, Crown, Star, Diamond, Zap, Award, Shield } from 'lucide-react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const MagneticButton = ({ children, className, primary = false }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;
      setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    return (
      <button
        ref={buttonRef}
        className={`group relative overflow-hidden transition-all duration-500 ${className}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {primary && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
          </>
        )}
        <div className="relative z-10 flex items-center justify-center space-x-2">
          {children}
        </div>
        <div className="absolute inset-0 scale-0 group-hover:scale-100 bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-12 transition-transform duration-700" />
      </button>
    );
  };

  const FloatingLuxuryElement = ({ delay, icon: Icon, color }) => (
    <div 
      className={`absolute opacity-80 animate-float`}
      style={{
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${6 + Math.random() * 4}s`
      }}
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500`}>
        <Icon className="w-6 h-6 text-white/90" />
      </div>
    </div>
  );

  const PremiumProductDisplay = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const products = [
      { name: 'Luxury Handbag', icon: '👜', color: 'from-amber-600 to-yellow-700' },
      { name: 'Designer Shoes', icon: '👠', color: 'from-yellow-500 to-amber-600' },
      { name: 'Premium Watch', icon: '⌚', color: 'from-amber-500 to-yellow-600' },
      { name: 'Leather Jacket', icon: '🧥', color: 'from-yellow-600 to-amber-700' },
      { name: 'Luxury Belt', icon: '👔', color: 'from-amber-600 to-yellow-600' }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % products.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative w-[500px] h-[500px] mx-auto">
        {/* Central Orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600 rounded-full shadow-2xl flex items-center justify-center animate-pulse">
          <Crown className="w-16 h-16 text-white drop-shadow-lg" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-spin" style={{ animationDuration: '3s' }} />
        </div>

        {/* Rotating Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-80 h-80 border-2 border-yellow-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute top-6 left-6 w-72 h-72 border border-amber-300/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        </div>

        {/* Product Orbits */}
        {products.map((product, index) => {
          const angle = (index * 72) + (Date.now() / 50) % 360;
          const radius = 180;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                isActive ? 'scale-125 z-20' : 'scale-100 z-10'
              }`}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
            >
              <div className={`w-24 h-24 bg-gradient-to-br ${product.color} rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer hover:scale-110 transition-transform duration-300`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <span className="text-3xl relative z-10 group-hover:scale-110 transition-transform duration-300">{product.icon}</span>
                {isActive && (
                  <div className="absolute -inset-2 border-2 border-yellow-400 rounded-3xl animate-pulse" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          );
        })}

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black"
      style={{
        background: `
          radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 215, 0, 0.15), transparent 50%),
          linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2013 50%, #1a1a1a 75%, #0a0a0a 100%)
        `
      }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 215, 0, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 215, 0, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)`
          }}
        />

        {/* Floating Luxury Elements */}
        <FloatingLuxuryElement delay={0} size={16} icon={Diamond} color="from-yellow-400 to-amber-500" />
        <FloatingLuxuryElement delay={1} size={20} icon={Crown} color="from-amber-400 to-yellow-600" />
        <FloatingLuxuryElement delay={2} size={14} icon={Star} color="from-yellow-500 to-amber-400" />
        <FloatingLuxuryElement delay={3} size={18} icon={Sparkles} color="from-amber-500 to-yellow-500" />
        <FloatingLuxuryElement delay={4} size={16} icon={Award} color="from-yellow-600 to-amber-600" />

        {/* Premium Light Beams */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-yellow-400/50 via-transparent to-transparent transform -skew-x-12 animate-pulse" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-amber-400/40 via-transparent to-transparent transform skew-x-12 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className={`space-y-12 transition-all duration-1500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0'}`}>
              
              {/* Premium Badge */}
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600/20 to-amber-600/20 backdrop-blur-xl border border-yellow-400/30 px-6 py-3 rounded-full">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-yellow-300 font-bold tracking-wider">DUBAI'S #1 LUXURY RESTORATION</span>
                <Shield className="w-5 h-5 text-yellow-400" />
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-7xl lg:text-9xl font-black leading-none tracking-tight">
                  <div className="overflow-hidden">
                    <span className={`block bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent transition-transform duration-1000 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                      WHERE
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <span 
                      className={`block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent transition-transform duration-1000 delay-200 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}
                      style={{ 
                        backgroundSize: '200% 200%',
                        animation: 'gradientShift 4s ease-in-out infinite'
                      }}
                    >
                      LUXURY
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <span className={`block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent transition-transform duration-1000 delay-400 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
                      IS REBORN
                    </span>
                  </div>
                </h1>

                {/* Premium Rating */}
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <div className="text-yellow-300 font-bold text-xl">5.0</div>
                  <div className="text-gray-400">|</div>
                  <div className="text-gray-300 font-medium">25,000+ Restored Items</div>
                </div>
              </div>

              {/* Subheadline */}
              <h2 className={`text-3xl lg:text-4xl font-bold text-gray-200 max-w-2xl transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Premium Repair & Restoration for Your Most Treasured Fashion Pieces
              </h2>

              {/* Description */}
              <p className={`text-xl text-gray-400 leading-relaxed max-w-2xl transition-all duration-1000 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Experience unparalleled craftsmanship where every stitch tells a story of luxury renewed. From Hermès to Louboutin, we restore your treasures with museum-quality precision.
              </p>

              {/* Luxury Features */}
              <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {[
                  { icon: Crown, text: "Royal Treatment", desc: "White-glove service" },
                  { icon: Zap, text: "Express Luxury", desc: "48hr premium service" },
                  { icon: Diamond, text: "Master Crafted", desc: "20+ years expertise" },
                  { icon: Shield, text: "Lifetime Guarantee", desc: "100% satisfaction" }
                ].map((feature, index) => (
                  <div key={index} className="group bg-gradient-to-br from-yellow-900/20 to-amber-900/10 backdrop-blur-xl border border-yellow-400/20 p-6 rounded-2xl hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
                    <feature.icon className="w-8 h-8 text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-bold text-lg mb-1">{feature.text}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <MagneticButton 
                  primary 
                  className="px-12 py-6 rounded-full font-black text-xl text-white shadow-2xl hover:shadow-yellow-400/50"
                >
                  <Play className="w-6 h-6 mr-2" />
                  <span>EXPERIENCE LUXURY</span>
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </MagneticButton>
                
                <MagneticButton className="px-12 py-6 rounded-full font-bold text-xl text-yellow-400 border-2 border-yellow-400/50 backdrop-blur-xl hover:bg-yellow-400/10">
                  <span>VIEW MASTERPIECES</span>
                  <Sparkles className="w-6 h-6 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </MagneticButton>
              </div>

              {/* Trust Metrics */}
              <div className={`flex items-center justify-between max-w-md transition-all duration-1000 delay-1400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400 mb-1">25K+</div>
                  <div className="text-gray-400 text-sm font-medium">RESTORED</div>
                </div>
                <div className="w-px h-16 bg-yellow-400/30" />
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400 mb-1">20+</div>
                  <div className="text-gray-400 text-sm font-medium">YEARS</div>
                </div>
                <div className="w-px h-16 bg-yellow-400/30" />
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400 mb-1">100%</div>
                  <div className="text-gray-400 text-sm font-medium">PREMIUM</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className={`relative transition-all duration-1500 delay-300 ${isLoaded ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-32 opacity-0 scale-90'}`}>
              <PremiumProductDisplay />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
      `}</style>
    </div>
  );
};

export default Hero;