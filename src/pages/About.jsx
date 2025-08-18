import React from 'react'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="relative overflow-hidden">
        {/* Ambient background accents */}
        <div className="absolute inset-0 overflow-hidden opacity-80">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-[#D89F30]/10 to-[#734918]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-20 w-72 h-72 bg-gradient-to-tr from-[#734918]/10 to-[#F4B942]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 right-1/4 w-60 h-60 bg-gradient-to-bl from-[#D89F30]/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <main className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
          {/* Heading */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="luxury-nav text-[#D89F30] text-sm tracking-[0.3em] uppercase">About Us</span>
            <h1 className="luxury-title text-4xl lg:text-7xl mt-4 leading-tight">Craft, Care & Customization</h1>
            <div className="mx-auto mt-6 h-px w-56 bg-gradient-to-r from-transparent via-[#D89F30] to-transparent"></div>
          </div>

          {/* Intro section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
            <div>
              <div className="rounded-3xl p-6 lg:p-8" style={{
                background: 'linear-gradient(135deg, rgba(216,159,48,0.10) 0%, rgba(115,73,24,0.06) 100%)',
                border: '1px solid rgba(216,159,48,0.25)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.35)'
              }}>
                <p className="luxury-subtitle text-white/90 text-base lg:text-xl leading-relaxed">
                  At Faded Elegance, we believe every luxury item deserves a second chance to shine. Our mission is to bring your treasured
                  pieces back to life with care, precision, and creativity.
                </p>
                <p className="luxury-subtitle text-white/90 text-base lg:text-xl leading-relaxed mt-5">
                  With years of expertise in leather care, color restoration, stitching, and custom artistry, we offer a unique blend of
                  craftsmanship and passion. Whether it’s reviving the color of your favorite handbag, repairing the sole of your designer
                  shoes, or adding custom patterns to your sneakers, we do it with the same dedication as if it were our own.
                </p>
              </div>
            </div>

            {/* Decorative image block (mirrors the brand shape) */}
            <div className="hidden lg:block">
              <div className="relative w-full max-w-xl mx-auto">
                {/* Glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)',
                    background: 'linear-gradient(45deg, rgba(216, 159, 48, 0.8), rgba(115, 73, 24, 0.8))',
                    transform: 'rotate(-2deg) scale(1.02)',
                    filter: 'blur(10px)',
                    zIndex: 1
                  }}
                ></div>
                {/* Video (replaces image) */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="relative w-full h-[420px] object-cover"
                  style={{
                    clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)',
                    transform: 'rotate(-2deg)',
                    zIndex: 2
                  }}
                >
                  <source src="/6661931-uhd_4096_2160_25fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Border */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)',
                    border: '3px solid #D89F30',
                    transform: 'rotate(-2deg)',
                    zIndex: 3
                  }}
                ></div>
                {/* Badge */}
                <div className="absolute -top-4 -right-2 bg-[#D89F30] text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg luxury-nav tracking-wide z-10">
                  REBORN IN LUXURY
                </div>
              </div>
            </div>
          </div>

          {/* Our Promise */}
          <div className="mb-12 lg:mb-20">
            <div className="text-center mb-8">
              <h2 className="luxury-title text-2xl lg:text-4xl">Our Promise</h2>
              <div className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-[#D89F30] to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="rounded-2xl p-6 lg:p-8 transition-transform duration-300 hover:scale-[1.02]" style={{
                background: 'linear-gradient(135deg, rgba(216,159,48,0.10), rgba(115,73,24,0.06))',
                border: '1px solid rgba(216,159,48,0.25)'
              }}>
                <div className="text-3xl">✅</div>
                <h3 className="luxury-nav text-[#D89F30] text-lg lg:text-xl mt-3 mb-2">Restore beauty without compromising quality</h3>
                <p className="text-white/80">Every restoration honors the original craftsmanship while elevating finish and feel.</p>
              </div>
              {/* Card 2 */}
              <div className="rounded-2xl p-6 lg:p-8 transition-transform duration-300 hover:scale-[1.02]" style={{
                background: 'linear-gradient(135deg, rgba(216,159,48,0.10), rgba(115,73,24,0.06))',
                border: '1px solid rgba(216,159,48,0.25)'
              }}>
                <div className="text-3xl">🧴</div>
                <h3 className="luxury-nav text-[#D89F30] text-lg lg:text-xl mt-3 mb-2">Use safe, premium-grade materials</h3>
                <p className="text-white/80">We source professional, material-safe solutions trusted by luxury houses.</p>
              </div>
              {/* Card 3 */}
              <div className="rounded-2xl p-6 lg:p-8 transition-transform duration-300 hover:scale-[1.02]" style={{
                background: 'linear-gradient(135deg, rgba(216,159,48,0.10), rgba(115,73,24,0.06))',
                border: '1px solid rgba(216,159,48,0.25)'
              }}>
                <div className="text-3xl">🌟</div>
                <h3 className="luxury-nav text-[#D89F30] text-lg lg:text-xl mt-3 mb-2">Deliver results that exceed expectations</h3>
                <p className="text-white/80">Meticulous checks ensure color, texture, and finish look stunning and last.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-block px-8 py-8 lg:px-12 lg:py-10 rounded-3xl" style={{
              background: 'linear-gradient(135deg, rgba(216, 159, 48, 0.10) 0%, rgba(115, 73, 24, 0.06) 100%)',
              border: '2px solid rgba(216, 159, 48, 0.25)',
              backdropFilter: 'blur(20px)'
            }}>
              <h3 className="luxury-title text-2xl lg:text-4xl mb-4">Ready to restore your favorite piece?</h3>
              <p className="luxury-subtitle text-white/85 mb-6 max-w-2xl mx-auto">Start with a quick consultation and let our artisans guide you through the best options.</p>
              <a href="#contact" className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-8 lg:px-12 py-3 lg:py-4 rounded-full font-semibold inline-block">
                ENQUIRE NOW
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


