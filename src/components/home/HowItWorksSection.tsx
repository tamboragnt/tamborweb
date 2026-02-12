import { forwardRef } from 'react';
import {
  TrendingUp,
  Flame,
  MessageSquare,
  Copy,
  Activity,
  Layout,
  Eye,
  Bot,
  CheckCircle,
} from 'lucide-react';

interface Props {
  sectionRef: (el: HTMLDivElement | null) => void;
  isVisible: boolean;
}

const breakdownItems = [
  { text: 'What topics are blowing up', icon: TrendingUp },
  { text: 'Which creators are heating up', icon: Flame },
  { text: 'What narratives are forming', icon: MessageSquare },
  { text: 'What formats people are copying', icon: Copy },
  { text: "What's shifting, fading, or about to explode", icon: Activity },
];

const steps = [
  { number: '1', label: 'Open a workspace.', icon: Layout },
  { number: '2', label: 'See what changed today.', icon: Eye },
  { number: '3', label: 'Ask your "audience expert" bot anything.', icon: Bot },
  { number: null, label: 'Boom — clarity without the chaos.', icon: CheckCircle },
];

const HowItWorksSection = forwardRef<HTMLDivElement, Props>(({ sectionRef, isVisible }, ref) => {
  return (
    <div ref={ref}>
      <div
        ref={sectionRef}
        className={`bg-gray-50 py-24 lg:py-32 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-4 leading-tight px-4 sm:px-0">
              How It{' '}
              <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
                Works
              </span>
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-tambor-navy/80 mb-8 px-4 sm:px-0">
              Track the{' '}
              <span className="bg-gradient-to-r from-tambor-red to-tambor-red-light bg-clip-text text-transparent">
                Tok Multiverse
              </span>
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                  TikTok is split into ecosystems — BeautyTok, CleanTok, MoneyTok, FoodTok, Gaming, SkincareTok, all the Toks you pretend to know but definitely don't track daily.
                </p>

                <p className="text-lg sm:text-xl text-tambor-navy font-semibold mb-6">
                  Tambor watches them for you. Every day, we break down:
                </p>

                <div className="space-y-4 mb-10">
                  {breakdownItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tambor-red to-tambor-red-light flex items-center justify-center shadow-lg flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-base sm:text-lg text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-tambor-red/10 to-tambor-blue/10 rounded-2xl p-6 border border-tambor-red/20">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Tambor synthesizes video transcripts, captions, comment conversations, hashtag patterns, and engagement metrics (views + likes) into cultural intelligence you can actually use.
                  </p>
                </div>
              </div>

              <div className="group relative lg:-translate-y-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-tambor-blue/20 to-tambor-red/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy rounded-2xl p-2 shadow-2xl overflow-hidden">
                  <img
                    src="/TrendingHT.png"
                    alt="Tambor Trending Hashtags view showing hashtag analytics, sentiment breakdowns, and creator archetypes"
                    className="w-full rounded-xl transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100 text-center h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-tambor-blue/5 to-tambor-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {step.number ? (
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tambor-blue to-tambor-blue-light flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <span className="text-2xl font-black text-white">{step.number}</span>
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tambor-red to-tambor-red-light flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                    )}

                    <p className="text-base sm:text-lg font-semibold text-tambor-navy group-hover:text-tambor-blue transition-colors duration-300">
                      {step.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

HowItWorksSection.displayName = 'HowItWorksSection';

export default HowItWorksSection;
