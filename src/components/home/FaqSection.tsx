import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
  sectionRef: (el: HTMLDivElement | null) => void;
  isVisible: boolean;
}

export const faqs = [
  {
    question: 'Where does the data come from?',
    answer: 'Real conversations and content on TikTok, not guesses.',
  },
  {
    question: 'Do you store personal info?',
    answer: 'Nope. Only public content + community-level patterns.',
  },
  {
    question: 'Are you TikTok-partner compliant?',
    answer: "No, on purpose — partner compliance limits you to brand mentions + owned analytics. Tambor needs broader cultural visibility.",
  },
  {
    question: 'Do you scrape TikTok?',
    answer: 'No. All sourcing is handled externally and legally.',
  },
  {
    question: 'How fresh is the data?',
    answer: 'Updated every 24 hours.',
  },
  {
    question: 'Can we export it?',
    answer: 'Yep — depending on which plan you choose.',
  },
];

function FaqSection({ sectionRef, isVisible }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Frequently asked questions"
      className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-tambor-navy mb-4 leading-tight px-4 sm:px-0">
          <span className="bg-gradient-to-r from-tambor-blue to-tambor-red bg-clip-text text-transparent animate-gradient-shift">
            FAQ
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
          Friendly. Direct. Zero paranoia.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4" role="list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            role="listitem"
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300"
          >
            <h3>
              <button
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-tambor-navy pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-tambor-blue flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-8 pb-6">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
