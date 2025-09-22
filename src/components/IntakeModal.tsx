import React, { useState, useEffect } from 'react';
import { X as XIcon, ArrowRight, ArrowLeft, CheckCircle, Users, MapPin, Briefcase, Instagram, Hash, Heart, Eye, BookOpen, Lightbulb, Mail, Search, Network, Database } from 'lucide-react';

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourcePage?: string;
}

interface FormData {
  // Section 1: Required
  ageRange: string;
  location: string;
  socialAccounts: string;
  keywords: string;
  
  // Section 2: Topic & Community
  topicCommunity: string;
  beliefIdea: string;
  onlinePlatforms: string;
  
  // Section 3: Custom Data
  customData: string;
  email: string;
  weeklyinsights?: boolean;
}

const IntakeModal: React.FC<IntakeModalProps> = ({ isOpen, onClose, sourcePage }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    ageRange: '',
    location: '',
    socialAccounts: '',
    keywords: '',
    topicCommunity: '',
    beliefIdea: '',
    onlinePlatforms: '',
    customData: '',
    email: '',
    weeklyinsights: sourcePage === 'weekly-insights' ? true : undefined
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
      setCurrentStep(0);
      setCurrentSection(1);
      setFormData({
        ageRange: '',
        location: '',
        socialAccounts: '',
        keywords: '',
        topicCommunity: '',
        beliefIdea: '',
        onlinePlatforms: '',
        customData: '',
        email: '',
        weeklyinsights: sourcePage === 'weekly-insights' ? true : undefined
      });
    }, 300);
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    console.log('updateFormData called:', { field, value, currentValue: formData[field] });
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentSection === 1 && currentStep === sections[0].steps.length - 1) {
      setCurrentSection(2);
      setCurrentStep(0);
    } else if (currentSection === 2 && currentStep === sections[1].steps.length - 1) {
      setCurrentSection(3);
      setCurrentStep(0);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentSection === 2 && currentStep === 0) {
      setCurrentSection(1);
      setCurrentStep(sections[0].steps.length - 1);
    } else if (currentSection === 3 && currentStep === 0) {
      setCurrentSection(2);
      setCurrentStep(sections[1].steps.length - 1);
    } else {
      setCurrentStep(prev => prev - 1);
    }
  };

  const canProceed = () => {
    if (currentSection === 1) {
      // Only ageRange, location, and socialAccounts are required in section 1
      // keywords is now optional
      const requiredFields = [formData.ageRange, formData.location, formData.socialAccounts];
      if (currentStep === 0) return formData.ageRange.trim() !== '';
      if (currentStep === 1) return formData.location.trim() !== '';
      if (currentStep === 2) return formData.socialAccounts.trim() !== '';
      if (currentStep === 3) return true; // keywords is optional
    } else if (currentSection === 3 && currentStep === 3) {
      // Email step - require valid email
      return formData.email.trim() !== '' && formData.email.includes('@');
    }
    return true; // Sections 2 and 3 are optional
  };

  const handleSubmit = async () => {
    // Here you would typically send the data to your backend
    console.log('handleSubmit called - Full formData object:', formData);
    console.log('Individual field values:', {
      ageRange: formData.ageRange,
      location: formData.location,
      socialAccounts: formData.socialAccounts,
      keywords: formData.keywords,
      topicCommunity: formData.topicCommunity,
      beliefIdea: formData.beliefIdea,
      onlinePlatforms: formData.onlinePlatforms,
      customData: formData.customData,
      email: formData.email
    });
    console.log('Form submitted:', formData);
    
    try {
      // Format data for webhook
      const webhookData = {
        target_age_range: formData.ageRange,
        location: formData.location,
        x_accounts: formData.socialAccounts,
        keywords_roles: formData.keywords,
        topic_community: formData.topicCommunity,
        belief_idea: formData.beliefIdea,
        online_presence: formData.onlinePlatforms,
        custom_data: formData.customData,
        email: formData.email,
        ...(formData.weeklyinsights && { weeklyinsights: formData.weeklyinsights })
      };
      
      // Send data to webhook
      console.log('Sending to webhook:', JSON.stringify(webhookData, null, 2));
      const response = await fetch('https://api-bcbe5a.stack.tryrelevance.com/latest/agents/hooks/custom-trigger/5ea592f2f8dc-453d-a32e-989e6966f8a4/523a9558-72cf-4e9e-8bfd-0f103f8d601d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });
      
      if (response.ok) {
        const responseData = await response.text();
        console.log('Webhook response:', responseData);
        console.log('Data successfully sent to webhook');
        // Redirect to app.tambor.ai after successful submission
        window.location.href = 'https://app.tambor.ai';
      } else {
        const errorText = await response.text();
        console.error('Webhook error response:', errorText);
        console.error('Failed to send data to webhook:', response.status, response.statusText);
        // Still redirect even if webhook fails
        window.location.href = 'https://app.tambor.ai';
      }
    } catch (error) {
      console.error('Error sending data to webhook:', error);
      // Still redirect even if there's an error
      window.location.href = 'https://app.tambor.ai';
    }
    
    handleClose();
  };

  const sections = [
    {
      number: 1,
      title: "Essential Details",
      subtitle: "Required for building your audience profile",
      color: "tambor-red",
      gradient: "from-tambor-red to-tambor-red-light",
      icon: Users,
      steps: [
        {
          question: "What age range best reflects your target audience?",
          placeholder: "e.g., 25–34, 35–44",
          field: 'ageRange' as keyof FormData,
          icon: Users
        },
        {
          question: "Where are they physically located?",
          placeholder: "City-level is ideal: NYC, London, Berlin. If global: what languages?",
          field: 'location' as keyof FormData,
          icon: MapPin
        },
        {
          question: "Are there any known X accounts they follow or frequently reference?",
          placeholder: "List 3–5 if possible",
          field: 'socialAccounts' as keyof FormData,
          icon: Instagram
        },
        {
          question: "What keywords or job role might appear in their bios or descriptions?",
          placeholder: 'e.g., "recovering perfectionist," "creative director," "neurodiverse parent," "designer," "nonprofit lead"',
          field: 'keywords' as keyof FormData,
          icon: Hash
        }
      ]
    },
    {
      number: 2,
      title: "Topic & Community",
      subtitle: "Pick a space, trend, or group you're curious about",
      color: "tambor-blue",
      gradient: "from-tambor-blue to-tambor-blue-light",
      icon: Search,
      steps: [
        {
          question: "What topic or community are you exploring?",
          placeholder: "Examples: Men's mental health, Mr Beasts audience, Climate conversations, AI in classrooms",
          field: 'topicCommunity' as keyof FormData,
          icon: Search
        },
        {
          question: "Is there a belief or idea you want to explore or test?",
          placeholder: "Examples: 'Hustle' culture is losing steam, AI is changing how students study, Climate doom is turning people off",
          field: 'beliefIdea' as keyof FormData,
          icon: Lightbulb
        },
        {
          question: "Where does this audience live online?",
          placeholder: "Examples: Reddit: r/GenZ, r/Climate, r/MensLib, TikTok: #anxietycheck, #fyp, YouTube: Commentary creators, explainer videos, Telegram, Twitter/X, niche blogs",
          field: 'onlinePlatforms' as keyof FormData,
          icon: Network
        }
      ]
    },
    {
      number: 3,
      title: "Additional data",
      subtitle: "Optional — only if it helps us get smarter, faster.",
      color: "tambor-navy",
      gradient: "from-tambor-navy to-tambor-blue-dark",
      icon: Database,
      steps: [
        {
          question: "Do you have any private or custom data you want us to include?",
          placeholder: "Examples: Sales or user materials, Customer interest profiles, Past survey results, Influencer or subreddit lists, Internal research or strategy decks",
          field: 'customData' as keyof FormData,
          icon: Database
        },
        {
          question: "What's your email address?",
          placeholder: "Enter your email to create your account",
          field: 'email' as keyof FormData,
          icon: Mail
        }
      ]
    }
  ];

  const currentSectionData = sections[currentSection - 1];
  const currentStepData = currentSectionData.steps[currentStep];
  const totalSteps = currentSectionData.steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className={`relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl transition-all duration-500 ${
        isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
      } mx-4 sm:mx-0`}>
        {/* Header */}
        <div className={`bg-gradient-to-r ${currentSectionData.gradient} p-6 sm:p-8 rounded-t-3xl relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <currentSectionData.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">{currentSectionData.title}</h2>
                <p className="text-white/80 font-light text-sm sm:text-base">{currentSectionData.subtitle}</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white/80 text-sm font-medium">
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span className="text-white/80 text-sm font-medium">
                Section {currentSection} of 3
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-10 h-10 rounded-xl bg-${currentSectionData.color}/10 flex items-center justify-center flex-shrink-0 mt-1`}>
                <currentStepData.icon className={`w-5 h-5 text-${currentSectionData.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-relaxed">
                  {currentStepData.question}
                </h3>
                {currentSection === 3 && currentStep === 3 ? (
                  <input
                    type="email"
                    value={formData[currentStepData.field]}
                    onChange={(e) => updateFormData(currentStepData.field, e.target.value)}
                    placeholder={currentStepData.placeholder}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-tambor-blue/20 focus:border-tambor-blue transition-all duration-300 text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                  />
                ) : (
                  <textarea
                    value={formData[currentStepData.field]}
                    onChange={(e) => updateFormData(currentStepData.field, e.target.value)}
                    placeholder={currentStepData.placeholder}
                    className="w-full p-3 sm:p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-tambor-blue/20 focus:border-tambor-blue transition-all duration-300 resize-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                    rows={4}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentSection === 1 && currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                currentSection === 1 && currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              } text-sm sm:text-base`}
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              Previous
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentStep
                      ? `bg-${currentSectionData.color}`
                      : i < currentStep
                      ? `bg-${currentSectionData.color}/50`
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            {currentSection === 3 && currentStep === totalSteps - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  !canProceed()
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-tambor-red to-tambor-red-light text-white shadow-lg hover:shadow-xl'
                } text-sm sm:text-base`}
              >
                Create Account
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            ) : (
              <button
                onClick={nextStep}
                disabled={(currentSection === 1 || (currentSection === 3 && currentStep === 1)) && !canProceed()}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  (currentSection === 1 || (currentSection === 3 && currentStep === 1)) && !canProceed()
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : `bg-gradient-to-r ${currentSectionData.gradient} text-white shadow-lg hover:shadow-xl`
                } text-sm sm:text-base`}
              >
                {currentStep === totalSteps - 1 ? 'Next Section' : 'Continue'}
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            )}
          </div>

          {/* Section indicator */}
          <div className="mt-6 pt-6 border-t border-gray-100 hidden md:block">
            <div className="flex justify-center gap-4">
              {sections.map((section, index) => (
                <div
                  key={section.number}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    currentSection === section.number
                      ? `bg-${section.color}/10 text-${section.color}`
                      : currentSection > section.number
                      ? 'bg-green-50 text-green-600'
                      : 'bg-gray-50 text-gray-400'
                  }`}
                >
                  {currentSection > section.number ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <section.icon className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{section.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer text with link */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-center text-gray-600 text-sm sm:text-base">
              Not sure where to start?{' '}
              <a 
                href="https://calendar.app.google/JoVpVzVSQ9VFRJkQ7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tambor-blue hover:text-tambor-blue-dark hover:underline transition-colors duration-300 font-medium"
              >
                Get in touch and we can help!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeModal;