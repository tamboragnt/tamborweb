import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import IntakeModal from '../components/IntakeModal';
import HowItWorksSection from '../components/home/HowItWorksSection';
import WhatYouGetSection from '../components/home/WhatYouGetSection';
import WhyTamborSection from '../components/home/WhyTamborSection';
import WhoItsForSection from '../components/home/WhoItsForSection';
import UseCasesSection from '../components/home/UseCasesSection';
import PricingSection from '../components/home/PricingSection';
import BespokeSection from '../components/home/BespokeSection';
import FaqSection from '../components/home/FaqSection';
import { ArrowRight, Eye } from 'lucide-react';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const howItWorksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...prev, index]);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-tambor-red opacity-10 rounded-full blur-3xl animate-float animate-morph" style={{ top: '20%', left: '10%' }}></div>
          <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-tambor-blue opacity-15 rounded-full blur-3xl animate-float animate-morph" style={{ top: '60%', right: '15%', animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className={`text-center transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Understand TikTok communities
              </span>
              <br />
              <span className="bg-gradient-to-r from-tambor-red to-tambor-red-light bg-clip-text text-transparent">
                without sacrificing your sanity.
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0 mb-6">
              Tambor tracks the weird, fast, glorious chaos of TikTok communities — so you don't have to doom-scroll your way to "insights."
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0 mb-6">
              See what's rising, what's dying, and what people actually care about... before your team or clients ask.
            </p>

            <p className="text-xl sm:text-2xl text-white font-bold mb-12">
              Daily. Clear. Zero guesswork.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://app.arcade.software/share/HHMueHhZ36D8kxqDKMWi"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-tambor-red to-tambor-red-light hover:from-tambor-red-dark hover:to-tambor-red text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-tambor-red/25 inline-flex items-center justify-center gap-3"
              >
                Show me how this works
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="https://beta.tambor.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 hover:border-white/60 backdrop-blur-sm text-white hover:bg-white/10 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-500 inline-flex items-center justify-center gap-3 mx-4 sm:mx-0"
              >
                Take me to the insights
                <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <HowItWorksSection
        ref={howItWorksRef}
        sectionRef={el => sectionRefs.current[0] = el}
        isVisible={visibleSections.includes(0)}
      />

      <WhatYouGetSection
        sectionRef={el => sectionRefs.current[1] = el}
        isVisible={visibleSections.includes(1)}
      />

      <WhyTamborSection
        sectionRef={el => sectionRefs.current[2] = el}
        isVisible={visibleSections.includes(2)}
      />

      <WhoItsForSection
        sectionRef={el => sectionRefs.current[3] = el}
        isVisible={visibleSections.includes(3)}
      />

      <UseCasesSection
        sectionRef={el => sectionRefs.current[4] = el}
        isVisible={visibleSections.includes(4)}
      />

      <PricingSection
        sectionRef={el => sectionRefs.current[5] = el}
        isVisible={visibleSections.includes(5)}
      />

      <BespokeSection
        sectionRef={el => sectionRefs.current[6] = el}
        isVisible={visibleSections.includes(6)}
      />

      <FaqSection
        sectionRef={el => sectionRefs.current[7] = el}
        isVisible={visibleSections.includes(7)}
      />

      {/* Closing CTA Section */}
      <div
        ref={el => sectionRefs.current[8] = el}
        className={`bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy py-24 lg:py-32 relative overflow-hidden animate-gradient-shift transition-all duration-1000 ${
          visibleSections.includes(8) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="absolute inset-0">
          <div className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-tambor-red opacity-10 rounded-full blur-3xl top-20 right-20 animate-float animate-morph"></div>
          <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-tambor-blue opacity-15 rounded-full blur-3xl bottom-20 left-20 animate-float animate-morph" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center px-6 lg:px-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            TikTok communities, decoded.
            <br />
            <span className="bg-gradient-to-r from-tambor-red to-tambor-red-light bg-clip-text text-transparent">
              Daily. Clear. Zero guesswork.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-white/80 mb-12 lg:mb-16 leading-relaxed font-light max-w-3xl mx-auto px-4 sm:px-0">
            Stop doom-scrolling. Start knowing.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://beta.tambor.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-tambor-red to-tambor-red-light hover:from-tambor-red-dark hover:to-tambor-red text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-tambor-red/25 inline-flex items-center justify-center gap-3 mx-4 sm:mx-0"
            >
              Get Access
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="https://app.arcade.software/share/HHMueHhZ36D8kxqDKMWi"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 hover:border-white/60 backdrop-blur-sm text-white hover:bg-white/10 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-500 inline-flex items-center justify-center gap-3 mx-4 sm:mx-0"
            >
              Show me how this works
              <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60">
              <Link to="/" className="hover:text-white transition-colors duration-300 font-medium">Home</Link>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <Link to="/about" className="hover:text-white transition-colors duration-300 font-medium">About Us</Link>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <Link to="/weekly-insights" className="hover:text-white transition-colors duration-300 font-medium">Weekly Insights</Link>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <Link to="/legal" className="hover:text-white transition-colors duration-300 font-medium">Legal</Link>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <a href="mailto:legal@tambor.ai" className="hover:text-white transition-colors duration-300 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>

      <IntakeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default HomePage;
