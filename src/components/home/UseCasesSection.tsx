import {
  TrendingUp,
  MessageSquare,
  Globe,
  Users,
  Shield,
  Zap,
  FileText,
  Brain,
} from 'lucide-react';

interface Props {
  sectionRef: (el: HTMLDivElement | null) => void;
  isVisible: boolean;
}

const useCases = [
  { title: 'Spot category trends before they break', icon: TrendingUp },
  { title: 'Understand what tones + formats actually resonate', icon: MessageSquare },
  { title: 'Track BeautyTok, MoneyTok, FoodTok (and the rest of the Tok multiverse)', icon: Globe },
  { title: 'Map creator ecosystems for campaigns', icon: Users },
  { title: 'Validate creative or strategic directions', icon: Shield },
  { title: 'Replace frantic scrolling + spreadsheets + chaotic decks', icon: Zap },
  { title: 'Make reporting easy', icon: FileText },
  { title: 'Feed clean structured cultural insight into your own LLMs', icon: Brain },
];

function UseCasesSection({ sectionRef, isVisible }: Props) {
  return (
    <div
      ref={sectionRef}
      className={`bg-gray-50 py-24 lg:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-4 leading-tight px-4 sm:px-0">
            Use{' '}
            <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
              Cases
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            Use Tambor to:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tambor-blue/5 to-tambor-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tambor-blue to-tambor-red flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-tambor-navy group-hover:text-tambor-blue transition-colors duration-300">
                    {useCase.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UseCasesSection;
