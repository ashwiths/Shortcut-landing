import React from 'react';
import { Download, Wrench, Globe, Zap } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Download',
      description: 'Download the Chrome Account Switcher Windows installer.',
      icon: <Download className="w-5 h-5 text-blue-600" />,
      detail: 'Lightweight setup executable',
    },
    {
      num: '02',
      title: 'Install',
      description: 'Run the installer and follow the simple setup process.',
      icon: <Wrench className="w-5 h-5 text-indigo-600" />,
      detail: 'Configures native Windows helper',
    },
    {
      num: '03',
      title: 'Open Chrome',
      description: 'Launch Chrome with your existing profiles.',
      icon: <Globe className="w-5 h-5 text-sky-600" />,
      detail: 'Auto-detects active profiles',
    },
    {
      num: '04',
      title: 'Switch',
      description: 'Use Alt + 1 through Alt + 0 to quickly switch between profiles.',
      icon: <Zap className="w-5 h-5 text-emerald-600" />,
      detail: 'Instant keyboard switching',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Get started in minutes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700">
            From download to fast keyboard switching in four quick steps.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="reveal-on-scroll mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step) => (
            <div
              key={step.num}
              className="stagger-item relative rounded-2xl bg-white/85 border border-black/10 p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group shadow-sm hover:shadow-lg backdrop-blur-sm"
            >
              <div>
                {/* Step number badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black font-mono text-slate-400 group-hover:text-blue-600 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <span className="text-xs font-mono text-slate-500">
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
