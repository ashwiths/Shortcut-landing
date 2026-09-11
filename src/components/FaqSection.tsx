import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Does this create new Chrome accounts?',
      answer: 'No. Chrome Account Switcher works with the Chrome profiles already available on your Windows computer.',
    },
    {
      question: 'How many profiles can I use?',
      answer: 'The application is designed to support up to 10 quick-access Chrome profiles.',
    },
    {
      question: 'Will my existing tabs be closed?',
      answer: 'No. The switcher is designed to preserve your existing Chrome windows and tabs.',
    },
    {
      question: 'Do I need to enter my Google password?',
      answer: 'No. The application works with your existing Chrome profiles and does not require you to enter Google account credentials.',
    },
    {
      question: 'Which Windows versions are supported?',
      answer: 'Windows 10 and Windows 11.',
    },
    {
      question: 'Is it free?',
      answer: 'Yes, the current version is available as a free download.',
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-transparent relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Common questions answered.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700">
            Everything you need to know about compatibility, security, and setup.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-14 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/85 border border-black/10 overflow-hidden transition-colors duration-200 hover:border-slate-300 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-700 bg-blue-50' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
