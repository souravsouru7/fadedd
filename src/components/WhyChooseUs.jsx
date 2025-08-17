import React from 'react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: "✨",
      title: "EXPERT CRAFTSMANSHIP",
      description: "Decades of experience in luxury restoration with master artisans who understand the finest details of premium materials."
    },
    {
      icon: "💎",
      title: "PREMIUM MATERIALS",
      description: "Only the highest quality leathers, fabrics, and hardware sourced from world-renowned suppliers and manufacturers."
    },
    {
      icon: "🎨",
      title: "CUSTOM DESIGN",
      description: "Personalized restoration services that transform your cherished items into unique pieces that reflect your style."
    },
    {
      icon: "⚡",
      title: "FAST TURNAROUND",
      description: "Efficient service without compromising quality. Your luxury items restored to perfection in record time."
    },
    {
      icon: "🛡️",
      title: "LIFETIME WARRANTY",
      description: "Complete confidence in our work with comprehensive warranty coverage on all restoration services."
    },
    {
      icon: "🌟",
      title: "EXCLUSIVE SERVICE",
      description: "VIP treatment with dedicated consultation, progress updates, and white-glove delivery service."
    }
  ]

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)'
    }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#D89F30]/20 to-[#734918]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-[#D89F30]/15 to-[#734918]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-[#D89F30]/10 to-[#734918]/5 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-6 lg:mb-8">
            <span className="luxury-nav text-[#D89F30] text-sm tracking-widest uppercase">
              Why Choose
            </span>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D89F30] to-transparent mt-2"></div>
          </div>
          
          <h2 className="luxury-title text-4xl lg:text-7xl mb-6 lg:mb-8 leading-tight">
            FADED ELEGANCE
          </h2>
          
          <p className="luxury-subtitle text-lg lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed px-4 lg:px-0">
            Where every restoration tells a story of luxury, craftsmanship, and timeless elegance
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-6 lg:p-8 rounded-2xl transition-all duration-500 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(216, 159, 48, 0.05) 0%, rgba(115, 73, 24, 0.02) 100%)',
                border: '1px solid rgba(216, 159, 48, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D89F30]/10 to-[#734918]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-4 lg:mb-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#D89F30] to-[#734918] flex items-center justify-center text-xl lg:text-2xl shadow-lg">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="luxury-nav text-[#D89F30] text-lg lg:text-xl font-semibold mb-3 lg:mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm lg:text-base font-light">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-6 h-6 lg:w-8 lg:h-8 border-t-2 border-r-2 border-[#D89F30] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-block p-6 lg:p-8 rounded-3xl" style={{
            background: 'linear-gradient(135deg, rgba(216, 159, 48, 0.1) 0%, rgba(115, 73, 24, 0.05) 100%)',
            border: '2px solid rgba(216, 159, 48, 0.2)',
            backdropFilter: 'blur(20px)'
          }}>
            <h3 className="luxury-title text-2xl lg:text-4xl mb-4 lg:mb-6">
              READY TO RESTORE YOUR LUXURY?
            </h3>
            <p className="luxury-subtitle text-base lg:text-lg text-white mb-6 lg:mb-8 max-w-2xl mx-auto px-4 lg:px-0">
              Experience the difference that true craftsmanship makes. Your luxury items deserve nothing less than perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
              <button className="luxury-button bg-gradient-to-r from-[#D89F30] to-[#734918] text-white px-8 lg:px-10 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:scale-105 transition-transform duration-300">
                START YOUR PROJECT
              </button>
              <button className="luxury-button border-2 border-[#D89F30] text-[#D89F30] px-8 lg:px-10 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:bg-[#D89F30] hover:text-white transition-all duration-300">
                VIEW PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 lg:w-4 lg:h-4 bg-[#D89F30] rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 lg:w-3 lg:h-3 bg-[#F4B942] rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 lg:w-2 lg:h-2 bg-[#734918] rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 lg:w-3 lg:h-3 bg-[#D89F30] rounded-full animate-pulse"></div>
    </section>
  )
}
