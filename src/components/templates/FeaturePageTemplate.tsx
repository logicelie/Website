import { Check, XCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Link } from '../Router';

interface FeaturePageProps {
  hero: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
  };
  painPoints: string[];
  solutions: string[];
  howItWorks: { step: number; title: string; description: string }[];
  benefits: { metric: string; label: string }[];
  mockupImage: string;
}

export function FeaturePageTemplate({ hero, painPoints, solutions, howItWorks, benefits, mockupImage }: FeaturePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#007A55] flex items-center justify-center text-white mb-6">
                {hero.icon}
              </div>
              <h1 className="text-white mb-6">{hero.title}</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {hero.subtitle}
              </p>
              <div className="mt-8">
                <button className="bg-[#007A55] text-white px-8 py-4 rounded hover:bg-[#006644] transition-colors">
                  Book a Demo
                </button>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <ImageWithFallback
                src={mockupImage}
                alt={hero.title}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points vs Solutions */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pain Points */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-[#081E32] mb-6 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-600" />
                Current Pain Points
              </h3>
              <div className="space-y-4">
                {painPoints.map((pain, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{pain}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#007A55] shadow-lg">
              <h3 className="text-[#081E32] mb-6 flex items-center gap-3">
                <Check className="w-6 h-6 text-[#007A55]" />
                How RentWorks Solves This
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#007A55] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#081E32] mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#007A55] flex items-center justify-center text-white text-2xl mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-[#081E32] mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200">
                    <ArrowRight className="absolute -right-2 -top-2.5 w-5 h-5 text-[#007A55]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#081E32] mb-4">Key Benefits</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#007A55] hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl text-[#007A55] mb-2">{benefit.metric}</div>
                <div className="text-gray-700">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#081E32] to-[#0a2640] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Experience {hero.title}?</h2>
          <p className="text-xl text-gray-300 mb-8">
            See it in action with a personalized demo tailored to your business needs.
          </p>
          <button className="bg-[#007A55] text-white px-10 py-5 rounded hover:bg-[#006644] transition-colors text-lg">
            Schedule Your Demo
          </button>
        </div>
      </section>
    </div>
  );
}
