import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import IntakeModal from '../components/IntakeModal';
import { 
  ArrowRight, 
  Eye, 
  Brain, 
  Users, 
  Target, 
  TrendingUp, 
  MessageSquare, 
  BarChart3, 
  Clock, 
  Database, 
  FileText, 
  Zap, 
  CheckCircle, 
  Star, 
  Quote,
  Building,
  Rocket,
  Heart,
  Newspaper,
  Scale,
  Search,
  Shield,
  Network,
  Activity,
  Lightbulb,
  Calendar,
  Settings,
  Award,
  Globe,
  Mail,
  Phone
} from 'lucide-react';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Intersection Observer for section animations
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy py-16 lg:py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-tambor-red opacity-10 rounded-full blur-3xl animate-float animate-morph" style={{ top: '20%', left: '10%' }}></div>
          <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-tambor-blue opacity-15 rounded-full blur-3xl animate-float animate-morph" style={{ top: '60%', right: '15%', animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className={`text-center transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                AI Powered
              </span>
              <br />
              <span className="bg-gradient-to-r from-tambor-red to-tambor-red-light bg-clip-text text-transparent">
                Audience Insights
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0 mb-12">
              Unlock the conversational shifts and customer signals that shape culture and decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={openModal}
                className="group bg-gradient-to-r from-tambor-red to-tambor-red-light hover:from-tambor-red-dark hover:to-tambor-red text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-tambor-red/25 inline-flex items-center justify-center gap-3"
              >
                Unlock Your Insights
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a 
                href="https://calendar.app.google/V8jJejYGj15k7rZC7"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 hover:border-white/60 backdrop-blur-sm text-white hover:bg-white/10 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-500 inline-flex items-center justify-center gap-3 mx-4 sm:mx-0"
              >
                Schedule a Demo
                <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      
      {/* Your Audience Insights Engine Section */}
      <div 
        ref={el => sectionRefs.current[5] = el}
        className={`bg-gray-50 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              Your Audience 
              <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift ml-2">
                Insights Engine
              </span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl border border-gray-100 mb-16">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tambor-blue to-tambor-red flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                We designed a 3-month sprint to develop your company's AI-powered Insights Engine. Tambor acts as your fractional insights team.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                Together, we set up where your audience conversations are collected, a simple way to engage with the data, and easy guides that show you how to use the insights in practice.
              </p>
              
              <div className="bg-gradient-to-r from-tambor-red/10 to-tambor-blue/10 rounded-2xl p-8 border border-tambor-red/20">
                <p className="text-lg font-semibold text-tambor-navy">
                  <strong>Outcome:</strong> By month 3, you have a sustainable Audience Insight Engine powered by Tambor's software platform — included are automated refreshes, tailored workflows, and clear playbooks your team can run.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Tambor Section */}
      <div 
        ref={el => sectionRefs.current[0] = el}
        className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            Why 
            <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift ml-2">
              Tambor
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            Traditional research is slow, biased, and expensive. Tambor is built for speed, scale, and flexibility.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-16">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-tambor-navy to-tambor-blue-dark text-white">
                  <th className="px-6 py-6 text-left text-lg font-bold">Category</th>
                  <th className="px-6 py-6 text-left text-lg font-bold">Traditional Research</th>
                  <th className="px-6 py-6 text-left text-lg font-bold">Tambor Audience Insights Engine</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    category: "Timeframe",
                    traditional: "3–6 months",
                    tambor: "1–2 days to first insight; weekly updates",
                    icon: Clock
                  },
                  {
                    category: "Audience Size",
                    traditional: "10–1,000 participants",
                    tambor: "250,000+ profiles across 20+ platforms",
                    icon: Users
                  },
                  {
                    category: "Data",
                    traditional: "Panels & surveys (biased, limited)",
                    tambor: "Observed behavior across Reddit, TikTok, YouTube, Telegram & more",
                    icon: Database
                  },
                  {
                    category: "Freshness",
                    traditional: "Fixed at study",
                    tambor: "Always current, automated datasets",
                    icon: Activity
                  },
                  {
                    category: "Deliverables",
                    traditional: "Static PDFs & decks",
                    tambor: "Bespoke, evolving insights tied to your goals",
                    icon: FileText
                  }
                ].map((row, index) => (
                  <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} hover:bg-tambor-blue/5 transition-colors duration-300`}>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tambor-blue to-tambor-red flex items-center justify-center">
                          <row.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-tambor-navy">{row.category}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-gray-600">{row.traditional}</td>
                    <td className="px-6 py-6">
                      <span className="text-tambor-red font-semibold">{row.tambor}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg sm:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-4 sm:px-0">
            By deeply understanding psychographics, surfacing narratives and opportunities, and uncovering surprising audience overlaps, we help you see what traditional methods miss — at a fraction of the cost of traditional research.
          </p>
        </div>
      </div>

      {/* Who We Service Section */}
      <div 
        ref={el => sectionRefs.current[1] = el}
        className={`bg-gray-50 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              Who We 
              <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift ml-2">
                Service
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "Agencies",
                description: "Pitching new clients, pressure-testing creative, sharpening campaign strategy, ongoing insights.",
                icon: Building,
                color: "tambor-blue"
              },
              {
                title: "Startups",
                description: "Validating markets and messaging before launch and shaping product positioning from real audience signals.",
                icon: Rocket,
                color: "tambor-red"
              },
              {
                title: "Nonprofits & Advocacy Groups",
                description: "Understanding donor communities, testing narratives, spotting risks.",
                icon: Heart,
                color: "tambor-navy"
              },
              {
                title: "Media & Creative Teams",
                description: "Tracking cultural shifts, finding the language and stories that resonate.",
                icon: Newspaper,
                color: "tambor-blue-dark"
              },
              {
                title: "Policy & Research Orgs",
                description: "Surfacing narrative fractures, monitoring fringe conversations and communities.",
                icon: Scale,
                color: "tambor-red-light"
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 to-${service.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color} to-${service.color === 'tambor-blue' ? 'tambor-blue-light' : service.color === 'tambor-red' ? 'tambor-red-light' : service.color === 'tambor-navy' ? 'tambor-blue-dark' : service.color === 'tambor-blue-dark' ? 'tambor-blue' : 'tambor-red'} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-tambor-navy mb-4 group-hover:text-tambor-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div 
        ref={el => sectionRefs.current[2] = el}
        className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            Use 
            <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift ml-2">
              Cases
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {[
            {
              title: "Understand audiences deeply",
              description: "psychographics, personas, overlaps, and unmet needs",
              icon: Brain,
              color: "tambor-blue"
            },
            {
              title: "Validate & de-risk campaigns",
              description: "test messaging and creative before launch",
              icon: Shield,
              color: "tambor-red"
            },
            {
              title: "Track culture & competitors",
              description: "monitor narratives, trends, and competitor activity",
              icon: TrendingUp,
              color: "tambor-navy"
            },
            {
              title: "Find influencers & opportunities",
              description: "identify voices, media outlets, and partnership opportunities",
              icon: Search,
              color: "tambor-blue-dark"
            },
            {
              title: "Identify niche cultural groups",
              description: "create replicas of fringe cultural groups",
              icon: Network,
              color: "tambor-red-light"
            }
          ].map((useCase, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br from-${useCase.color}/5 to-${useCase.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex items-start gap-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${useCase.color} to-${useCase.color === 'tambor-blue' ? 'tambor-blue-light' : useCase.color === 'tambor-red' ? 'tambor-red-light' : useCase.color === 'tambor-navy' ? 'tambor-blue-dark' : useCase.color === 'tambor-blue-dark' ? 'tambor-blue' : 'tambor-red'} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <useCase.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-tambor-navy mb-2 group-hover:text-tambor-blue transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Our Clients Say Section */}
      <div 
        ref={el => sectionRefs.current[3] = el}
        className={`bg-gray-50 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              What Our Clients 
              <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift ml-2">
                Say
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                quote: "Tambor allowed us to nail the launch of a new product to our ecosystem. As an agile product studio, we see immense value in their digital twins.",
                author: "Senior PM, Digital Agency",
                color: "tambor-blue"
              },
              {
                quote: "Tambor helped us nail our message and drove engagement up on our posts by over 110%. We highly recommend working with them.",
                author: "Marketing Lead, Tech Startup",
                color: "tambor-red"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${testimonial.color}/5 to-${testimonial.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${testimonial.color} to-${testimonial.color === 'tambor-blue' ? 'tambor-blue-light' : 'tambor-red-light'} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    
                    <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 text-${testimonial.color} fill-current`} />
                        ))}
                      </div>
                      <span className="text-gray-600 font-medium">— {testimonial.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div 
        ref={el => sectionRefs.current[4] = el}
        className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            Who We 
            <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift ml-2">
              Are
            </span>
          </h2>
        </div>

        <div className="bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden animate-gradient-shift">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-morph"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl animate-morph" style={{ animationDelay: '3s' }}></div>
          
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8 mx-auto">
              <Users className="w-10 h-10 text-white" />
            </div>
            
            <p className="text-lg sm:text-xl leading-relaxed mb-8">
              We're a team of culture strategists, technologists, and researchers. Together we've built Tambor to democratize access to enterprise-grade audience intelligence — giving small and mid-sized teams the same depth of insight as the big players, without the cost or complexity.
            </p>
            
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Our work has powered research, sales, marketing and product strategy for global nonprofits, political movements, consumer brands, and media organizations — with experience spanning projects linked to the UN, Meta, Google, Discovery+ and Fortune 500 brands.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div 
        ref={el => sectionRefs.current[6] = el}
        className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            How It 
            <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift ml-2">
              Works
            </span>
          </h2>
        </div>

        <div className="space-y-12">
          {[
            {
              month: "Month 1",
              title: "Discovery & Integration",
              activities: [
                "Kickoff call to align on goals and success measures",
                "Initial audience intelligence profiles (psychographics, affinities, influencers, motivators)",
                "Setup of 1–2 listening datasets (Reddit, TikTok/YouTube comments, Telegram, Quora, etc.)"
              ],
              outputs: "Baseline profiles, live datasets, clear audience landscape map",
              icon: Search,
              color: "tambor-blue"
            },
            {
              month: "Month 2",
              title: "Co-Creation & Optimization",
              activities: [
                "Narrative Opportunity Report (top narratives, their size and momentum)",
                "Dashboard setup with Digital Twins + Research Assistant",
                "Workflow playbooks with step-by-step guidance",
                "Automation sprint to begin auto-refreshing reports"
              ],
              outputs: "Narrative reports, workflow playbooks, live dashboard, automated refreshes",
              icon: Settings,
              color: "tambor-red"
            },
            {
              month: "Month 3",
              title: "Expansion & Evolution",
              activities: [
                "Integrated Strategic Report (synthesis tying together Profiles, Datasets, Reports)",
                "Updated workflow playbooks",
                "Automation hand-off to client team"
              ],
              outputs: "Integrated strategy roadmap, refined playbooks, automated reporting ready for handover",
              icon: Award,
              color: "tambor-navy"
            }
          ].map((phase, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br from-${phase.color}/5 to-${phase.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${phase.color} to-${phase.color === 'tambor-blue' ? 'tambor-blue-light' : phase.color === 'tambor-red' ? 'tambor-red-light' : 'tambor-blue-dark'} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-tambor-navy group-hover:text-tambor-blue transition-colors duration-300">
                        {phase.month}: {phase.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-tambor-navy mb-4">Key Activities</h4>
                      <ul className="space-y-3">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 text-${phase.color} mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-600 leading-relaxed">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-tambor-navy mb-4">Outputs</h4>
                      <div className={`bg-${phase.color}/10 rounded-2xl p-6 border border-${phase.color}/20`}>
                        <p className="text-gray-700 leading-relaxed">{phase.outputs}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What's Included Section */}
      <div 
        ref={el => sectionRefs.current[7] = el}
        className={`bg-gray-50 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              What's Included in the
              <br />
              <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift ml-2">
                Audience Insights Engine
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
              Each engagement gives you access to tools and delivers practical outputs:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tools */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tambor-blue to-tambor-blue-light flex items-center justify-center shadow-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-tambor-navy">Tools</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Audience intelligence",
                    description: "detailed psychographics, affinities, and purchase motivators that reveal what really drives your audience",
                    icon: Brain
                  },
                  {
                    title: "Social listening datasets",
                    description: "filtered conversations from Reddit, TikTok, YouTube, Telegram and more, showing authentic audience language and trends",
                    icon: MessageSquare
                  },
                  {
                    title: "Tambor Dashboard",
                    description: "your access point to Digital Twins (living audience models) and the Research Assistant, so you can interact with the data in plain language",
                    icon: BarChart3
                  },
                  {
                    title: "Research Agents + automation tools",
                    description: "surface emerging narratives and set up automated refreshes so insights never go stale",
                    icon: Zap
                  }
                ].map((tool, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-tambor-blue/10 flex items-center justify-center flex-shrink-0">
                        <tool.icon className="w-5 h-5 text-tambor-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-tambor-navy mb-2">{tool.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outputs */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tambor-red to-tambor-red-light flex items-center justify-center shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-tambor-navy">Outputs</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Audience intelligence profiles",
                    description: "breakdowns of affinities, psychographics, influencers, and purchase motivators to ground strategy in real behavior",
                    icon: Users
                  },
                  {
                    title: "Narrative Opportunity Reports",
                    description: "analysis of which stories, themes, and issues are gaining traction, and where your brand or campaign can enter",
                    icon: TrendingUp
                  },
                  {
                    title: "Digital Twins",
                    description: "chat-based models of your audience segments, trained on real conversations across 20+ platforms, so you can research, validate ideas, and explore tone in first person",
                    icon: Brain
                  },
                  {
                    title: "Research Assistant",
                    description: "an AI partner that guides you through the data, suggests useful questions to ask, and surfaces trends or blind spots you might otherwise miss",
                    icon: Lightbulb
                  },
                  {
                    title: "Workflow Playbooks",
                    description: "step-by-step guides that show your team how to get repeatable insights from the tools and datasets set up during the program",
                    icon: FileText
                  },
                  {
                    title: "Integrated Strategic Report",
                    description: "a final synthesis document tying together profiles, datasets, narratives, and performance mapping into a strategic roadmap for future action",
                    icon: Target
                  }
                ].map((output, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-tambor-red/10 flex items-center justify-center flex-shrink-0">
                        <output.icon className="w-5 h-5 text-tambor-red" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-tambor-navy mb-2">{output.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{output.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bespoke Engagements Section */}
      <div 
        ref={el => sectionRefs.current[8] = el}
        className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(8) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            Bespoke 
            <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift ml-2">
              Engagements
            </span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl border border-gray-100">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Need something outside the Audience Insights Engine? We also deliver bespoke engagements — deeper dives, custom or off the shelf datasets, or tailored workflows for specific challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Crisis response and disinformation monitoring",
              "Political and advocacy strategy support", 
              "Cultural mapping and trend validation for new markets",
              "Custom segment builds or data integrations",
              "Ongoing insight services"
            ].map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-tambor-navy/5 to-tambor-blue/5 rounded-2xl p-6 border border-tambor-navy/10">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-tambor-red flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div 
        ref={el => sectionRefs.current[9] = el}
        className={`bg-gray-50 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(9) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
                Pricing
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Main Offering */}
            <div className="bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy rounded-3xl p-12 text-white relative overflow-hidden animate-gradient-shift">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-morph"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Audience Insights Engine</h3>
                <p className="text-white/80 mb-6">(3 Months)</p>
                
                <p className="text-lg leading-relaxed mb-8">
                  Get in touch with our team to discuss pricing and how to get started. After your AI-powered Insights Engine is built, we can provide different service options to support your organization's needs. For example, we can stay on board as your outsourced audience insights team or help you train and hire your in-house staff.
                </p>
                
                <a 
                  href="https://calendar.app.google/zCyYbdJRyBW2vq6j8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-tambor-red hover:bg-tambor-red-dark text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Service Options */}
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-tambor-navy mb-6">Our Service Options Include:</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Bespoke Output (weekly or biweekly reports)",
                    description: "tailored insight reports delivered on a regular cadence formatted to your specification."
                  },
                  {
                    title: "Dashboard Access (managed service)",
                    description: "ongoing access to your audience research assistant and digital twin dashboard with updates handled for you."
                  },
                  {
                    title: "Ongoing Account Manager / Success Partner",
                    description: "a dedicated partner to guide questions, interpret insights, and keep outputs aligned."
                  },
                  {
                    title: "Advisory Retainer",
                    description: "continued strategic support tailored to evolving campaigns and audiences."
                  }
                ].map((service, index) => (
                  <div key={index} className="border-l-4 border-tambor-blue pl-6 py-2">
                    <h4 className="font-semibold text-tambor-navy mb-1">{service.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing CTA Section */}
      <div 
        ref={el => sectionRefs.current[10] = el}
        className={`bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy py-24 lg:py-32 relative overflow-hidden animate-gradient-shift transition-all duration-1000 ${
          visibleSections.includes(10) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-tambor-red opacity-10 rounded-full blur-3xl top-20 right-20 animate-float animate-morph"></div>
          <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-tambor-blue opacity-15 rounded-full blur-3xl bottom-20 left-20 animate-float animate-morph" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center px-6 lg:px-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            Digital Twins. Research Agents.
            <br />
            <span className="bg-gradient-to-r from-tambor-red to-tambor-red-light bg-clip-text text-transparent">
              Real voices. All in one place.
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 mb-4 leading-relaxed font-light max-w-3xl mx-auto px-4 sm:px-0">
            Ready to get started?
          </p>
          
          <p className="text-lg sm:text-xl text-white/80 mb-12 lg:mb-16 leading-relaxed font-light max-w-4xl mx-auto px-4 sm:px-0">
            Join leading brands who've replaced guesswork with AI-powered insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={openModal}
              className="group bg-gradient-to-r from-tambor-red to-tambor-red-light hover:from-tambor-red-dark hover:to-tambor-red text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-tambor-red/25 inline-flex items-center justify-center gap-3 mx-4 sm:mx-0"
            >
              Start Your Insights Engine
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white/30 hover:border-white/60 backdrop-blur-sm text-white hover:bg-white/10 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-500 inline-flex items-center justify-center gap-3 mx-4 sm:mx-0">
              Schedule a Demo
              <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
          
          {/* Footer Links */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60">
              <Link 
                to="/" 
                className="hover:text-white transition-colors duration-300 font-medium"
              >
                Home
              </Link>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <Link 
                to="/about" 
                className="hover:text-white transition-colors duration-300 font-medium"
              >
                About Us
              </Link>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <Link 
                to="/weekly-insights" 
                className="hover:text-white transition-colors duration-300 font-medium"
              >
                Weekly Insights
              </Link>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <Link 
                to="/legal" 
                className="hover:text-white transition-colors duration-300 font-medium"
              >
                Legal
              </Link>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <a 
                href="mailto:legal@tambor.ai" 
                className="hover:text-white transition-colors duration-300 font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Intake Modal */}
      <IntakeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default HomePage;