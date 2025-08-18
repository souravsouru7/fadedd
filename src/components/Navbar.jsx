import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const servicesData = [
  {
    title: 'Women’s Shoes',
    items: [
      'Cleaning & Conditioning',
      'Stitching',
      'Color Restoration',
      'Shoe Stretching',
      'Heel & Sole Repair',
      'Sole Guard & Heel Tips',
      'Shoe Shine',
      'Custom Coloring & Patterns',
      'Customized Artwork'
    ]
  },
  {
    title: 'Men’s Shoes',
    items: [
      'Cleaning & Conditioning',
      'Stitching',
      'Color Restoration',
      'Shoe Stretching',
      'Heel & Sole Repair',
      'Sole Guard & Heel Tips',
      'Shoe Shine',
      'Custom Coloring & Patterns',
      'Customized Artwork'
    ]
  },
  {
    title: 'Bags & Wallets',
    items: [
      'Cleaning & Conditioning',
      'Color Restoration',
      'Stitching & Edging',
      'Zipper Repair & Replacement',
      'Hardware Repair & Replacement',
      'Custom Coloring & Patterns',
      'Customized Artwork'
    ]
  },
  {
    title: 'Kids’ Shoes & Bags',
    items: [
      'Custom Coloring & Patterns',
      'Customized Artwork'
    ]
  },
  {
    title: 'Sneakers',
    items: [
      'Cleaning',
      'Color Restoration'
    ]
  }
]

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  return (
    <header className="flex items-center justify-between p-4 lg:p-8">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img 
            src="/fenav.png" 
            alt="Faded Elegance Logo" 
            className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
          />
        </Link>
      </div>

      {/* Navigation Menu - Hidden on mobile, shown on desktop */}
      <nav className="hidden lg:flex items-center space-x-12 relative z-50">
        <NavLink
          to="/"
          className={({ isActive }) => `luxury-nav text-[#D89F30] hover:text-white transition-colors duration-300 pb-1 font-semibold text-lg tracking-wide ${isActive ? 'border-b-2 border-[#D89F30]' : 'border-b-2 border-transparent hover:border-[#D89F30]/60'}`}
          end
        >
          HOME
        </NavLink>
        <span className="text-[#D89F30] text-2xl font-bold">|</span>
        <NavLink
          to="/about"
          className={({ isActive }) => `luxury-nav text-[#D89F30] hover:text-white transition-colors duration-300 pb-1 font-semibold text-lg tracking-wide ${isActive ? 'border-b-2 border-[#D89F30]' : 'border-b-2 border-transparent hover:border-[#D89F30]/60'}`}
        >
          ABOUT
        </NavLink>
        <span className="text-[#D89F30] text-2xl font-bold">|</span>
        <div
          className="relative before:content-[''] before:absolute before:left-0 before:right-0 before:top-full before:h-4"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button type="button" className="luxury-nav text-[#D89F30] hover:text-white transition-colors duration-300 font-semibold text-lg tracking-wide flex items-center gap-2">
            <span>SERVICES</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          {/* Dropdown Panel */}
          <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[min(90vw,1000px)] transition-opacity duration-200 ${servicesOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className="rounded-3xl p-6 font-sans" style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.80), rgba(20,20,20,0.90))',
              border: '1px solid rgba(216,159,48,0.25)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.02)'
            }}>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.map((cat) => (
                  <div key={cat.title} className="">
                    <h4 className="luxury-nav text-[#D89F30] text-base lg:text-lg font-semibold mb-3 tracking-wide">
                      {cat.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-white">
                          <span className="mt-1 text-[#F4B942]">•</span>
                          <span className="text-sm lg:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <span className="text-[#D89F30] text-2xl font-bold">|</span>
        <a href="#" className="luxury-nav text-[#D89F30] hover:text-white transition-colors duration-300 font-semibold text-lg tracking-wide">
          GALLERY
        </a>
        <span className="text-[#D89F30] text-2xl font-bold">|</span>
        <a href="#" className="luxury-nav text-[#D89F30] hover:text-white transition-colors duration-300 font-semibold text-lg tracking-wide">
          CONTACT US
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-[#D89F30] p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Quick Call Button - Hidden on mobile, shown on desktop */}
      <button className="hidden lg:block luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-6 py-3 rounded-full shadow-lg">
        📞 Quick Call
      </button>
    </header>
  )
}


