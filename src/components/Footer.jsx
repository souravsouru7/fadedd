import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)',
      color: '#ffffff',
      padding: '60px 40px 30px 40px',
      fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
        animationDelay: '0s'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '15%',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(42,95,122,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
        animationDelay: '3s'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          
          {/* Company Info */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <img 
                src="/Faded Elegance Logo Final-10.png"
                alt="Faded Elegance Logo"
                style={{
                  width: '120px',
                  height: 'auto',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>
            <p style={{
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '1.6',
              margin: '0 0 25px 0',
              fontFamily: '"Tenor Sans", sans-serif',
              letterSpacing: '0.3px',
              color: '#cccccc'
            }}>
              Premium luxury restoration services for your most cherished items. 
              We bring new life to luxury pieces with expert craftsmanship and 
              personalized attention to detail.
            </p>
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              {['Instagram', 'Facebook', 'WhatsApp'].map((platform, index) => (
                <a 
                  key={platform}
                  href="#"
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'all 0.3s ease',
                    fontFamily: '"Inter", sans-serif',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,107,53,0.2)';
                    e.target.style.borderColor = '#ff6b35';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              margin: '0 0 25px 0',
              fontFamily: '"Marcellus SC", serif',
              letterSpacing: '1px',
              color: '#ffffff'
            }}>
              Our Services
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              {['Luxury Bag Restoration', 'Shoe Repair & Customization', 'Leather Care & Maintenance', 'Custom Design Services', 'Branded Item Restoration', 'Color & Pattern Changes'].map((service, index) => (
                <li 
                  key={index}
                  style={{
                    marginBottom: '12px',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.6s ease ${0.4 + index * 0.1}s`
                  }}
                >
                  <a 
                    href="#"
                    style={{
                      color: '#cccccc',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: '400',
                      fontFamily: '"Tenor Sans", sans-serif',
                      letterSpacing: '0.3px',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#ff6b35';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#cccccc';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      width: '4px',
                      height: '4px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '12px',
                      flexShrink: 0
                    }}></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.4s'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              margin: '0 0 25px 0',
              fontFamily: '"Marcellus SC", serif',
              letterSpacing: '1px',
              color: '#ffffff'
            }}>
              Contact Us
            </h3>
            <div style={{
              marginBottom: '25px'
            }}>
              <h4 style={{
                fontSize: '18px',
                fontWeight: '500',
                margin: '0 0 10px 0',
                fontFamily: '"Marcellus SC", serif',
                letterSpacing: '0.5px',
                color: '#ff6b35'
              }}>
                Phone
              </h4>
              <p style={{
                fontSize: '16px',
                fontWeight: '400',
                margin: '0',
                fontFamily: '"Tenor Sans", sans-serif',
                letterSpacing: '0.3px',
                color: '#cccccc'
              }}>
                +971 54 5770967
              </p>
            </div>
            <div style={{
              marginBottom: '25px'
            }}>
              <h4 style={{
                fontSize: '18px',
                fontWeight: '500',
                margin: '0 0 10px 0',
                fontFamily: '"Marcellus SC", serif',
                letterSpacing: '0.5px',
                color: '#ff6b35'
              }}>
                WhatsApp
              </h4>
              <p style={{
                fontSize: '16px',
                fontWeight: '400',
                margin: '0',
                fontFamily: '"Tenor Sans", sans-serif',
                letterSpacing: '0.3px',
                color: '#cccccc'
              }}>
                +971 54 5770967
              </p>
            </div>
            <div>
              <h4 style={{
                fontSize: '18px',
                fontWeight: '500',
                margin: '0 0 10px 0',
                fontFamily: '"Marcellus SC", serif',
                letterSpacing: '0.5px',
                color: '#ff6b35'
              }}>
                Location
              </h4>
              <p style={{
                fontSize: '16px',
                fontWeight: '400',
                margin: '0',
                fontFamily: '"Tenor Sans", sans-serif',
                letterSpacing: '0.3px',
                color: '#cccccc'
              }}>
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.6s'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              margin: '0 0 25px 0',
              fontFamily: '"Marcellus SC", serif',
              letterSpacing: '1px',
              color: '#ffffff'
            }}>
              Quick Links
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              {['About Us', 'Our Process', 'Portfolio', 'Testimonials', 'FAQ', 'Contact'].map((link, index) => (
                <li 
                  key={index}
                  style={{
                    marginBottom: '12px',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.6s ease ${0.8 + index * 0.1}s`
                  }}
                >
                  <a 
                    href="#"
                    style={{
                      color: '#cccccc',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: '400',
                      fontFamily: '"Tenor Sans", sans-serif',
                      letterSpacing: '0.3px',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#ff6b35';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#cccccc';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      width: '4px',
                      height: '4px',
                      background: '#ff6b35',
                      borderRadius: '50%',
                      marginRight: '12px',
                      flexShrink: 0
                    }}></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 1s'
        }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '400',
            margin: '0',
            fontFamily: '"Tenor Sans", sans-serif',
            letterSpacing: '0.3px',
            color: '#999999'
          }}>
            © {currentYear} Faded Elegance. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px'
          }}>
            <a 
              href="#"
              style={{
                color: '#999999',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: '"Tenor Sans", sans-serif',
                letterSpacing: '0.3px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ff6b35';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#999999';
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="#"
              style={{
                color: '#999999',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: '"Tenor Sans", sans-serif',
                letterSpacing: '0.3px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ff6b35';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#999999';
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
