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
        display: 'flex',
        fontFamily: 'Arial, Helvetica, sans-serif'
      }}
    >
      {/* Left Section - Dark Grey/Black Background */}
      <div style={{
        flex: '1',
        background: '#1a1a1a',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '40px',
        height: '100vh',
        clipPath: isMobile ? 'none' : 'none',
        transition: 'all 0.4s ease'
      }}>
        
        {/* Top Left Branding */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 10
        }}>
          <span style={{
            color: '#ffffff',
            fontSize: '28px',
            fontWeight: '700',
            letterSpacing: '3px',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'uppercase'
          }}>GLAMOUR</span>
          
          {/* Hamburger Menu */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            cursor: 'pointer',
            padding: '8px'
          }}>
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                style={{
                  width: '24px',
                  height: '3px',
                  background: '#ffffff',
                  transition: 'all 0.3s ease'
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Left Arrow Navigation */}
        <div style={{
          position: 'absolute',
          left: '40px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '2px solid #ffffff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: 'rgba(255,255,255,0.1)'
          }}>
            <div style={{
              width: 0,
              height: 0,
              borderRight: '10px solid #ffffff',
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              marginLeft: '-3px'
            }}></div>
          </div>
        </div>

        {/* Left Side Content */}
        <div style={{
          color: '#ffffff',
          position: 'relative',
          zIndex: 10,
          marginLeft: '120px',
          marginTop: 'auto',
          marginBottom: '120px'
        }}>
          <h1 style={{
            fontSize: 'clamp(4rem, 10vw, 6rem)',
            fontWeight: '300',
            margin: '0 0 15px 0',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '2px',
            lineHeight: '0.9',
            textTransform: 'uppercase'
          }}>
            {splitText('ROSIE')}
          </h1>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: '300',
            margin: '0 0 30px 0',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '1px',
            opacity: 0.9,
            textTransform: 'uppercase'
          }}>
            {splitText('HUNTINGTON-WHITELEY')}
          </h2>
          <div style={{
            fontSize: 'clamp(3rem, 8vw, 4.5rem)',
            fontWeight: '700',
            fontFamily: 'Arial, sans-serif',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 1s',
            color: '#ffffff'
          }}>
            080
          </div>
        </div>

        {/* Partial Image Overlay on Left */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '-15%',
          width: '70%',
          height: '70%',
          zIndex: 5,
          overflow: 'hidden'
        }}>
          <img 
            src="/FE PNG/pexels-jose-martin-segura-benites-1422456152-27204278.png"
            alt="Fashion Model"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center left',
              opacity: 0.7,
              filter: 'contrast(1.1) brightness(0.9)'
            }}
          />
        </div>
      </div>

      {/* Right Section - Teal/Blue-Grey Background */}
      <div style={{
        flex: '1',
        background: '#2a5f7a',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '40px',
        height: '100vh',
        clipPath: isMobile ? 'none' : 'none',
        transition: 'all 0.4s ease'
      }}>
        
        {/* Top Right Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          justifyContent: 'flex-end',
          position: 'relative',
          zIndex: 10
        }}>
          <span style={{
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: '500',
            letterSpacing: '2px',
            fontFamily: 'Arial, sans-serif'
          }}>RU - ENG</span>
          
          {/* Search Icon */}
          <div style={{
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            position: 'relative'
          }}>
            <div style={{
              width: '14px',
              height: '14px',
              border: '2px solid #ffffff',
              borderRadius: '50%',
              position: 'absolute',
              top: '2px',
              left: '2px'
            }}></div>
            <div style={{
              width: '2px',
              height: '8px',
              background: '#ffffff',
              position: 'absolute',
              bottom: '2px',
              right: '2px',
              transform: 'rotate(45deg)',
              transformOrigin: 'bottom right'
            }}></div>
          </div>
        </div>

        {/* Right Arrow Navigation */}
        <div style={{
          position: 'absolute',
          right: '40px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '2px solid #ffffff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: 'rgba(255,255,255,0.1)'
          }}>
            <div style={{
              width: 0,
              height: 0,
              borderLeft: '10px solid #ffffff',
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              marginRight: '-3px'
            }}></div>
          </div>
        </div>

        {/* Main Image */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '85%',
          height: '85%',
          zIndex: 5
        }}>
          <img 
            src="/FE PNG/pexels-jose-martin-segura-benites-1422456152-27204279.png"
            alt="Rosie Huntington-Whiteley"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'contrast(1.05) brightness(1.02)'
            }}
          />
        </div>

        {/* Right Side Content */}
        <div style={{
          color: '#ffffff',
          position: 'relative',
          zIndex: 10,
          marginRight: '120px',
          marginTop: 'auto',
          marginBottom: '120px',
          textAlign: 'right'
        }}>
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: '400',
            margin: '0 0 30px 0',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '1px',
            lineHeight: '1.3',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 1.2s',
            textTransform: 'uppercase'
          }}>
            {splitText('7 PICTURES THAT WILL MAKE YOU WANT TO BE')}
          </p>
        </div>

        {/* Bottom Right Social Media */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
          justifyContent: 'flex-end',
          position: 'relative',
          zIndex: 10
        }}>
          {['IN', 'FB', 'YT'].map((platform) => (
            <span 
              key={platform}
              style={{
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'Arial, sans-serif',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffd700';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'scale(1)';
              }}
            >
              {platform}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile Responsive Overlay */}
      {isMobile && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90vw',
          height: '70vh',
          zIndex: 20,
          background: 'rgba(26, 26, 26, 0.95)',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
          textAlign: 'center',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontWeight: '300',
            margin: '0 0 15px 0',
            color: '#ffffff',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            {splitText('ROSIE')}
          </h1>
          <h2 style={{
            fontSize: 'clamp(1.2rem, 4vw, 2rem)',
            fontWeight: '300',
            margin: '0 0 25px 0',
            color: '#ffffff',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '1px',
            opacity: 0.9,
            textTransform: 'uppercase'
          }}>
            {splitText('HUNTINGTON-WHITELEY')}
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
            fontWeight: '400',
            margin: '0',
            color: '#ffffff',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '1px',
            lineHeight: '1.3',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 1.2s',
            textTransform: 'uppercase'
          }}>
            {splitText('7 PICTURES THAT WILL MAKE YOU WANT TO BE')}
          </p>
        </div>
      )}
    </div>
  );
};

export default Hero;
