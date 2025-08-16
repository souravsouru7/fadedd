import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Phone, Sparkles, Award, Palette, User } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Add custom keyframes and mouse tracking
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px) rotateY(-15deg);
        }
        to {
          opacity: 1;
          transform: translateX(0) rotateY(0);
        }
      }
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px) rotateY(15deg);
        }
        to {
          opacity: 1;
          transform: translateX(0) rotateY(0);
        }
      }
      @keyframes morphBackground {
        0%, 100% { border-radius: 1rem; }
        50% { border-radius: 2rem; }
      }
      @keyframes floatSoft {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-8px) rotate(1deg); }
        66% { transform: translateY(-4px) rotate(-1deg); }
      }
      @keyframes textGlow {
        0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.1); }
        50% { text-shadow: 0 0 20px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.1); }
      }
      @keyframes iconPulse {
        0%, 100% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.1) rotate(5deg); }
      }
      .animate-slide-in-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }
      .animate-slide-in-right {
        animation: slideInRight 0.8s ease-out forwards;
      }
      .animate-float-soft {
        animation: floatSoft 4s ease-in-out infinite;
      }
      .animate-text-glow {
        animation: textGlow 3s ease-in-out infinite;
      }
      .animate-icon-pulse {
        animation: iconPulse 2s ease-in-out infinite;
      }
      .animate-morph {
        animation: morphBackground 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    // Mouse move tracking
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "LUXURY-LEVEL CRAFTSMANSHIP",
      description: "Meticulous attention to detail with artisan-quality finishing that exceeds industry standards",
      color: "from-amber-400/20 to-yellow-400/20"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "PREMIUM MATERIALS & TECHNIQUES", 
      description: "Only the finest materials sourced globally, combined with cutting-edge manufacturing processes",
      color: "from-purple-400/20 to-pink-400/20"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "PERSONALIZED SERVICE",
      description: "Dedicated consultation for each project, ensuring every detail reflects your unique vision",
      color: "from-blue-400/20 to-cyan-400/20"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "CREATIVE UNIQUENESS",
      description: "Bespoke designs that transform your items into extraordinary, one-of-a-kind masterpieces",
      color: "from-green-400/20 to-emerald-400/20"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-black relative overflow-hidden pb-20 px-6"
    >
      {/* Enhanced Split Background with subtle animation */}
      <div className="absolute inset-0 flex">
        {/* Left side - Gray with breathing effect */}
        <div className="w-1/2 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 opacity-90 transition-all duration-[3000ms] hover:opacity-95 hover:from-gray-500"></div>
        {/* Right side - Teal/Blue with breathing effect */}
        <div className="w-1/2 bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600 opacity-90 transition-all duration-[3000ms] hover:opacity-95 hover:from-teal-400"></div>
      </div>

      {/* Vertical center border/divider with pulse */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white opacity-20 transform -translate-x-0.5 animate-pulse"></div>

      {/* Enhanced Background Elements with floating animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse animate-float-soft" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse animate-float-soft" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional floating orbs */}
        <div className="absolute top-1/2 left-1/6 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/6 w-40 h-40 bg-white/15 rounded-full blur-2xl animate-float-soft" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Interactive cursor follower */}
      <div 
        className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm pointer-events-none transition-all duration-300 z-30"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          opacity: isVisible ? 0.6 : 0
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 pt-20">
          {/* Floating icon above title */}
          <div 
            className="inline-block mb-8 animate-float-soft"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.8)',
              transition: 'all 0.8s ease 0.1s'
            }}
          >
            <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-xl border border-white/30 hover:scale-110 hover:rotate-12 transition-all duration-700">
              <CheckCircle className="w-10 h-10 text-white animate-icon-pulse" />
            </div>
          </div>

          <div className="inline-block">
            <h2 
              className="text-5xl md:text-7xl font-normal text-white mb-6 tracking-[0.25em] uppercase hover:tracking-[0.3em] transition-all duration-700 animate-text-glow"
              style={{
                fontFamily: 'Playfair Display, serif',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(30px) rotateX(-10deg)',
                transition: 'all 0.8s ease 0.2s'
              }}
            >
              Why Choose
            </h2>
            <div 
              className="text-6xl md:text-8xl font-bold text-white uppercase tracking-[0.05em] drop-shadow-2xl hover:scale-105 transition-all duration-700"
              style={{
                fontFamily: 'Playfair Display, serif',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(30px) rotateX(10deg)',
                transition: 'all 0.8s ease 0.4s'
              }}
            >
              Us?
            </div>
          </div>
          
          {/* Enhanced Decorative Line */}
          <div 
            className="w-32 h-px bg-white opacity-20 mx-auto mt-8 mb-12 relative overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              scaleX: isVisible ? 1 : 0,
              transition: 'all 0.8s ease 0.6s'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
              style={{
                opacity: isVisible ? 1 : 0,
                animationDelay: `${0.8 + index * 0.2}s`,
                animationFillMode: 'both'
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={`relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl transition-all duration-700 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-white/10 border border-white/20 group-hover:border-white/40 group-hover:scale-[1.03] overflow-hidden ${activeCard === index ? 'animate-morph' : ''}`}>
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl`}></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 rounded-2xl"></div>

                {/* Icon with enhanced animation */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className={`p-4 rounded-xl transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 ${
                    activeCard === index 
                      ? 'bg-white/30 shadow-lg animate-icon-pulse' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}>
                    <div className="text-white transition-all duration-500 group-hover:scale-110">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Content with enhanced typography */}
                <h3 
                  className="text-xl md:text-2xl font-normal text-white mb-4 tracking-[0.15em] uppercase group-hover:text-white group-hover:tracking-[0.2em] transition-all duration-500 relative z-10"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-white/80 text-base md:text-lg leading-relaxed font-light group-hover:text-white/90 transition-all duration-500 relative z-10"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {feature.description}
                </p>

                {/* Enhanced hover overlay with ripple effect */}
                <div className={`absolute inset-0 bg-white/5 rounded-2xl transition-all duration-700 ${
                  activeCard === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                }`}></div>
                
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action Section */}
        <div 
          className="text-center group/cta"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
            transition: 'all 0.8s ease 1.6s'
          }}
        >
          <div className="py-12 transition-all duration-700 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover/cta:opacity-100 transition-all duration-1000 rounded-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
              <div className="text-center md:text-left">
                <h3 
                  className="text-3xl md:text-4xl font-normal text-white mb-3 uppercase tracking-[0.2em] group-hover/cta:tracking-[0.25em] group-hover/cta:scale-105 transition-all duration-700 animate-text-glow"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Ready to Begin?
                </h3>
                <p 
                  className="text-white/80 text-lg md:text-xl font-light group-hover/cta:text-white/90 transition-all duration-500"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Experience luxury craftsmanship today
                </p>
              </div>
              
              <div className="flex items-center gap-4 group/phone">
                <div className="relative">
                  <Phone className="w-8 h-8 text-white group-hover/phone:scale-125 group-hover/phone:rotate-12 transition-all duration-500 animate-float-soft" />
                  <div className="absolute -inset-2 bg-white/10 rounded-full opacity-0 group-hover/phone:opacity-100 group-hover/phone:scale-150 transition-all duration-500"></div>
                </div>
                <div className="text-center">
                  <p 
                    className="text-white/60 text-sm uppercase tracking-[0.2em] mb-1 group-hover/phone:tracking-[0.25em] transition-all duration-500"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Call Now
                  </p>
                  <a 
                    href="tel:+971545770967" 
                    className="text-2xl md:text-3xl font-light text-white hover:text-white/90 hover:scale-105 transition-all duration-500 tracking-wider drop-shadow-lg inline-block animate-text-glow"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    +971 54 5770967
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-20 bg-gradient-to-b from-white/30 to-transparent animate-pulse animate-float-soft" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-10 w-2 h-20 bg-gradient-to-t from-white/30 to-transparent animate-pulse animate-float-soft" style={{ animationDelay: '2s' }}></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/3 right-20 w-1 h-12 bg-white/20 animate-float-soft" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 left-20 w-1 h-16 bg-white/25 animate-float-soft" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Corner accents */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-white/10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-white/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default WhyChooseUs;