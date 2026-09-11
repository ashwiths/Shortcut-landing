import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'text-slate-900',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-tech custom mark: Two switching profile cards with shortcut link */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]} rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20`}>
        <div className="w-full h-full bg-[#0b101b] rounded-[11px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-400/20" />
          
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5/6 h-5/6 relative z-10"
          >
            <defs>
              <linearGradient id="logo-grad-1" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60A5FA" />
                <stop offset="0.5" stopColor="#3B82F6" />
                <stop offset="1" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="logo-grad-card" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" stopOpacity="0.8" />
                <stop offset="1" stopColor="#2563EB" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* Background Profile Card */}
            <rect
              x="6"
              y="5"
              width="15"
              height="18"
              rx="4"
              stroke="url(#logo-grad-card)"
              strokeWidth="1.6"
              fill="#0d1527"
              strokeDasharray="1 0"
            />
            {/* Primary Switching Profile Card (offset) */}
            <rect
              x="11"
              y="9"
              width="15"
              height="18"
              rx="4"
              fill="#111c35"
              stroke="url(#logo-grad-1)"
              strokeWidth="1.8"
            />
            {/* Profile Avatar Dot inside front card */}
            <circle cx="18.5" cy="15" r="2.5" fill="#60A5FA" />
            <path
              d="M14.5 22.5C14.5 20.5 16 19.5 18.5 19.5C21 19.5 22.5 20.5 22.5 22.5"
              stroke="#60A5FA"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            {/* Dynamic fast switch indicator arrow / lightning chevron */}
            <path
              d="M7 14L4 17L7 20"
              stroke="#38BDF8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 11L28 8L25 5"
              stroke="#60A5FA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-semibold tracking-tight ${textColor} leading-tight ${textSizes[size]}`}>
            Chrome Account <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Switcher</span>
          </span>
          {size === 'lg' && (
            <span className="text-xs text-slate-400 font-mono tracking-wide">
              Windows Utility
            </span>
          )}
        </div>
      )}
    </div>
  );
};
