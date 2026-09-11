import React, { useState } from 'react';
import { Keyboard, Info, Check } from 'lucide-react';

interface ShortcutMapping {
  key: string;
  num: string;
  account: string;
  desc: string;
}

export const ShortcutsSection: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>('1');

  const shortcuts: ShortcutMapping[] = [
    { key: 'Alt + 1', num: '1', account: 'Account 1', desc: 'Default Primary Profile' },
    { key: 'Alt + 2', num: '2', account: 'Account 2', desc: 'Second Detected Profile' },
    { key: 'Alt + 3', num: '3', account: 'Account 3', desc: 'Third Detected Profile' },
    { key: 'Alt + 4', num: '4', account: 'Account 4', desc: 'Fourth Detected Profile' },
    { key: 'Alt + 5', num: '5', account: 'Account 5', desc: 'Fifth Detected Profile' },
    { key: 'Alt + 6', num: '6', account: 'Account 6', desc: 'Sixth Detected Profile' },
    { key: 'Alt + 7', num: '7', account: 'Account 7', desc: 'Seventh Detected Profile' },
    { key: 'Alt + 8', num: '8', account: 'Account 8', desc: 'Eighth Detected Profile' },
    { key: 'Alt + 9', num: '9', account: 'Account 9', desc: 'Ninth Detected Profile' },
    { key: 'Alt + 0', num: '0', account: 'Account 10', desc: 'Tenth Detected Profile' },
  ];

  return (
    <section id="shortcuts" className="py-24 bg-transparent relative border-t border-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Keyboard className="w-3.5 h-3.5" />
            <span>Keyboard Shortcuts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Your accounts. One key away.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700">
            Dedicated global shortcuts mapped directly to your Chrome profiles. No mouse movement required.
          </p>
        </div>

        {/* Shortcuts Matrix Grid */}
        <div className="reveal-on-scroll mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {shortcuts.map((item) => {
            const isSelected = selectedKey === item.num;
            return (
              <button
                key={item.num}
                type="button"
                onClick={() => setSelectedKey(item.num)}
                className={`stagger-item relative rounded-xl p-4 text-left transition-all duration-200 border group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isSelected
                    ? 'bg-blue-50 border-blue-500 shadow-md ring-1 ring-blue-400'
                    : 'bg-white/85 border-black/10 hover:border-blue-400 hover:bg-white shadow-sm'
                }`}
              >
                {/* Visual Shortcut Keycap Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className={`kbd-key px-2 py-1 text-xs ${isSelected ? 'active' : ''}`}>
                      Alt
                    </span>
                    <span className="text-slate-500 font-mono text-xs">+</span>
                    <span className={`kbd-key px-2.5 py-1 text-xs font-bold ${isSelected ? 'active text-white' : 'text-blue-700'}`}>
                      {item.num}
                    </span>
                  </div>

                  {isSelected ? (
                    <span className="w-5 h-5 rounded-full bg-blue-600/15 text-blue-700 flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-400 group-hover:text-slate-600">
                      →
                    </span>
                  )}
                </div>

                {/* Account Label */}
                <div className="text-sm font-bold text-slate-900 tracking-tight">
                  {item.account}
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5 truncate">
                  {item.desc}
                </div>
              </button>
            );
          })}
        </div>

        {/* Informative Note */}
        <div className="mt-10 max-w-2xl mx-auto rounded-xl bg-white/90 border border-blue-500/20 p-4 flex items-start gap-3 shadow-sm">
          <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-800 leading-relaxed">
            <span className="font-semibold text-slate-950">Automatic Assignment:</span> Profiles are detected automatically. The shortcut is assigned according to the profile order.
          </p>
        </div>

      </div>
    </section>
  );
};
