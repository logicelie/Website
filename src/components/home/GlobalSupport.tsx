import { Headphones, MessageCircle } from 'lucide-react';

export function GlobalSupport() {
  return (
    <section className="bg-[#F4F5F7] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Book a Demo Hero Section */}
        <div className="relative bg-gradient-to-br from-[#007A55] via-[#006644] to-[#007A55] rounded-[3rem] overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Left Content */}
            <div className="p-12 lg:p-16">
              <h2 className="text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Join Thousands of Car Rental Companies Thriving with RentWorksPlus+
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                See how RentWorksPlus+ unified platform can work for your rental operation.
              </p>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Our team will walk you through features tailored to your specific needs and operations.
              </p>
              
              <button className="bg-white text-[#007A55] px-10 py-4 rounded-xl hover:shadow-2xl transition-all inline-flex items-center group">
                <span className="mr-2">Book a Demo</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right Decorative Illustration with Feature Badges */}
            <div className="relative h-full hidden lg:block">
              {/* Wireframe Car Illustration */}
              <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-20" viewBox="0 0 600 400" fill="none" stroke="white" strokeWidth="1.5">
                {/* Car Body */}
                <path d="M150 250 L180 200 L280 200 L320 250 Z" />
                <rect x="150" y="250" width="170" height="80" rx="4" />
                
                {/* Windows */}
                <path d="M190 200 L200 220 L260 220 L270 200 Z" />
                <line x1="230" y1="200" x2="230" y2="220" />
                
                {/* Wheels */}
                <circle cx="190" cy="330" r="25" />
                <circle cx="190" cy="330" r="15" />
                <circle cx="280" cy="330" r="25" />
                <circle cx="280" cy="330" r="15" />
                
                {/* Details */}
                <line x1="320" y1="260" x2="340" y2="260" />
                <line x1="320" y1="275" x2="335" y2="275" />
                <rect x="160" y="260" width="8" height="15" rx="1" />
                
                {/* Grid Background */}
                <line x1="100" y1="350" x2="500" y2="350" strokeDasharray="5,5" opacity="0.3" />
                <line x1="100" y1="150" x2="500" y2="150" strokeDasharray="5,5" opacity="0.3" />
                
                {/* Vertical lines */}
                {[150, 200, 250, 300, 350, 400, 450].map((x, i) => (
                  <line key={i} x1={x} y1="100" x2={x} y2="360" strokeDasharray="5,5" opacity="0.2" />
                ))}
              </svg>

              {/* Floating Feature Badges */}
              <div className="absolute top-12 right-16 bg-white rounded-xl px-6 py-3 shadow-xl animate-float-badge">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#007A55]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#007A55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-[#081E32] text-sm">100% safe & secure</span>
                </div>
              </div>

              <div className="absolute top-1/2 right-8 bg-white rounded-xl px-6 py-3 shadow-xl animate-float-badge-delayed">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#007A55]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#007A55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <span className="text-[#081E32] text-sm">360° fleet management</span>
                </div>
              </div>

              <div className="absolute bottom-16 right-20 bg-white rounded-xl px-6 py-3 shadow-xl animate-float-badge-slow">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#007A55]/10 rounded-lg flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-[#007A55]" />
                  </div>
                  <span className="text-[#081E32] text-sm">24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float-badge {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes float-badge-delayed {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          @keyframes float-badge-slow {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-12px);
            }
          }

          .animate-float-badge {
            animation: float-badge 3s ease-in-out infinite;
          }

          .animate-float-badge-delayed {
            animation: float-badge-delayed 3.5s ease-in-out infinite;
            animation-delay: 0.5s;
          }

          .animate-float-badge-slow {
            animation: float-badge-slow 4s ease-in-out infinite;
            animation-delay: 1s;
          }
        `}</style>
      </div>
    </section>
  );
}
