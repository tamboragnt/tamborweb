import { CheckCircle, ArrowRight } from 'lucide-react';

interface Props {
  sectionRef: (el: HTMLDivElement | null) => void;
  isVisible: boolean;
}

const services = [
  'Category deep dives',
  'Campaign opportunity scans',
  'Audience segmentation',
  'Competitive cultural mapping',
  'Custom platform builds',
];

function BespokeSection({ sectionRef, isVisible }: Props) {
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
            Bespoke{' '}
            <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            For teams who want deeper cultural excavation
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 lg:p-14 shadow-2xl border border-gray-100">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-tambor-navy/5 to-tambor-blue/5 rounded-2xl p-6 border border-tambor-navy/10">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-tambor-red flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://calendar.app.google/zCyYbdJRyBW2vq6j8"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-tambor-red to-tambor-red-light hover:from-tambor-red-dark hover:to-tambor-red text-white px-10 py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-tambor-red/25 inline-flex items-center justify-center gap-3"
            >
              Let's talk
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BespokeSection;
