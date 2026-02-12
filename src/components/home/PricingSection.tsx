import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

interface Props {
  sectionRef: (el: HTMLDivElement | null) => void;
  isVisible: boolean;
}

const includedItems = [
  'All workspaces',
  'Daily updates',
  'Research packs',
  'Weekly summaries',
  'Unlimited questions',
  'Unlimited team seats',
];

function PricingSection({ sectionRef, isVisible }: Props) {
  return (
    <div
      ref={sectionRef}
      className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
          <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
            Pricing
          </span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy rounded-3xl p-10 lg:p-14 text-white relative overflow-hidden animate-gradient-shift">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-morph"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl animate-morph" style={{ animationDelay: '3s' }}></div>

          <div className="relative z-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8 mx-auto">
              <Zap className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-3">One subscription. Every community.</h3>
            <p className="text-xl sm:text-2xl font-bold text-tambor-red-light mb-10">Daily insights.</p>

            <div className="text-left max-w-sm mx-auto mb-10">
              <p className="text-white/80 font-semibold mb-4 text-center">You get:</p>
              <div className="space-y-4">
                {includedItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-tambor-red-light flex-shrink-0" />
                    <span className="text-white/90 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://beta.tambor.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-tambor-red to-tambor-red-light hover:from-tambor-red-dark hover:to-tambor-red text-white px-10 py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-tambor-red/25 inline-flex items-center justify-center gap-3"
            >
              Get Access
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
