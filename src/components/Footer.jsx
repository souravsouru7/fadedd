import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    'Luxury Bag Restoration',
    'Shoe Repair & Customization', 
    'Leather Care & Maintenance',
    'Custom Design Services',
    'Branded Item Restoration',
    'Color & Pattern Changes'
  ]

  const quickLinks = [
    'About Us',
    'Our Process', 
    'Portfolio',
    'Testimonials',
    'FAQ',
    'Contact'
  ]

  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'WhatsApp', icon: '💬', url: '#' }
  ]

  return (
    <footer className="relative py-16 lg:py-20" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)'
    }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="mb-6 lg:mb-8">
              <img 
                src="/Faded Elegance Logo Final-07.png"
                alt="Faded Elegance Logo"
                className="w-32 lg:w-40 h-auto object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-6 lg:mb-8 font-light tracking-wide" style={{
              fontFamily: '"Playfair Display", serif'
            }}>
              Premium luxury restoration services for your most cherished items. 
              We bring new life to luxury pieces with expert craftsmanship and 
              personalized attention to detail.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 lg:gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(216, 159, 48, 0.1) 0%, rgba(115, 73, 24, 0.05) 100%)',
                    border: '1px solid rgba(216, 159, 48, 0.2)'
                  }}
                >
                  <span className="text-lg">{social.icon}</span>
                  <span className="text-[#D89F30] text-sm font-semibold tracking-wide group-hover:text-white transition-colors duration-300" style={{
                    fontFamily: '"Abhaya Libre", serif'
                  }}>
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#D89F30] text-xl lg:text-2xl font-semibold mb-6 lg:mb-8 tracking-wide" style={{
              fontFamily: '"Abhaya Libre", serif'
            }}>
              Our Services
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="group flex items-center text-gray-300 hover:text-[#D89F30] transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-[#D89F30] rounded-full mr-3 lg:mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-sm lg:text-base font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300" style={{
                      fontFamily: '"Playfair Display", serif'
                    }}>
                      {service}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#D89F30] text-xl lg:text-2xl font-semibold mb-6 lg:mb-8 tracking-wide" style={{
              fontFamily: '"Abhaya Libre", serif'
            }}>
              Contact Us
            </h3>
            <div className="space-y-4 lg:space-y-6">
              <div>
                <h4 className="text-[#D89F30] text-base lg:text-lg font-semibold mb-2 tracking-wide" style={{
                  fontFamily: '"Abhaya Libre", serif'
                }}>
                  Phone
                </h4>
                <p className="text-gray-300 text-sm lg:text-base font-light tracking-wide" style={{
                  fontFamily: '"Playfair Display", serif'
                }}>
                  +971 54 5770967
                </p>
              </div>
              <div>
                <h4 className="text-[#D89F30] text-base lg:text-lg font-semibold mb-2 tracking-wide" style={{
                  fontFamily: '"Abhaya Libre", serif'
                }}>
                  WhatsApp
                </h4>
                <p className="text-gray-300 text-sm lg:text-base font-light tracking-wide" style={{
                  fontFamily: '"Playfair Display", serif'
                }}>
                  +971 54 5770967
                </p>
              </div>
              <div>
                <h4 className="text-[#D89F30] text-base lg:text-lg font-semibold mb-2 tracking-wide" style={{
                  fontFamily: '"Abhaya Libre", serif'
                }}>
                  Location
                </h4>
                <p className="text-gray-300 text-sm lg:text-base font-light tracking-wide" style={{
                  fontFamily: '"Playfair Display", serif'
                }}>
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D89F30] text-xl lg:text-2xl font-semibold mb-6 lg:mb-8 tracking-wide" style={{
              fontFamily: '"Abhaya Libre", serif'
            }}>
              Quick Links
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="group flex items-center text-gray-300 hover:text-[#D89F30] transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-[#D89F30] rounded-full mr-3 lg:mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-sm lg:text-base font-light tracking-wide group-hover:translate-x-1 transition-transform duration-300" style={{
                      fontFamily: '"Playfair Display", serif'
                    }}>
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D89F30]/20 pt-8 lg:pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8">
            <p className="text-gray-400 text-sm lg:text-base font-light tracking-wide text-center lg:text-left" style={{
              fontFamily: '"Playfair Display", serif'
            }}>
              © {currentYear} Faded Elegance. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 lg:gap-8 justify-center lg:justify-end">
              <a 
                href="#"
                className="text-gray-400 hover:text-[#D89F30] text-sm lg:text-base font-light tracking-wide transition-colors duration-300" style={{
                  fontFamily: '"Playfair Display", serif'
                }}
              >
                Privacy Policy
              </a>
              <a 
                href="#"
                className="text-gray-400 hover:text-[#D89F30] text-sm lg:text-base font-light tracking-wide transition-colors duration-300" style={{
                  fontFamily: '"Playfair Display", serif'
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
