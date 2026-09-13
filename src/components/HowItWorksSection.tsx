import React from 'react';
import { Download, Wrench, Puzzle, Zap } from 'lucide-react';

interface WorkflowStep {
  num: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  detail: string;
}

export const HowItWorksSection: React.FC = () => {
  const steps: WorkflowStep[] = [
    {
      num: '01',
      title: 'Download & Run Setup',
      description: (
        <>
          Download <code className="font-mono text-xs bg-slate-100 text-blue-700 px-1 py-0.5 rounded border border-slate-200">ChromeAccountSwitcherSetup.exe</code> and run the installer on your PC.
        </>
      ),
      icon: <Download className="w-5 h-5 text-blue-600" />,
      detail: 'Standalone Windows Installer',
    },
    {
      num: '02',
      title: 'Run Helper',
      description: (
        <>
          Run <strong className="text-slate-800 font-semibold">Windows Helper Installer</strong> to configure native Chrome messaging host integration.
        </>
      ),
      icon: <Wrench className="w-5 h-5 text-indigo-600" />,
      detail: 'One-click native helper setup',
    },
    {
      num: '03',
      title: 'Load Extension',
      description: (
        <>
          Open <code className="font-mono text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded border border-slate-200">chrome://extensions</code>, enable Developer mode, and Load unpacked.
        </>
      ),
      icon: <Puzzle className="w-5 h-5 text-sky-600" />,
      detail: 'Select ChromeExtension folder',
    },
    {
      num: '04',
      title: 'Switch Profiles',
      description: (
        <>
          Press <kbd className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded border border-slate-300 font-semibold text-slate-800">Alt + 1</kbd> through <kbd className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded border border-slate-300 font-semibold text-slate-800">Alt + 0</kbd> to jump between accounts instantly.
        </>
      ),
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
                <div className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80"></span>
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
