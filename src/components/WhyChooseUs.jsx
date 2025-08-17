import React from 'react'

export default function WhyChooseUs() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#D89F30] to-[#734918] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[#D89F30] to-[#734918] rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              {/* Main Title */}
              <div className="relative">
                <h2 className="text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#D89F30] via-[#F4B942] to-[#734918] bg-clip-text text-transparent">
                    WHY
                  </span>
                  <br />
                  <span className="text-white">CHOOSE</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#D89F30] via-[#F4B942] to-[#734918] bg-clip-text text-transparent">
                    US?
                  </span>
                </h2>
                
                {/* Decorative Line */}
                <div className="absolute -bottom-4 left-0 w-32 h-1 bg-gradient-to-r from-[#D89F30] to-[#734918]"></div>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                {[
                  "Luxury-level craftsmanship",
                  "Premium materials and techniques", 
                  "Personalized service for each item",
                  "Creativity that makes your items truly one of a kind"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    {/* Animated Bullet */}
                    <div className="relative mt-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#D89F30] to-[#734918] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-[#D89F30] to-[#734918] rounded-full animate-ping opacity-20"></div>
                    </div>
                    
                    {/* Feature Text */}
                    <p className="text-white text-lg lg:text-xl font-medium group-hover:text-[#D89F30] transition-colors duration-300">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact Section */}
              <div className="pt-8">
                <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#D89F30] to-[#734918] p-6 rounded-2xl shadow-2xl">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium opacity-90">Call us:</p>
                    <p className="text-white text-xl font-bold">+971 54 5770967</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative">
                {/* Large Circle Background */}
                <div className="w-96 h-96 bg-gradient-to-br from-[#D89F30]/20 to-[#734918]/20 rounded-full flex items-center justify-center relative">
                  {/* Inner Circle */}
                  <div className="w-80 h-80 bg-gradient-to-br from-[#D89F30]/30 to-[#734918]/30 rounded-full flex items-center justify-center">
                    {/* Center Element */}
                    <div className="w-64 h-64 bg-gradient-to-br from-[#D89F30] to-[#734918] rounded-full flex items-center justify-center shadow-2xl">
                      <div className="text-white text-6xl font-bold">★</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-[#D89F30] to-[#734918] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-white text-2xl">✨</span>
                </div>
                
                <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-[#D89F30] to-[#734918] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white text-xl">💎</span>
                </div>

                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-[#D89F30] to-[#734918] rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                  <span className="text-white text-lg">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}