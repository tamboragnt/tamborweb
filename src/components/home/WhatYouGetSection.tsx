import {
  BarChart3,
  FileText,
  Bot,
  CheckCircle,
  MessageSquare,
  Brain,
  TrendingUp,
  Target,
  Zap,
  Lightbulb,
} from 'lucide-react';

interface Props {
  sectionRef: (el: HTMLDivElement | null) => void;
  isVisible: boolean;
}

const unlockFeatures = [
  {
    title: 'Daily-updated dashboard',
    description: "Showing exactly what your audience is doing, saying, loving, hating, creating, and shifting toward.",
    icon: BarChart3,
  },
  {
    title: 'Weekly "State of the Tok" Digest',
    description: "What's rising, what's slowing, what's shifting, and what to pay attention to next.",
    icon: FileText,
  },
  {
    title: 'Specialized chat bot',
    description: "Trained specifically on that audience's psychographics, behaviors, creator ecosystem, language patterns, and cultural context.",
    icon: Bot,
  },
];

const botCapabilities = [
  { text: 'Explain insights in plain English', icon: MessageSquare },
  { text: 'Answer any question you throw at it', icon: Brain },
  { text: 'Pull new data points and create reports on command', icon: TrendingUp },
  { text: 'Break down why something is trending', icon: Target },
  { text: 'Translate chaos into strategy', icon: Zap },
  { text: 'Help you craft creative + campaigns that actually land', icon: Lightbulb },
];

function WhatYouGetSection({ sectionRef, isVisible }: Props) {
  return (
    <div
      ref={sectionRef}
      className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-4 leading-tight px-4 sm:px-0">
          What You{' '}
          <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
            Get
          </span>
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-tambor-navy/80 mb-6 px-4 sm:px-0">
          A Marketplace of Audiences —
          <br className="hidden sm:block" />
          Pick Yours, Get Instant Cultural Superpowers
        </h3>
        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
          Tambor isn't "one dashboard." It's a whole marketplace of TikTok audiences — each one with its own brain.
        </p>
      </div>

      <div className="space-y-12">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 relative overflow-hidden">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-tambor-blue to-tambor-blue-light flex items-center justify-center shadow-xl">
              <span className="text-xl font-black text-white">1</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-tambor-navy">Choose your audiences</h4>
          </div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Choose the audiences you care about (BeautyTok, MoneyTok, BookTok, etc.). Pick one or stack a handful. New audiences will be added regularly and you can always add more to your profile.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 relative overflow-hidden">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-tambor-red to-tambor-red-light flex items-center justify-center shadow-xl">
              <span className="text-xl font-black text-white">2</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-tambor-navy">The moment you choose them, you unlock:</h4>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {unlockFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tambor-blue to-tambor-red flex items-center justify-center shadow-lg mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-lg font-bold text-tambor-navy mb-2">{feature.title}</h5>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8 mt-10 items-center">
            <div className="lg:col-span-3 bg-gradient-to-r from-tambor-navy/5 to-tambor-blue/5 rounded-2xl p-8 border border-tambor-navy/10">
              <h5 className="text-lg sm:text-xl font-bold text-tambor-navy mb-6">Your audience's bot can:</h5>
              <div className="grid sm:grid-cols-2 gap-4">
                {botCapabilities.map((cap, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-tambor-red flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{cap.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 group relative lg:translate-y-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-tambor-blue/20 to-tambor-red/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy rounded-2xl p-2 shadow-2xl overflow-hidden">
                <img
                  src="/INTEL.png"
                  alt="Tambor Cultural Intelligence dashboard showing AI Daily Brief, tactical advice, and audience engagement metrics"
                  className="w-full rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-tambor-red/10 to-tambor-blue/10 rounded-2xl p-8 border border-tambor-red/20 max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl text-tambor-navy font-semibold leading-relaxed">
            This isn't generic AI. This is having the expert on that audience sitting next to you — every day.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatYouGetSection;
