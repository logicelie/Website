import { motion } from 'motion/react';
import { TrendingUp, Award } from 'lucide-react';

export function ValueProposition() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Card - Revenue Boost */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F4F5F7] rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-[#081E32] mb-4">
                Maximize Fleet Utilization & Revenue
              </h3>
              <p className="text-[#081E32]/70 text-lg mb-8 leading-relaxed">
                Our intelligent pricing and fleet optimization tools help increase revenue per vehicle by up to 42% with dynamic pricing strategies and automated utilization tracking.
              </p>

              {/* Stats Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl relative">
                {/* Revenue Badge */}
                <div className="absolute -top-4 -left-4">
                  <div className="bg-[#007A55] text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">Utilization Increased</span>
                  </div>
                </div>

                {/* Notification Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="bg-white border-2 border-[#007A55] text-[#007A55] px-3 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                    <div className="w-2 h-2 bg-[#007A55] rounded-full animate-pulse"></div>
                    <span className="text-sm">New Reservation</span>
                  </div>
                </div>

                {/* Stats Display */}
                <div className="mt-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl text-[#007A55]">42%</span>
                    <span className="text-[#007A55] text-sm bg-[#007A55]/10 px-2 py-1 rounded">+8% YTD</span>
                  </div>
                  <p className="text-[#081E32]/60 mb-4">Fleet Utilization Rate</p>

                  {/* Mini Chart */}
                  <div className="bg-[#F4F5F7] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1 text-xs text-[#081E32]/60">
                        <div className="w-2 h-2 bg-[#007A55] rounded-full"></div>
                        <span>Revenue</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#081E32]/60">
                        <div className="w-2 h-2 bg-[#081E32]/30 rounded-full"></div>
                        <span>Bookings</span>
                      </div>
                    </div>
                    
                    {/* Simple Chart Visual */}
                    <div className="relative h-24">
                      <svg viewBox="0 0 300 80" className="w-full h-full">
                        {/* Background area */}
                        <path
                          d="M 0 60 Q 50 55, 75 50 T 150 35 T 225 25 T 300 20 L 300 80 L 0 80 Z"
                          fill="#007A55"
                          opacity="0.1"
                        />
                        {/* Line */}
                        <path
                          d="M 0 60 Q 50 55, 75 50 T 150 35 T 225 25 T 300 20"
                          stroke="#007A55"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                        />
                        {/* Data point */}
                        <circle cx="225" cy="25" r="4" fill="#007A55" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#007A55]/5 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Right Card - Built by Experts */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#E8EEF2] rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-[#081E32] mb-4">
                Built by Rental Experts for Rental Professionals
              </h3>
              <p className="text-[#081E32]/70 text-lg mb-8 leading-relaxed">
                With over 25+ years of car rental industry experience, RentWorksPlus+ understands your operational challenges because we've lived them.
              </p>

              {/* Experience Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl relative">
                {/* Trusted Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="bg-[#007A55] text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">Trusted Partner</span>
                  </div>
                </div>

                {/* Experience Badge - Centered */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className="bg-gradient-to-br from-[#F4F5F7] to-white rounded-2xl px-8 py-6 shadow-lg border-2 border-[#007A55]/20">
                    <div className="flex items-center gap-3">
                      <div className="text-left">
                        <div className="text-5xl text-[#007A55] mb-1">25+</div>
                        <div className="text-[#081E32]/60 text-sm">Years of Trust</div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="w-8 h-1 bg-[#007A55] rounded"></div>
                        <div className="w-8 h-1 bg-[#007A55]/50 rounded"></div>
                        <div className="w-8 h-1 bg-[#007A55]/25 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Handshake Illustration */}
                <div className="relative mt-8">
                  <div className="flex justify-center items-center">
                    <svg width="200" height="120" viewBox="0 0 200 120" className="opacity-20">
                      {/* Simple handshake illustration */}
                      <path
                        d="M 40 60 L 80 60 L 90 50 L 100 60 L 110 50 L 120 60 L 160 60 M 80 60 L 80 80 L 70 90 M 120 60 L 120 80 L 130 90"
                        stroke="#007A55"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="60" cy="45" r="18" stroke="#007A55" strokeWidth="8" fill="none" />
                      <circle cx="140" cy="45" r="18" stroke="#007A55" strokeWidth="8" fill="none" />
                    </svg>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#081E32]/10">
                  <div className="text-center">
                    <div className="text-2xl text-[#007A55] mb-1">500+</div>
                    <div className="text-xs text-[#081E32]/60">Active Fleets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-[#007A55] mb-1">98%</div>
                    <div className="text-xs text-[#081E32]/60">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-[#007A55] mb-1">24/7</div>
                    <div className="text-xs text-[#081E32]/60">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#007A55]/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
