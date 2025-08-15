import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    const handleResize = () => {
      checkMobile();
    };

    // Trigger text animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Split text into individual characters for staggered animation
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        style={{
          display: 'inline-block',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: `all 0.6s ease ${index * 0.1}s`,
          color: 'inherit'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div 
      ref={heroRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: isMobile ? 'block' : 'flex'
      }}
    >
      {/* Left Side - Vibrant Orange */}
      <div style={{
        flex: isMobile ? 'none' : '1',
        background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: isMobile ? '20px' : '40px',
        height: isMobile ? '50vh' : 'auto',
        transition: 'all 0.4s ease'
      }}>
        
        {/* Top Left Branding */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          position: 'relative',
          zIndex: 10,
          justifyContent: isMobile ? 'center' : 'flex-start'
        }}>
          <div style={{
            width: isMobile ? '25px' : '30px',
            height: isMobile ? '25px' : '30px',
            background: '#000',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: isMobile ? '14px' : '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>F</div>
          <span style={{
            color: '#000',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}>fadedelegance.</span>
        </div>

        {/* Left Side Content */}
        <div style={{
          textAlign: 'center',
          color: '#000',
          position: 'relative',
          zIndex: 10,
          margin: isMobile ? '20px 0' : '0'
        }}>
          <h2 style={{
            fontSize: isMobile ? 'clamp(1.5rem, 8vw, 2.5rem)' : 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            margin: '0 0 20px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '0 0 20px rgba(0,0,0,0.1)',
            fontFamily: 'Cinzel, serif',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}>
            {splitText('Luxury')}
            {/* Underline effect */}
            <div style={{
              position: 'absolute',
              bottom: '-5px',
              left: '50%',
              width: isVisible ? '100%' : '0%',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #000, transparent)',
              transform: 'translateX(-50%)',
              transition: 'width 0.8s ease 0.5s',
              borderRadius: '2px'
            }}></div>
          </h2>
          <p style={{
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: '500',
            maxWidth: isMobile ? '280px' : '300px',
            margin: '0 auto',
            lineHeight: '1.5',
            fontFamily: 'Playfair Display, serif',
            transition: 'all 0.3s ease',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.8s'
          }}>
            Premium restoration services for your most cherished items
          </p>
        </div>

        {/* Bottom Left */}
        <div style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '10px' : '15px',
            marginBottom: '20px'
          }}>
            <div style={{
              width: '2px',
              height: isMobile ? '20px' : '30px',
              background: '#000'
            }}></div>
            <div style={{
              width: isMobile ? '40px' : '50px',
              height: isMobile ? '40px' : '50px',
              background: '#000',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: isMobile ? '16px' : '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>▶</div>
            <div style={{
              width: '2px',
              height: isMobile ? '20px' : '30px',
              background: '#000'
            }}></div>
          </div>
          <span style={{
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: '500',
            color: '#000',
            transition: 'all 0.3s ease'
          }}>start restoration</span>
        </div>
      </div>

      {/* Right Side - Dark Grey */}
      <div style={{
        flex: isMobile ? 'none' : '1',
        background: 'linear-gradient(135deg, #2c3e50, #34495e)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: isMobile ? '20px' : '40px',
        height: isMobile ? '50vh' : 'auto',
        transition: 'all 0.4s ease'
      }}>
        
        {/* Top Right Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '15px' : '30px',
          justifyContent: isMobile ? 'center' : 'flex-end',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{
            width: isMobile ? '20px' : '30px',
            height: '2px',
            background: '#fff'
          }}></div>
          <nav style={{
            display: 'flex',
            gap: isMobile ? '15px' : '25px'
          }}>
            {['discover', 'works', 'statements'].map((item) => (
              <a 
                key={item}
                href="#" 
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: isMobile ? '12px' : '14px',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ff6b35';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#fff';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {item}
              </a>
            ))}
          </nav>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3px',
            width: isMobile ? '16px' : '20px',
            height: isMobile ? '16px' : '20px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            {[...Array(9)].map((_, i) => (
              <div 
                key={i} 
                style={{
                  width: isMobile ? '3px' : '4px',
                  height: isMobile ? '3px' : '4px',
                  background: '#fff',
                  borderRadius: '1px',
                  transition: 'all 0.3s ease'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Side Content */}
        <div style={{
          textAlign: 'center',
          color: '#fff',
          position: 'relative',
          zIndex: 10,
          margin: isMobile ? '20px 0' : '0'
        }}>
          <h2 style={{
            fontSize: isMobile ? 'clamp(1.5rem, 8vw, 2.5rem)' : 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            margin: '0 0 20px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '0 0 20px rgba(255,255,255,0.1)',
            fontFamily: 'Cinzel, serif',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}>
            {splitText('Restoration')}
            {/* Gradient underline effect */}
            <div style={{
              position: 'absolute',
              bottom: '-5px',
              left: '50%',
              width: isVisible ? '100%' : '0%',
              height: '3px',
              background: 'linear-gradient(90deg, #ff6b35, #fff, #ff6b35)',
              transform: 'translateX(-50%)',
              transition: 'width 0.8s ease 0.7s',
              borderRadius: '2px'
            }}></div>
          </h2>
          <p style={{
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: '500',
            maxWidth: isMobile ? '280px' : '300px',
            margin: '0 auto',
            lineHeight: '1.5',
            fontFamily: 'Playfair Display, serif',
            transition: 'all 0.3s ease',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '1s'
          }}>
            Expert craftsmanship that brings new life to luxury pieces
          </p>
        </div>

        {/* Bottom Right */}
        <div style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          <span style={{
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: '500',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#ff6b35';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#fff';
            e.target.style.transform = 'scale(1)';
          }}
          >take survey</span>
        </div>
      </div>

      {/* Central Overlay Panel */}
      <div 
        style={{
          position: 'absolute',
          top: isMobile ? '25%' : '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMobile ? '90vw' : '500px',
          height: isMobile ? '300px' : '500px',
          zIndex: 20,
          transition: 'all 0.4s ease'
        }}
      >
        
        {/* Split Background Panel */}
        <div style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          borderRadius: isMobile ? '15px' : '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          transition: 'all 0.4s ease'
        }}>
          
          {/* Left Half - Orange */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '50%',
            height: '100%',
            background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
            transition: 'all 0.4s ease'
          }}></div>
          
          {/* Right Half - Dark Grey */}
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50%',
            height: '100%',
            background: 'linear-gradient(135deg, #2c3e50, #34495e)',
            transition: 'all 0.4s ease'
          }}></div>

          {/* Central Abstract Element - Black Ink/Smoke */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isMobile ? '200px' : '300px',
            height: isMobile ? '200px' : '300px',
            background: 'radial-gradient(ellipse at center, #000 0%, #1a1a1a 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(2px)',
            opacity: 0.9,
            transition: 'all 0.4s ease'
          }}></div>

          {/* Main Title Overlay */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 30
          }}>
            {/* Logo Image */}
            <div style={{
              marginBottom: '15px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 0.5s'
            }}>
              <img 
                src="/Faded Elegance Logo Final-10.png"
                alt="Faded Elegance Logo"
                style={{
                  width: isMobile ? '180px' : '280px',
                  height: 'auto',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
            
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#fff',
              margin: '0',
              fontWeight: '400',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: 'Cinzel, serif',
              transition: 'all 0.3s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '1.2s'
            }}>
              by luxury artisans
            </p>
          </div>

          {/* Interactive Elements at Bottom */}
          <div style={{
            position: 'absolute',
            bottom: isMobile ? '20px' : '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '15px' : '20px',
            zIndex: 30
          }}>
            
            {/* Left Line */}
            <div style={{
              width: isMobile ? '40px' : '60px',
              height: '2px',
              background: '#fff'
            }}></div>
            
            {/* Play Button */}
            <div style={{
              width: isMobile ? '50px' : '60px',
              height: isMobile ? '50px' : '60px',
              background: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
            }}
            >
              <div style={{
                width: 0,
                height: 0,
                borderLeft: isMobile ? '12px solid #000' : '15px solid #000',
                borderTop: isMobile ? '8px solid transparent' : '10px solid transparent',
                borderBottom: isMobile ? '8px solid transparent' : '10px solid transparent',
                marginLeft: '3px',
                transition: 'all 0.3s ease'
              }}></div>
            </div>
            
            {/* Right Line */}
            <div style={{
              width: isMobile ? '40px' : '60px',
              height: '2px',
              background: '#fff'
            }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
