import { useState, useEffect } from 'react';
import { MapPin, Calendar, Check, ArrowRight } from 'lucide-react';

export function BookingStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [booking, setBooking] = useState({
    location: '',
    pickupDate: '',
    returnDate: '',
    selectedVehicle: null as any
  });

  const vehicles = [
    { 
      id: 1, 
      name: 'Economy', 
      description: 'Compact & fuel efficient', 
      price: 45, 
      image: 'https://images.unsplash.com/photo-1673905190370-58c991e71423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    { 
      id: 2, 
      name: 'Compact SUV', 
      description: 'Perfect for city & highway', 
      price: 69, 
      image: 'https://images.unsplash.com/photo-1758228674135-ccb8865f1b02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    { 
      id: 3, 
      name: 'Luxury Sedan', 
      description: 'Premium comfort', 
      price: 129, 
      image: 'https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    },
    { 
      id: 4, 
      name: 'Full-Size SUV', 
      description: 'Spacious family option', 
      price: 89, 
      image: 'https://images.unsplash.com/photo-1758216991743-110e7a093f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
    }
  ];

  // Auto-advance animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev === 3) return 1;
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-10 h-[580px] flex flex-col">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-700 ${
                  currentStep >= step
                    ? 'bg-[#007A55] text-white'
                    : 'bg-[#F4F5F7] text-gray-400'
                }`}
              >
                {currentStep > step ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{step}</span>
                )}
              </div>
              <span className={`text-xs mt-2 transition-colors duration-700 ${currentStep >= step ? 'text-[#007A55]' : 'text-gray-400'}`}>
                {step === 1 ? 'Location & Date' : step === 2 ? 'Select Vehicle' : 'Complete'}
              </span>
            </div>
            {step < 3 && (
              <div
                className={`h-1 flex-1 mx-2 transition-all duration-700 ${
                  currentStep > step ? 'bg-[#007A55]' : 'bg-[#F4F5F7]'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content - Fixed Height */}
      <div className="flex-1 relative overflow-hidden">
        {/* Step 1: Location & Date */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentStep === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}`}>
          <div className="space-y-4 h-full flex flex-col">
            <h3 className="text-2xl text-[#081E32] mb-4">Where and when?</h3>
            
            <div>
              <label className="block text-sm text-gray-600 mb-2">Pick-up Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Los Angeles Int'l Airport"
                  value={currentStep === 1 ? 'Los Angeles Int\'l Airport' : ''}
                  readOnly
                  className="w-full pl-11 pr-4 py-3 bg-[#F4F5F7] rounded-lg text-[#081E32] cursor-default"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Pick-up Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={currentStep === 1 ? '2024-12-15' : ''}
                    readOnly
                    className="w-full pl-11 pr-4 py-3 bg-[#F4F5F7] rounded-lg text-[#081E32] cursor-default"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Return Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={currentStep === 1 ? '2024-12-18' : ''}
                    readOnly
                    className="w-full pl-11 pr-4 py-3 bg-[#F4F5F7] rounded-lg text-[#081E32] cursor-default"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#007A55]/10 rounded-lg p-4 mt-4">
              <p className="text-sm text-[#007A55]">
                💡 3 day rental • Book 7+ days and save 15%
              </p>
            </div>
          </div>
        </div>

        {/* Step 2: Select Vehicle */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentStep === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="space-y-4 h-full flex flex-col">
            <h3 className="text-2xl text-[#081E32] mb-4">Choose your vehicle</h3>
            
            <div className="grid grid-cols-2 gap-3 flex-1">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  onClick={() => setBooking({ ...booking, selectedVehicle: vehicle })}
                  className={`rounded-xl cursor-pointer transition-all duration-500 overflow-hidden ${
                    booking.selectedVehicle?.id === vehicle.id
                      ? 'ring-4 ring-[#007A55] shadow-xl'
                      : 'hover:shadow-lg'
                  }`}
                >
                  <div className="relative h-24 bg-gray-200">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                    {booking.selectedVehicle?.id === vehicle.id && (
                      <div className="absolute top-2 right-2 bg-[#007A55] text-white rounded-full p-1">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  <div className={`p-3 ${booking.selectedVehicle?.id === vehicle.id ? 'bg-[#007A55] text-white' : 'bg-[#F4F5F7]'}`}>
                    <h4 className={`text-sm mb-1 ${booking.selectedVehicle?.id === vehicle.id ? 'text-white' : 'text-[#081E32]'}`}>
                      {vehicle.name}
                    </h4>
                    <p className={`text-xs mb-2 ${booking.selectedVehicle?.id === vehicle.id ? 'text-white/80' : 'text-gray-500'}`}>
                      {vehicle.description}
                    </p>
                    <div className="flex items-baseline space-x-1">
                      <span className={`text-xl ${booking.selectedVehicle?.id === vehicle.id ? 'text-white' : 'text-[#007A55]'}`}>
                        ${vehicle.price}
                      </span>
                      <span className={`text-xs ${booking.selectedVehicle?.id === vehicle.id ? 'text-white/70' : 'text-gray-500'}`}>
                        /day
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step 3: Complete Reservation */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentStep === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="h-full flex flex-col py-4">
            <div className="text-center flex-1 flex flex-col justify-start">
              <div className="w-16 h-16 bg-[#007A55]/10 rounded-full flex items-center justify-center mx-auto mb-3 flex-shrink-0">
                <Check className="w-8 h-8 text-[#007A55]" />
              </div>
              <h3 className="text-2xl text-[#081E32] mb-2">Ready to reserve!</h3>
              <p className="text-gray-600 mb-4 text-sm">Review your booking details</p>

              <div className="bg-[#F4F5F7] rounded-xl p-5 text-left max-w-md mx-auto space-y-2.5 w-full">
                <div className="flex items-center justify-between pb-2.5 border-b border-gray-300">
                  <span className="text-sm text-gray-600">Location</span>
                  <span className="text-[#081E32] text-sm">LAX Airport</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-gray-300">
                  <span className="text-sm text-gray-600">Duration</span>
                  <span className="text-[#081E32] text-sm">3 days</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-gray-300">
                  <span className="text-sm text-gray-600">Vehicle</span>
                  <span className="text-[#081E32] text-sm">
                    {booking.selectedVehicle?.name || 'Compact SUV'}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-gray-600">Total</span>
                  <span className="text-2xl text-[#007A55]">
                    ${(booking.selectedVehicle?.price || 69) * 3}
                  </span>
                </div>
              </div>

              <button className="mt-5 bg-[#007A55] text-white px-8 py-3 rounded-lg hover:bg-[#006644] transition-all shadow-lg mx-auto">
                Complete Reservation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg transition-all duration-300 ${
            currentStep === 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-[#007A55] hover:bg-[#007A55]/10'
          }`}
        >
          Back
        </button>
        
        <div className="flex items-center space-x-2">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              onClick={() => setCurrentStep(step)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-500 ${
                currentStep === step ? 'bg-[#007A55] w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentStep === 3}
          className={`px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
            currentStep === 3
              ? 'text-gray-300 cursor-not-allowed'
              : 'bg-[#007A55] text-white hover:bg-[#006644]'
          }`}
        >
          <span>Next</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
