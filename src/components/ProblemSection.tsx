import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, Zap, MousePointerClick, Clock } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    { text: 'Searching through Chrome profiles', sub: 'Navigating through crowded avatar menus across several open displays' },
    { text: 'Repeatedly opening profile menus', sub: 'Clicking top-right profile icons again and again every few minutes' },
    { text: 'Closing or disturbing existing work', sub: 'Accidentally minimizing windows or losing track of active workspaces' },
    { text: 'Losing time switching between accounts', sub: 'Friction adds up when context switching between work, dev, and personal sessions' },
  ];

  const benefits = [
    { text: 'Single keyboard shortcut', sub: 'Press Alt + 1 through Alt + 0 to switch to any profile immediately' },
    { text: 'Zero manual searching', sub: 'Profiles are indexed automatically in order of your setup' },
    { text: 'Preserves all open tabs', sub: 'Current tabs, active calls, and unsaved forms remain undisturbed' },
    { text: 'Saves hours every week', sub: 'Switch profiles in 50 milliseconds instead of 5–10 seconds of clicking' },
  ];

  return (
    <section className="py-24 bg-transparent relative border-y border-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>The Productivity Drain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Stop switching Chrome profiles the slow way.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Working with multiple Google accounts often means opening profile menus, finding the right account, switching windows, and repeating the process again and again.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="reveal-on-scroll mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* The Slow Way (Old) */}
          <div className="rounded-2xl bg-white/90 border border-red-300 p-6 sm:p-8 relative overflow-hidden shadow-lg shadow-black/5">
            <div className="flex items-center justify-between pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-600">
                  <MousePointerClick className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">The Manual Way</h3>
                  <p className="text-xs text-slate-500">Clicking through Chrome UI</p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-red-500/10 text-red-700 border border-red-500/20 font-semibold">
                High Friction
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {painPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{item.text}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Avg time per switch: ~6.5 seconds</span>
              <span className="text-red-600 font-mono font-medium">Multiple mouse clicks</span>
            </div>
          </div>

          {/* The Fast Way (Chrome Account Switcher) */}
          <div className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#0c1220] border border-blue-500/40 p-6 sm:p-8 relative overflow-hidden shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500/20">
            {/* Top highlight glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">With Chrome Account Switcher</h3>
                  <p className="text-xs text-blue-300">Instant keyboard shortcuts</p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                Instant (&lt; 50ms)
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-blue-950/20 border border-blue-900/40">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">{item.text}</div>
                    <div className="text-xs text-slate-300 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Instant profile jump
              </span>
              <span className="text-blue-400 font-mono font-medium">Alt + [1 - 0]</span>
            </div>
          </div>

        </div>

        {/* Transition callout */}
        <div className="mt-12 text-center">
          <p className="text-lg sm:text-xl font-semibold text-slate-900 inline-flex items-center gap-2">
            <span>Chrome Account Switcher gives you a faster way.</span>
            <ArrowRight className="w-5 h-5 text-blue-600 inline" />
          </p>
        </div>

      </div>
    </section>
  );
};
