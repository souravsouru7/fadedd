import React, { useEffect, useState, useRef } from 'react';
import { Plus, Minus, Clock, Palette, Award, DollarSign, Crown } from 'lucide-react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
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

    // Add custom keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .animate-shimmer {
        animation: shimmer 2s infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  const faqs = [
    {
      icon: <Clock className="w-6 h-6" />,
      question: 'How long does the repair or restoration take?',
      answer: 'Depending on the service, it usually takes 3–7 working days. We\'ll confirm the exact time after assessment and provide regular updates throughout the process.'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      question: 'Can you restore all types of leather?',
      answer: 'Yes, we work on most types of leather and similar materials, ensuring proper care for each. Our specialists are trained in handling exotic leathers and vintage materials.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      question: 'Do you offer custom designs?',
      answer: 'Absolutely! From unique color patterns to personalized artwork, we can make your item truly one of a kind. Our design team works closely with you to bring your vision to life.'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      question: 'How do I get a price estimate?',
      answer: 'Simply send us photos of your item via WhatsApp or visit our store, and we\'ll provide a free comprehensive quote within 24 hours.'
    },
    {
      icon: <Crown className="w-6 h-6" />,
      question: 'Do you handle branded luxury items?',
      answer: 'Yes, we specialize in premium brands and treat every piece with the highest level of care. Our craftsmen are experienced with luxury brands and maintain strict quality standards.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-black relative overflow-hidden pb-20 px-6"
    >
      {/* Split Background matching Hero with subtle animation */}
      <div className="absolute inset-0 flex">
        {/* Left side - Gray */}
        <div className="w-1/2 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 opacity-90 transition-all duration-1000 hover:opacity-95"></div>
        {/* Right side - Teal/Blue */}
        <div className="w-1/2 bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600 opacity-90 transition-all duration-1000 hover:opacity-95"></div>
      </div>

      {/* Vertical center border/divider with pulse animation */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white opacity-20 transform -translate-x-0.5 animate-pulse"></div>

      {/* Background Subtle Elements with floating animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      </div>

      {/* Floating Elements with enhanced animations */}
      <div className="absolute top-20 left-10 w-2 h-32 bg-gradient-to-b from-white/30 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-32 right-16 w-2 h-24 bg-gradient-to-t from-white/30 to-transparent animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.5s' }}></div>
      
      {/* New floating geometric elements */}
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-white/10 rounded-full animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-white/15 rounded-full animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 pt-20">
          <div 
            className="inline-block mb-8 group"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.8)',
              transition: 'all 0.8s ease 0.2s'
            }}
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg border border-white/20 group-hover:scale-110 group-hover:bg-white/25 transition-all duration-500">
              <span className="text-white text-3xl animate-pulse">?</span>
            </div>
          </div>

          <h2 
            className="text-5xl md:text-7xl font-normal text-white mb-4 tracking-[0.25em] uppercase hover:tracking-[0.3em] transition-all duration-700"
            style={{
              fontFamily: 'Playfair Display, serif',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(30px) rotateX(-10deg)',
              transition: 'all 0.8s ease 0.4s'
            }}
          >
            Frequently Asked
          </h2>
          
          <div 
            className="text-6xl md:text-8xl font-bold text-white uppercase tracking-[0.05em] mb-6 drop-shadow-2xl hover:scale-105 transition-all duration-700"
            style={{
              fontFamily: 'Playfair Display, serif',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) rotateX(0)' : 'translateY(30px) rotateX(10deg)',
              transition: 'all 0.8s ease 0.6s'
            }}
          >
            Questions
          </div>

          <p 
            className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 leading-relaxed hover:text-white/90 transition-all duration-500"
            style={{
              fontFamily: 'Inter, sans-serif',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              transition: 'all 0.8s ease 0.8s'
            }}
          >
            Everything you need to know about our luxury restoration services
          </p>
          
          {/* Decorative Line with animation */}
          <div 
            className="w-32 h-px bg-white opacity-20 mx-auto relative overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              scaleX: isVisible ? 1 : 0,
              transition: 'all 0.8s ease 1s'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-6 mb-20">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) translateX(0)' : `translateY(50px) translateX(${index % 2 === 0 ? '-30px' : '30px'})`,
                transition: `all 0.8s ease ${1.2 + index * 0.1}s`
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:bg-white/15 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 group-hover:border-white/30">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-6">
                    {/* Icon with unique animation */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 ${
                      openIndex === index 
                        ? 'bg-white/30 shadow-lg scale-110 rotate-180' 
                        : 'bg-white/15 hover:scale-105'
                    }`}>
                      <div className={`text-white transition-all duration-500 ${openIndex === index ? 'animate-pulse' : ''}`}>
                        {faq.icon}
                      </div>
                    </div>

                    {/* Question with letter spacing animation */}
                    <h3 
                      className="text-xl md:text-2xl font-normal text-white group-hover:text-white transition-all duration-500 uppercase tracking-[0.1em] group-hover:tracking-[0.15em]"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon with enhanced animation */}
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 ${
                    openIndex === index 
                      ? 'bg-white/25 rotate-45 scale-110' 
                      : 'bg-white/15 hover:bg-white/20 hover:scale-105 hover:rotate-90'
                  }`}>
                    <Plus className={`w-5 h-5 text-white transition-all duration-300 ${openIndex === index ? 'rotate-90' : ''}`} />
                  </div>
                </button>

                {/* Answer with slide and fade animation */}
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className={`px-8 pb-8 transition-all duration-500 ${openIndex === index ? 'transform translate-y-0' : 'transform -translate-y-4'}`}>
                    <div className="ml-20 pt-4">
                      <p 
                        className="text-white/80 text-lg leading-relaxed font-light"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          animation: openIndex === index ? 'fadeInUp 0.6s ease-out 0.2s both' : ''
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA Section */}
        <div 
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 2s'
          }}
        >
          <div className="relative py-12 transition-all duration-500 overflow-hidden group">
            {/* Animated Border with moving gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-1000 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse rounded-3xl"></div>
            
            {/* Sparkle Icon with floating animation */}
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg border border-white/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
              <span className="text-white text-2xl animate-bounce">✨</span>
            </div>
            
            <h3 
              className="text-3xl md:text-4xl font-normal text-white mb-4 uppercase tracking-[0.2em] group-hover:tracking-[0.25em] group-hover:scale-105 transition-all duration-700"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to restore your luxury item?
            </h3>
            
            <p 
              className="text-white/80 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto leading-relaxed group-hover:text-white/90 transition-all duration-500"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact us today for a free consultation and quote. Let's bring your cherished items back to life with our premium craftsmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="group/btn relative px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-light uppercase tracking-[0.15em] rounded-full transition-all duration-500 hover:bg-white/25 hover:scale-110 hover:shadow-lg hover:shadow-white/20 border border-white/20 hover:border-white/40 overflow-hidden"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="relative z-10 group-hover/btn:tracking-[0.2em] transition-all duration-300">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
              
              <a 
                href="tel:+971545770967" 
                className="group/link flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-light uppercase tracking-[0.15em] rounded-full transition-all duration-500 hover:border-white/40 hover:bg-white/15 hover:scale-110 hover:shadow-lg hover:shadow-white/20 overflow-hidden"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="group-hover/link:tracking-[0.2em] transition-all duration-300">Call Now</span>
                <span className="text-white group-hover/link:text-white/90 group-hover/link:scale-110 transition-all duration-300">+971 54 5770967</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover/link:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;