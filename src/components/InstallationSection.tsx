import React from 'react';
import { Info, Terminal } from 'lucide-react';

export const InstallationSection: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Download Chrome Account Switcher',
      description: 'Grab the latest Windows installer directly from this page.',
    },
    {
      step: 2,
      title: 'Run the Windows installer',
      description: 'Open the downloaded setup executable and accept the prompt to proceed.',
    },
    {
      step: 3,
      title: 'Complete the installation',
      description: 'Follow the brief guided setup to install the background Windows helper service.',
    },
    {
      step: 4,
      title: 'Open Chrome',
      description: 'Start Google Chrome as usual with your existing profiles signed in.',
    },
    {
      step: 5,
      title: 'Start switching between profiles',
      description: 'Press Alt + 1 through Alt + 0 at any time to jump to your respective profiles.',
    },
  ];

  return (
    <section id="installation" className="py-24 bg-transparent relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Setup Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Simple installation.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700">
            Get up and running in under two minutes with straightforward setup.
          </p>
        </div>

        {/* Numbered Steps List */}
        <div className="mt-14 space-y-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/85 border border-black/10 hover:border-blue-400 transition-all duration-200 shadow-sm"
            >
              {/* Step circle */}
              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-mono font-bold text-sm">
                {item.step}
              </div>

              {/* Text */}
              <div className="pt-0.5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Required helper note */}
        <div className="mt-8 rounded-xl bg-white/90 border border-blue-500/20 p-4.5 flex items-start gap-3 shadow-sm">
          <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-800 leading-relaxed">
            <strong className="text-slate-950">Note:</strong> Chrome Account Switcher requires its Windows helper to communicate with Chrome profiles.
          </p>
        </div>

      </div>
    </section>
  );
};
