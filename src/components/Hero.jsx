import React from 'react';
import { ChevronLeft, ChevronRight, Menu, Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* Left side - Gray */}
        <div className="w-1/2 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800"></div>
        {/* Right side - Teal/Blue */}
        <div className="w-1/2 bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600"></div>
      </div>

      {/* Vertical center border/divider */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white opacity-20 transform -translate-x-0.5"></div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-12 py-8">
        <div className="flex items-center space-x-8">
          <Menu className="w-5 h-5 text-white" />
          <h1 className="text-xl font-normal tracking-[0.25em] text-white" style={{ fontFamily: 'Playfair Display, serif' }}>GLAMOUR</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3 text-white">
            <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs font-medium">
              A
            </div>
            <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Ella</span>
          </div>
          <Search className="w-5 h-5 text-white" />
        </div>
      </header>

      {/* Main Content - Clean Image Layout */}
      <div className="absolute inset-0 flex">
        
        {/* Left Section - Single Clean Image */}
        <div className="w-1/2 relative">
          {/* Main left image */}
          <div className="absolute top-20 left-10 w-96 h-[600px] transform -rotate-6 z-10">
            <img 
              src="/FE PNG/pexels-jose-martin-segura-benites-1422456152-27298274.png" 
              alt="Fashion Model in Light Blazer"
              className="w-full h-full object-cover object-center rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Right Section - Single Clean Image */}
        <div className="w-1/2 relative">
          {/* Main right image */}
          <div className="absolute top-16 right-16 w-[500px] h-[650px] transform rotate-3 z-10">
            <img 
              src="/FE PNG/pexels-jose-martin-segura-benites-1422456152-27381290.png" 
              alt="Fashion Model on Director's Chair"
              className="w-full h-full object-cover object-center rounded-2xl shadow-2xl"
            />
          </div>
          
          {/* Floating quote overlay */}
          <div className="absolute top-32 left-12 text-xs text-white leading-tight max-w-28 text-left drop-shadow-lg z-30" style={{ fontFamily: 'Playfair Display, serif' }}>
            <div>"PICTURES THAT</div>
            <div>WILL MAKE</div>
            <div>YOU WANT TO BE</div>
            <div>HER"</div>
          </div>
        </div>
      </div>

      {/* Center Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          {/* Main title */}
          <h1 className="text-[9rem] font-bold text-white tracking-[0.05em] leading-none mb-4 drop-shadow-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            ROSIE
          </h1>
          
          {/* Subtitle */}
          <div className="text-white text-xl tracking-[0.3em] font-light mb-8 drop-shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div>HUNTINGTON-</div>
            <div>WHITELEY</div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-white shadow-lg"></div>
            <div className="w-3 h-3 rounded-full bg-white/60"></div>
            <div className="w-3 h-3 rounded-full bg-white/40"></div>
          </div>

          {/* Issue number */}
          <div className="text-white text-4xl font-light tracking-[0.4em] drop-shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            080
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20">
        <ChevronLeft className="w-8 h-8 text-white/80 hover:text-white drop-shadow-lg" />
      </button>
      
      <button className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <ChevronRight className="w-8 h-8 text-white/80 hover:text-white drop-shadow-lg" />
      </button>

      {/* Bottom right navigation */}
      <div className="absolute bottom-10 right-10 flex space-x-6 text-white z-20">
        <button className="text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Inter, sans-serif' }}>01</button>
        <button className="text-sm opacity-60 hover:opacity-100 transition-opacity" style={{ fontFamily: 'Inter, sans-serif' }}>02</button>
        <button className="text-sm opacity-100 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>03</button>
      </div>
    </div>
  );
}