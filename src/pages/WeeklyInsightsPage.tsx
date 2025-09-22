import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import IntakeModal from '../components/IntakeModal';
import { 
  ArrowLeft, 
  Mail, 
  TrendingUp, 
  Brain, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Eye, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Target,
  Lightbulb,
  Activity,
  Globe,
  Clock,
  Sparkles,
  Database,
  Network,
  Filter,
  Search
} from 'lucide-react';

function WeeklyInsightsPage() {
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

  const narrativeExamples = [
    {
      title: "The Rise of 'Soft Life' Philosophy",
      metric: "347% increase in mentions",
      insight: "Gen Z women are rejecting hustle culture, with 'soft life' content growing from 12K to 54K weekly mentions. Our Digital Twins reveal this isn't laziness—it's a values shift toward work-life integration.",
      platforms: ["TikTok", "Instagram", "Twitter"],
      demographic: "Women 22-28, Urban, College-educated"
    },
    {
      title: "AI Anxiety in Creative Industries",
      metric: "89% negative sentiment shift",
      insight: "Creative professionals show increasing concern about AI tools. Digital Twin analysis reveals nuanced positions: designers embrace AI for ideation but fear job displacement in execution roles.",
      platforms: ["LinkedIn", "Reddit", "Discord"],
      demographic: "Creative professionals 25-40, Mid-career"
    },
    {
      title: "Climate Optimism Among Young Parents",
      metric: "156% growth in solution-focused content",
      insight: "Millennial parents are shifting from climate doom to actionable optimism. Our Twins identify specific language patterns showing hope-driven rather than fear-driven environmental engagement.",
      platforms: ["Facebook Groups", "Parenting Forums", "YouTube"],
      demographic: "Parents 28-38, Suburban, Middle-income"
    }
  ];

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
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <div className={`text-center transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-shimmer">
              <Mail className="w-5 h-5 text-tambor-red animate-pulse" />
              <span className="text-white/90 font-medium">Weekly Intelligence</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                The Signal
              </span>
              <br />
              <span className="bg-gradient-to-r from-tambor-red to-tambor-red-light bg-clip-text text-transparent">
                Weekly Insights
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0 mb-8">
              Every Tuesday, get personalized narrative summaries tailored to your specific audience. Real cultural shifts in your market, decoded by AI Digital Twins trained on your target demographics.
            </p>

            <div className="flex justify-center mt-12">
              <button 
                onClick={openModal}
                className="group bg-gradient-to-r from-tambor-red to-tambor-red-light hover:from-tambor-red-dark hover:to-tambor-red text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-tambor-red/25 inline-flex items-center justify-center gap-3"
              >
                Define Your Audience
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* What You Get Section */}
      <div 
        ref={el => sectionRefs.current[0] = el}
        className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-tambor-blue/10 border border-tambor-blue/20 rounded-full px-6 py-3 mb-8 animate-shimmer">
            <Eye className="w-5 h-5 text-tambor-blue" />
            <span className="text-tambor-blue font-semibold">What You Get</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            Beyond Surface-Level 
            <br />
            <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
              Social Listening
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            While others send generic trend reports, we create personalized intelligence. Every week, our Digital Twins analyze conversations from your specific audience to surface the cultural shifts that actually matter to your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Narrative Summaries",
              description: "Not just what's trending in your audience—why it matters. Our AI identifies the deeper cultural currents driving conversations within your specific demographic and psychographic segments.",
              icon: MessageSquare,
              color: "tambor-blue",
              gradient: "from-tambor-blue to-tambor-blue-light",
              features: ["Your audience's cultural context", "Behavioral drivers specific to your market", "Psychographic insights for your segments", "Trend longevity predictions"]
            },
            {
              title: "Demographic Deep Dives",
              description: "Deep analysis of your specific audience segments, powered by Digital Twins trained on profiles matching your target demographics. Know exactly who in your audience is driving each conversation.",
              icon: Users,
              color: "tambor-red",
              gradient: "from-tambor-red to-tambor-red-light",
              features: ["Your audience's age & location patterns", "Platform preferences within your segments", "Engagement behaviors specific to your market", "Community overlap analysis"]
            },
            {
              title: "Psychographic Intelligence",
              description: "Values, motivations, and emotional drivers of your specific audience decoded from actual behavior—not generic surveys or broad assumptions.",
              icon: Brain,
              color: "tambor-navy",
              gradient: "from-tambor-navy to-tambor-blue-dark",
              features: ["Your audience's values mapping", "Emotional triggers specific to your segments", "Decision drivers within your market", "Belief systems analysis"]
            }
          ].map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative overflow-hidden h-full">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-tambor-navy mb-4 group-hover:text-tambor-blue transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className={`w-4 h-4 text-${feature.color} flex-shrink-0`} />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Example Narratives Section */}
      <div 
        ref={el => sectionRefs.current[1] = el}
        className={`bg-gray-50 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-tambor-red/10 border border-tambor-red/20 rounded-full px-6 py-3 mb-8 animate-shimmer">
              <Lightbulb className="w-5 h-5 text-tambor-red" />
              <span className="text-tambor-red font-semibold">Recent Examples</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              Real Insights from 
              <br />
              <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
                Recent Editions
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {narrativeExamples.map((example, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-tambor-blue/5 to-tambor-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-2xl sm:text-3xl font-bold text-tambor-navy group-hover:text-tambor-blue transition-colors duration-300">
                            {example.title}
                          </h3>
                          <div className="bg-gradient-to-r from-tambor-red to-tambor-red-light text-white px-4 py-2 rounded-full text-sm font-bold">
                            {example.metric}
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                          {example.insight}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-tambor-navy mb-2">Platforms Analyzed</h4>
                            <div className="flex flex-wrap gap-2">
                              {example.platforms.map((platform, idx) => (
                                <span key={idx} className="bg-tambor-blue/10 text-tambor-blue px-3 py-1 rounded-full text-sm font-medium">
                                  {platform}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-tambor-navy mb-2">Key Demographics</h4>
                            <span className="bg-tambor-red/10 text-tambor-red px-3 py-1 rounded-full text-sm font-medium">
                              {example.demographic}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:w-64 flex-shrink-0">
                        <div className="bg-gradient-to-br from-tambor-navy to-tambor-blue-dark rounded-2xl p-6 text-white">
                          <div className="flex items-center gap-3 mb-4">
                            <Brain className="w-6 h-6" />
                            <span className="font-semibold">Digital Twin Analysis</span>
                          </div>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-white/80">Sentiment Shift</span>
                              <span className="font-bold">+23%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/80">Engagement Rate</span>
                              <span className="font-bold">4.7x</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/80">Reach Expansion</span>
                              <span className="font-bold">156%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Digital Twin Technology Section */}
      <div 
        ref={el => sectionRefs.current[2] = el}
        className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-tambor-navy/10 border border-tambor-navy/20 rounded-full px-6 py-3 mb-8 animate-shimmer">
            <Network className="w-5 h-5 text-tambor-navy" />
            <span className="text-tambor-navy font-semibold">Technology</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            Powered by Digital Twins
            <br />
            <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
              That Actually Get People
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            Our weekly insights aren't generated by keyword counting or sentiment analysis. They come from AI Digital Twins custom-trained on your specific audience using real behavioral data from 250,000+ profiles across every platform where your audience actually engages.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {[
              {
                title: "Behavioral Data Foundation",
                description: "Your Digital Twin is built from actual posting patterns, engagement behaviors, and conversation styles of people matching your target audience—not broad demographic assumptions.",
                icon: Activity,
                stat: "250,000+",
                statLabel: "profiles to match your audience"
              },
              {
                title: "Cross-Platform Intelligence",
                description: "From TikTok comments to LinkedIn posts to niche Reddit communities—we capture the full conversation ecosystem where your specific audience actually engages.",
                icon: Globe,
                stat: "15+",
                statLabel: "platforms monitored for your audience"
              },
              {
                title: "Psychographic Depth",
                description: "Values, motivations, and emotional triggers of your specific audience decoded through advanced language analysis and community mapping.",
                icon: Brain,
                stat: "89%",
                statLabel: "accuracy for custom audiences"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-tambor-blue/5 to-tambor-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-tambor-blue to-tambor-red flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-tambor-navy group-hover:text-tambor-blue transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-xl sm:text-2xl font-black text-tambor-red">{feature.stat}</div>
                          <div className="text-xs sm:text-sm text-gray-500">{feature.statLabel}</div>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy rounded-3xl p-12 text-white relative overflow-hidden animate-gradient-shift">
              {/* Background patterns */}
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-morph"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl animate-morph" style={{ animationDelay: '3s' }}></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8">
                  <Database className="w-10 h-10 text-white animate-pulse" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">The Data Behind The Intelligence</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Daily Conversations Per Audience</span>
                    <span className="text-lg font-bold text-tambor-red">2.3M+</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Custom Audience Signals Tracked</span>
                    <span className="text-lg font-bold text-tambor-red">15,000+</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Audience-Specific Patterns</span>
                    <span className="text-lg font-bold text-tambor-red">890+</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Custom Language Markers</span>
                    <span className="text-lg font-bold text-tambor-red">1,200+</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20 text-center">
                  <p className="text-white/80 text-sm">
                    Updated in real-time across platforms where your specific audience engages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        ref={el => sectionRefs.current[3] = el}
        className={`bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy py-24 lg:py-32 relative overflow-hidden animate-gradient-shift transition-all duration-1000 ${
          visibleSections.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-tambor-red opacity-10 rounded-full blur-3xl top-20 right-20 animate-float animate-morph"></div>
          <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-tambor-blue opacity-15 rounded-full blur-3xl bottom-20 left-20 animate-float animate-morph" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-shimmer">
              <Target className="w-5 h-5 text-tambor-red animate-pulse" />
              <span className="text-white/90 font-medium">Define Your Audience</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              Get Weekly Insights
              <br />
              <span className="bg-gradient-to-r from-tambor-red to-tambor-red-light bg-clip-text text-transparent">
                Tailored to Your Audience
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-white/80 mb-12 leading-relaxed font-light max-w-3xl mx-auto px-4 sm:px-0">
              Tell us about your target audience, and our AI will configure Digital Twins to track conversations, decode cultural shifts, and deliver personalized intelligence every Tuesday.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/"
                className="border-2 border-white/30 hover:border-white/60 backdrop-blur-sm text-white hover:bg-white/10 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-500 inline-flex items-center justify-center gap-3 mx-4 sm:mx-0"
              >
                Learn More
                <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
            
            <p className="text-white/60 text-sm mt-8">
              Free setup • Custom audience configuration • Weekly delivery
            </p>
          </div>
        </div>
      </div>

      {/* Intake Modal */}
      <IntakeModal isOpen={isModalOpen} onClose={closeModal} sourcePage="weekly-insights" />
    </div>
  );
}

export default WeeklyInsightsPage;