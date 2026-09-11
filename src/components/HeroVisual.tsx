import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  User, 
  Code2, 
  Palette, 
  Zap, 
  Globe, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

interface ProfileMock {
  id: number;
  name: string;
  category: string;
  email: string;
  shortcut: string;
  keyNumber: string;
  color: string;
  accentBorder: string;
  badgeBg: string;
  icon: React.ReactNode;
  activeTabs: { title: string; favicon: string }[];
  currentUrl: string;
}

const profiles: ProfileMock[] = [
  {
    id: 1,
    name: 'Work Account',
    category: 'Primary Work',
    email: 'alex@company.corp',
    shortcut: 'Alt + 1',
    keyNumber: '1',
    color: 'from-blue-600 to-cyan-500',
    accentBorder: 'border-blue-500/60',
    badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    icon: <Briefcase className="w-4 h-4 text-blue-400" />,
    currentUrl: 'https://mail.google.com/mail/u/0/#inbox',
    activeTabs: [
      { title: 'Inbox (4) - Work Mail', favicon: '✉️' },
      { title: 'Sprint Board - Jira', favicon: '📋' },
      { title: 'Team Sync - Google Meet', favicon: '📹' },
    ],
  },
  {
    id: 2,
    name: 'Personal Account',
    category: 'Personal Life',
    email: 'alex.personal@gmail.com',
    shortcut: 'Alt + 2',
    keyNumber: '2',
    color: 'from-emerald-500 to-teal-400',
    accentBorder: 'border-emerald-500/60',
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    icon: <User className="w-4 h-4 text-emerald-400" />,
    currentUrl: 'https://youtube.com/feed/subscriptions',
    activeTabs: [
      { title: 'YouTube Subscriptions', favicon: '▶️' },
      { title: 'Google Photos - 2026', favicon: '📷' },
      { title: 'Reddit - /r/technology', favicon: '🌐' },
    ],
  },
  {
    id: 3,
    name: 'Dev & Cloud',
    category: 'Infrastructure',
    email: 'devops@cloud-stack.io',
    shortcut: 'Alt + 3',
    keyNumber: '3',
    color: 'from-violet-600 to-purple-400',
    accentBorder: 'border-purple-500/60',
    badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    icon: <Code2 className="w-4 h-4 text-purple-400" />,
    currentUrl: 'https://github.com/organization/production',
    activeTabs: [
      { title: 'PR #421 - Architecture Update', favicon: '🐙' },
      { title: 'AWS Management Console', favicon: '☁️' },
      { title: 'Datadog Metrics Dashboard', favicon: '📊' },
    ],
  },
  {
    id: 4,
    name: 'Client Projects',
    category: 'Consulting',
    email: 'alex@consultancy.agency',
    shortcut: 'Alt + 4',
    keyNumber: '4',
    color: 'from-amber-500 to-orange-400',
    accentBorder: 'border-amber-500/60',
    badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    icon: <Palette className="w-4 h-4 text-amber-400" />,
    currentUrl: 'https://figma.com/@design-system',
    activeTabs: [
      { title: 'Design System v3.2 - Figma', favicon: '🎨' },
      { title: 'Client Feedback Hub', favicon: '💬' },
      { title: 'Stripe Invoice Review', favicon: '💳' },
    ],
  },
];

export const HeroVisual: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);
  const [lastSwitchedTime, setLastSwitchedTime] = useState<string>('0.04s (Instant)');

  // Auto-cycle between accounts smoothly unless paused
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setActiveId((prev) => (prev % profiles.length) + 1);
      setLastSwitchedTime('0.03s (Instant)');
    }, 3200);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  // Keyboard shortcut listener to test Alt+1 .. Alt+4 directly on the page
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Also allow pressing 1, 2, 3, 4 without Alt for quick testing in browser
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 4) {
        setActiveId(num);
        setIsAutoCycling(false);
        setLastSwitchedTime('0.02s (Instant)');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeProfile = profiles.find((p) => p.id === activeId) || profiles[0];

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto mt-8 lg:mt-12 group"
      onMouseEnter={() => setIsAutoCycling(false)}
      onMouseLeave={() => setIsAutoCycling(true)}
    >
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-cyan-500/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500 pointer-events-none" />

      {/* Main Container */}
      <div className="relative rounded-2xl border border-slate-700/80 bg-[#0c111d] shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
        
        {/* Top Control Bar / Profile Selector Chips */}
        <div className="bg-[#080d16] border-b border-slate-800/80 p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Live Profile Switcher Preview
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Switch latency: <span className="text-emerald-400 font-semibold">{lastSwitchedTime}</span></span>
            </div>
          </div>

          {/* Quick-switch interactive buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {profiles.map((profile) => {
              const isActive = profile.id === activeId;
              return (
                <button
                  key={profile.id}
                  onClick={() => {
                    setActiveId(profile.id);
                    setIsAutoCycling(false);
                    setLastSwitchedTime('0.03s (Instant)');
                  }}
                  className={`relative flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 focus:outline-none ${
                    isActive
                      ? `bg-slate-800/90 ${profile.accentBorder} shadow-md shadow-blue-500/10 ring-1 ring-blue-400/40`
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/40 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex-shrink-0">
                      {profile.icon}
                    </div>
                    <div className="min-w-0">
                      <div className={`text-xs sm:text-sm font-medium truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        Account {profile.id}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate hidden sm:block">
                        {profile.name}
                      </div>
                    </div>
                  </div>

                  {/* Shortcut key indicator */}
                  <span
                    className={`kbd-key text-[11px] px-2 py-0.5 ml-1 flex-shrink-0 ${
                      isActive ? 'active' : ''
                    }`}
                  >
                    {profile.shortcut}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Simulated Browser Chrome Window */}
        <div className="p-3 sm:p-4 bg-[#090e18]">
          {/* Chrome Title Bar / Tabs */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/70">
            {/* Tab strip */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-[80%]">
              {activeProfile.activeTabs.map((tab, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-t-lg text-xs font-medium border-t border-x transition-colors duration-150 ${
                    idx === 0
                      ? 'bg-[#111827] border-slate-700/80 text-white shadow-sm'
                      : 'bg-slate-900/40 border-transparent text-slate-400 hover:bg-slate-900/80'
                  }`}
                >
                  <span className="text-xs">{tab.favicon}</span>
                  <span className="truncate max-w-[120px] sm:max-w-[160px]">{tab.title}</span>
                  {idx === 0 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 ml-1" />
                  )}
                </div>
              ))}
            </div>

            {/* Profile Avatar Badge in Chrome top right */}
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full border text-xs font-medium ${activeProfile.badgeBg}`}>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeProfile.color}`} />
                <span className="font-mono text-[11px] font-semibold">{activeProfile.name}</span>
              </div>
            </div>
          </div>

          {/* Chrome Omnibox / URL Bar */}
          <div className="flex items-center gap-2 py-2 px-1 text-slate-400">
            <div className="flex-1 flex items-center gap-2 bg-[#0d1524] border border-slate-800/90 rounded-lg px-3 py-1.5 text-xs font-mono text-slate-300">
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-emerald-400 font-semibold">https://</span>
              <span className="truncate">{activeProfile.currentUrl.replace('https://', '')}</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-1.5 rounded-md border border-slate-800">
              <span>Profile #{activeProfile.id}</span>
            </div>
          </div>

          {/* Active Profile Surface / Workspace */}
          <div className="mt-2 rounded-xl bg-gradient-to-b from-[#0d1424] to-[#0a0f1c] border border-slate-800/80 p-5 sm:p-7 min-h-[190px] flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold font-mono uppercase ${activeProfile.badgeBg}`}>
                    Active Profile Detected
                  </span>
                  <span className="text-xs text-slate-400">Preserved Session</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1.5 flex items-center gap-2">
                  <span>{activeProfile.name}</span>
                  <span className="text-sm font-normal text-slate-400">({activeProfile.email})</span>
                </h4>
                <p className="text-sm text-slate-400 mt-1">
                  Switched instantly via <span className="text-blue-400 font-mono font-semibold">{activeProfile.shortcut}</span> without closing any windows or tabs.
                </p>
              </div>

              {/* Instant Switch Indicator */}
              <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 rounded-xl p-3 shadow-inner">
                <div className="text-right">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Direct Shortcut</div>
                  <div className="text-sm font-bold text-white font-mono">{activeProfile.shortcut}</div>
                </div>
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <Zap className="w-5 h-5 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Benefit Checkpoints inside Mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 mt-5 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero tab disruption</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Automatic profile discovery</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Supports up to 10 accounts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Hint */}
        <div className="bg-[#080d16] border-t border-slate-800/80 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-400" />
            <span>Interactive Simulator: Click any account or press <kbd className="kbd-key px-1.5 py-0.5 text-[10px]">1</kbd> - <kbd className="kbd-key px-1.5 py-0.5 text-[10px]">4</kbd></span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Windows Native Helper</span>
          </div>
        </div>

      </div>
    </div>
  );
};
