import React from 'react';
import { 
  Zap, 
  Layers, 
  ShieldAlert, 
  SearchCheck, 
  Cpu, 
  Sparkles 
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: 'feature-1',
      title: 'Instant Profile Switching',
      description: 'Switch between Chrome profiles using a simple keyboard shortcut.',
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      badge: 'Speed',
    },
    {
      id: 'feature-2',
      title: 'Up to 10 Profiles',
      description: 'Automatically detect your Chrome profiles and assign quick-access shortcuts.',
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      badge: 'Capacity',
    },
    {
      id: 'feature-3',
      title: 'Your Tabs Stay Safe',
      description: 'Switch profiles without closing the source Chrome window or disturbing your existing tabs.',
      icon: <ShieldAlert className="w-6 h-6 text-emerald-600" />,
      badge: 'Integrity',
    },
    {
      id: 'feature-4',
      title: 'Automatic Profile Detection',
      description: 'Your Chrome profiles are detected automatically. No manual account setup is required.',
      icon: <SearchCheck className="w-6 h-6 text-sky-600" />,
      badge: 'Zero Setup',
    },
    {
      id: 'feature-5',
      title: 'Fast Windows Integration',
      description: 'A lightweight Windows helper connects the extension with your Chrome profiles.',
      icon: <Cpu className="w-6 h-6 text-cyan-700" />,
      badge: 'Native Helper',
    },
    {
      id: 'feature-6',
      title: 'Simple by Design',
      description: 'No complicated configuration. Install it, open Chrome, and start switching.',
      icon: <Sparkles className="w-6 h-6 text-violet-600" />,
      badge: 'Effortless',
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-transparent">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Built For Power Users</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Everything you need to switch faster.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700">
            Engineered to remove friction from daily multi-account workflows on Windows.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="reveal-on-scroll mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f) => (
            <div
              key={f.id}
              className="stagger-item group relative rounded-2xl bg-white/85 border border-black/10 p-7 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between backdrop-blur-sm"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {f.icon}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                    {f.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {f.description}
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-slate-200/80 flex items-center text-xs font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
                <span>Optimized for Windows 10 & 11</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
