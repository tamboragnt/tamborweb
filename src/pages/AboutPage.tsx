import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Brain, 
  MessageSquare, 
  Target, 
  Users, 
  Database, 
  Zap, 
  Eye,
  TrendingUp,
  Shield,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Globe,
  BarChart3,
  Lightbulb,
  Heart,
  Search,
  Filter,
  Layers,
  Network,
  Cpu,
  Activity
} from 'lucide-react';

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
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

  const digitalTwinComponents = [
    {
      title: "Behavior & Affinities",
      description: "Analyzes social graphs across major platforms (X, Meta, LinkedIn) to identify posting habits, engagement trends, buying signals, and conversational patterns.",
      icon: Activity,
      position: { top: '1%', left: '20%' },
      color: 'tambor-blue',
      gradient: 'from-tambor-blue to-tambor-blue-light'
    },
    {
      title: "Psychographic Profiles",
      description: " Emotions, values, and motivations via Watson + custom models",
      icon: Brain,
      position: { top: '5%', right: '10%' },
      color: 'tambor-red',
      gradient: 'from-tambor-red to-tambor-red-light'
    },
    {
      title: "Community Signals",
      description: "Comprehensive coverage spanning mainstream platforms like TikTok and YouTube comments to fat and long-tail social media sources such as niche blogs, hobbyist forums, and comment layers often overlooked by other tools.",
      icon: Globe,
      position: { top: '30%', left: '0%' },
      color: 'tambor-navy',
      gradient: 'from-tambor-navy to-tambor-blue-dark'
    },
    {
      title: "Language Shifts",
      description: "Track how people actually speak — new terms, changing tone",
      icon: MessageSquare,
      position: { top: '30%', right: '0%' },
      color: 'tambor-blue-dark',
      gradient: 'from-tambor-blue-dark to-tambor-blue'
    },
    {
      title: "Custom Add-Ons",
      description: "Upload your own CRM data, campaign results, or customer feedback",
      icon: Heart,
      position: { bottom: '5%', left: '10%' },
      color: 'tambor-red-light',
      gradient: 'from-tambor-red-light to-tambor-red'
    },
    {
      title: "Predictive Modeling",
      description: "Anticipates responses, preferences, and behavioral patterns with high accuracy",
      icon: TrendingUp,
      position: { bottom: '5%', right: '10%' },
      color: 'tambor-blue-light',
      gradient: 'from-tambor-blue-light to-tambor-blue'
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
              <Sparkles className="w-5 h-5 text-tambor-red animate-pulse" />
              <span className="text-white/90 font-medium">About Tambor</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              <span className="bg-gradient-to-r from-tambor-red to-tambor-red-light bg-clip-text text-transparent">
                About Tambor Intelligence
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
              From Noise to Signal: How Tambor Is Building AI That Actually Gets People
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div 
        ref={el => sectionRefs.current[0] = el}
        className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-tambor-red/10 border border-tambor-red/20 rounded-full px-6 py-3 mb-8 animate-shimmer">
            <Target className="w-5 h-5 text-tambor-red" />
            <span className="text-tambor-red font-semibold">Our Mission</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            Culture Moves Faster Than 
            <br />
            <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
              Traditional Research
            </span>
          </h2>
        </div>

        {/* The Access Problem - Full Width Hero */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-tambor-navy/5 to-tambor-blue/5 rounded-3xl p-12 lg:p-16 border border-tambor-navy/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-tambor-navy/5 via-tambor-blue/5 to-tambor-navy/5 animate-gradient-shift opacity-50"></div>
            <div className="relative z-10 text-center max-w-5xl mx-auto">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-tambor-navy to-tambor-blue flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500 mx-auto">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-tambor-navy mb-6 lg:mb-8">The Access Problem</h3>
              <div className="space-y-6 text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
                <p>
                  The richest audience insights aren't missing — they're just trapped behind paywalls, dashboards, and tools most people can't use. While 92% of leaders say data literacy matters, only 1 in 5 employees feel confident working with data.
                </p>
                <p>
                  <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
                    Yet when insight becomes accessible — when it speaks in plain language — organizations move faster, collaborate better, and unlock deeper thinking.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Solution and Digital Twins - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Our Solution */}
          <div className="bg-gradient-to-br from-tambor-blue/5 to-tambor-red/5 rounded-3xl p-8 lg:p-12 border border-tambor-blue/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-tambor-blue/5 via-tambor-red/5 to-tambor-blue/5 animate-gradient-shift opacity-50"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tambor-red to-tambor-blue flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-tambor-navy mb-4 lg:mb-6">Our Solution</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Tambor exists to make that possible: we put deep, behavioral audience intelligence into the hands of strategists, creatives, and founders. We create AI-powered Digital Twins trained on real behavioral data from 250,000+ profiles. These twins evolve with culture, providing live insights into how audiences actually think and respond. No dashboards. No code. Just dialogue.
              </p>
            </div>
          </div>

          {/* Digital Twins */}
          <div className="bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden animate-gradient-shift">
            {/* Background patterns */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-morph"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl animate-morph" style={{ animationDelay: '3s' }}></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Digital Twins</h3>
                  <p className="text-white/80 text-sm sm:text-base">AI that thinks like your audience</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-tambor-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Real-time Intelligence</h4>
                    <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                      Insights that evolve as fast as culture moves, not quarterly reports
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-tambor-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Behavioral Truth</h4>
                    <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                      Based on what people actually do, not what they say they do
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-tambor-red mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Conversational Interface</h4>
                    <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                      Chat with your audience segments like they're in the room
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Powers a Digital Twin Section */}
      <div 
        ref={el => sectionRefs.current[1] = el}
        className={`bg-gray-50 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-tambor-blue/10 border border-tambor-blue/20 rounded-full px-6 py-3 mb-8 animate-shimmer">
              <Cpu className="w-5 h-5 text-tambor-blue" />
              <span className="text-tambor-blue font-semibold">Technology</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black text-tambor-navy mb-8 leading-tight">
              What Powers a 
              <br />
              <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift px-4 sm:px-0">
                Digital Twin?
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
             Our Twins and Agents are powered by millions of real conversations from the platforms your audience actually uses — not just what they post, but how they think, talk, and decide.
            </p>
          </div>

          {/* Desktop Layout with Concentric Circles */}
          <div className="relative max-w-6xl mx-auto">
            {/* Concentric Circles Background */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
              {/* Largest circle */}
              <div className="absolute w-[800px] h-[800px] rounded-full border border-tambor-blue/20 animate-morph"></div>
              {/* Middle circle */}
              <div className="absolute w-[600px] h-[600px] rounded-full border border-tambor-red/20 animate-morph" style={{ animationDelay: '2s' }}></div>
              {/* Smallest circle */}
              <div className="absolute w-[400px] h-[400px] rounded-full border border-tambor-navy/20 animate-morph" style={{ animationDelay: '4s' }}></div>
              {/* Center core */}
              <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-tambor-blue via-tambor-red to-tambor-navy opacity-10 animate-morph" style={{ animationDelay: '6s' }}></div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block relative h-[1000px]">
              {digitalTwinComponents.map((component, index) => (
                <div
                  key={index}
                  className="absolute group"
                  style={component.position}
                >
                  <div className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-${component.color}/20 w-80 relative overflow-hidden`}>
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${component.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${component.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <component.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-bold text-tambor-navy mb-3 group-hover:text-tambor-blue transition-colors duration-300">
                        {component.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {component.description}
                      </p>
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}

              {/* Central Digital Twin Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group animate-gradient-shift">
                  {/* Background effects */}
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl animate-morph"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-lg animate-morph" style={{ animationDelay: '3s' }}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Brain className="w-8 h-8 text-white animate-pulse" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">Digital Twin</h3>
                    <p className="text-white/80 text-sm">AI Intelligence Core</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden grid gap-8">
              {digitalTwinComponents.map((component, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <div className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-${component.color}/20 relative overflow-hidden`}>
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${component.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${component.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <component.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-tambor-navy mb-3 group-hover:text-tambor-blue transition-colors duration-300">
                        {component.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {component.description}
                      </p>
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div 
        ref={el => sectionRefs.current[2] = el}
        className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-tambor-red/10 border border-tambor-red/20 rounded-full px-6 py-3 mb-8 animate-shimmer">
            <Zap className="w-5 h-5 text-tambor-red" />
            <span className="text-tambor-red font-semibold">Process</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            How We Build Your 
            <br />
            <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
              Digital Twin
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {[
            {
              step: "01",
              title: "Behavioral Foundation",
              description: "We start with psychographics, affinities, and cultural signals to shape each segment. Then we pull real conversations from platforms like TikTok, Reddit, YouTube, and niche forums.",
              icon: Search,
              color: "tambor-blue"
            },
            {
              step: "02", 
              title: "Model Training",
              description: "Using data sets prepared for LLM's our models are trained on this behavioral data to replicate authentic behavioral patterns and opinions.",
              icon: Cpu,
              color: "tambor-red"
            },
            {
              step: "03",
              title: "Digital Twin",
              description: "Your AI-powered audience replica is ready to chat, providing insights that evolve with real-time cultural shifts",
              icon: MessageSquare,
              color: "tambor-navy"
            }
          ].map((step, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${step.color}/5 to-${step.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${step.color} to-${step.color === 'tambor-blue' ? 'tambor-blue-light' : step.color === 'tambor-red' ? 'tambor-red-light' : 'tambor-blue-dark'} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`text-4xl font-black text-${step.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-tambor-navy mb-4 group-hover:text-tambor-blue transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Tambor Section */}
      <div 
        ref={el => sectionRefs.current[3] = el}
        className={`bg-gray-50 py-24 lg:py-32 transition-all duration-1000 ${
          visibleSections.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-tambor-navy/10 border border-tambor-navy/20 rounded-full px-6 py-3 mb-8 animate-shimmer">
              <Shield className="w-5 h-5 text-tambor-navy" />
              <span className="text-tambor-navy font-semibold">Why Tambor</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              Beyond Traditional Audience
              <br />
              <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
                Research Methods
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Real-Time Intelligence",
                  description: "While traditional research takes months, our Digital Twins provide instant insights that evolve with culture",
                  icon: Clock,
                  stat: "24 hours",
                  statLabel: "to deployment"
                },
                {
                  title: "Behavioral Truth",
                  description: "Based on actual conversations and behaviors, not what people say they would do in hypothetical scenarios",
                  icon: Activity,
                  stat: "250,000+",
                  statLabel: "real profiles analyzed"
                },
                {
                  title: "Conversational Interface",
                  description: "Chat with your audience segments naturally, asking follow-up questions and exploring nuanced insights",
                  icon: MessageSquare,
                  stat: "Unlimited",
                  statLabel: "conversations"
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
                          <h3 className="text-lg sm:text-xl font-bold text-tambor-navy group-hover:text-tambor-blue transition-colors duration-300 w-full sm:w-auto mb-1 sm:mb-0">
                            {feature.title}
                          </h3>
                          <div className="w-full sm:w-auto text-left sm:text-right">
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
                
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8">
                    <BarChart3 className="w-10 h-10 text-white animate-pulse" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6">Traditional vs. Tambor</h3>
                  
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0">
                      <span className="text-white/80 text-sm sm:text-base w-full sm:w-auto text-left">Setup Time</span>
                      <div className="w-full sm:w-auto text-left sm:text-right">
                        <div className="text-xs sm:text-sm text-white/60">Traditional: 3-6 months</div>
                        <div className="text-sm sm:text-lg font-bold text-tambor-red">Tambor: 24 hours</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0">
                      <span className="text-white/80 text-sm sm:text-base w-full sm:w-auto text-left">Data Freshness</span>
                      <div className="w-full sm:w-auto text-left sm:text-right">
                        <div className="text-xs sm:text-sm text-white/60">Traditional: Quarterly</div>
                        <div className="text-sm sm:text-lg font-bold text-tambor-red">Tambor: Real-time</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0">
                      <span className="text-white/80 text-sm sm:text-base w-full sm:w-auto text-left">Interaction</span>
                      <div className="w-full sm:w-auto text-left sm:text-right">
                        <div className="text-xs sm:text-sm text-white/60">Traditional: Static reports</div>
                        <div className="text-sm sm:text-lg font-bold text-tambor-red">Tambor: Live chat</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy py-24 lg:py-32 relative overflow-hidden animate-gradient-shift">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-tambor-red opacity-10 rounded-full blur-3xl top-20 right-20 animate-float animate-morph"></div>
          <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-tambor-blue opacity-15 rounded-full blur-3xl bottom-20 left-20 animate-float animate-morph" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center px-6 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-12 animate-shimmer">
            <Zap className="w-5 h-5 text-tambor-red animate-pulse" />
            <span className="text-white/90 font-semibold">Ready to Start?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
            Experience the Future of 
            <br />
            <span className="bg-gradient-to-r from-tambor-red to-tambor-red-light bg-clip-text text-transparent animate-gradient-shift">
              Audience Intelligence
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 mb-12 lg:mb-16 leading-relaxed font-light max-w-4xl mx-auto px-4 sm:px-0">
            Join leading brands who've replaced guesswork with AI-powered insights. 
            Get your Digital Twin in just 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/"
              className="group bg-gradient-to-r from-tambor-red to-tambor-red-light hover:from-tambor-red-dark hover:to-tambor-red text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-tambor-red/25 inline-flex items-center justify-center gap-3 mx-4 sm:mx-0"
            >
              Start Your Digital Twin
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
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
    </div>
  );
}

export default AboutPage;