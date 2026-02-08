import {
  Zap,
  Users,
  Clock,
  Shield,
  Target,
  CheckCircle,
} from 'lucide-react';

interface Props {
  sectionRef: (el: HTMLDivElement | null) => void;
  isVisible: boolean;
}

const differentiators = [
  {
    title: 'TikTok-first',
    description: 'Not an afterthought bolted onto legacy tools.',
    icon: Zap,
  },
  {
    title: 'Tracks communities, not brand mentions',
    description: 'Real cultural ecosystems, not vanity metrics.',
    icon: Users,
  },
  {
    title: 'Daily updates',
    description: 'Fresh intelligence every 24 hours.',
    icon: Clock,
  },
  {
    title: 'Legally sourced public data',
    description: 'All sourcing handled externally and legally.',
    icon: Shield,
  },
  {
    title: 'Built for strategists + creatives',
    description: 'Outputs designed for people, not engineers.',
    icon: Target,
  },
  {
    title: 'No noise. No guesswork.',
    description: 'Clear cultural truth.',
    icon: CheckCircle,
  },
];

function WhyTamborSection({ sectionRef, isVisible }: Props) {
  return (
    <div
      ref={sectionRef}
      className={`bg-gray-50 py-24 lg:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            Why{' '}
            <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
              Tambor
            </span>
          </h2>
        </div>

        <div className="bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden mb-16 animate-gradient-shift">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-morph"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl animate-morph" style={{ animationDelay: '3s' }}></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed">
              Tambor isn't a dashboard. Isn't a scraper.
              <br />
              Isn't a generic LLM hallucinating its way through TikTok.
            </p>
            <p className="text-lg sm:text-xl text-white/80 mt-6 leading-relaxed font-light">
              We're the only tool built for cultural intelligence on TikTok itself — the real communities, creators, formats, and narratives that drive the platform.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-tambor-navy">Why teams choose Tambor:</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-tambor-blue/5 to-tambor-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tambor-blue to-tambor-red flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-tambor-navy mb-2 group-hover:text-tambor-blue transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyTamborSection;
