import {
  Target,
  Globe,
  TrendingUp,
  BarChart3,
  Users,
  Brain,
} from 'lucide-react';

interface Props {
  sectionRef: (el: HTMLDivElement | null) => void;
  isVisible: boolean;
}

const audiences = [
  { title: 'Brand & creative strategists', icon: Target },
  { title: 'Social strategists', icon: Globe },
  { title: 'Trend/culture teams', icon: TrendingUp },
  { title: 'Category marketers', icon: BarChart3 },
  { title: 'Agencies pitching Gen Z work', icon: Users },
  { title: 'Analysts feeding insight into internal models', icon: Brain },
];

function WhoItsForSection({ sectionRef, isVisible }: Props) {
  return (
    <div
      ref={sectionRef}
      className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-4 leading-tight px-4 sm:px-0">
          Who It's{' '}
          <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
            For
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
          For anyone who needs to make sense of culture quickly
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {audiences.map((audience, index) => (
          <div key={index} className="group">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-tambor-blue/5 to-tambor-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tambor-blue to-tambor-blue-light flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                  <audience.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-tambor-navy group-hover:text-tambor-blue transition-colors duration-300">
                  {audience.title}
                </h3>
              </div>

              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-lg sm:text-xl text-gray-700 font-semibold">
          If TikTok shapes your category — this is the tool.
        </p>
      </div>
    </div>
  );
}

export default WhoItsForSection;
