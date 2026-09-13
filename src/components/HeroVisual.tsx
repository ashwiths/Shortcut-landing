import React from 'react';
import frontVideo from '../assets/front.mp4';

interface HeroVisualProps {
  className?: string;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ className = '' }) => {
  return (
    <div id="hero-media-container" className={`relative w-full max-w-[440px] lg:max-w-[460px] mx-auto group ${className}`}>
      {/* Subtle ambient glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-cyan-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Video Container (seamless GIF-like presentation without player controls) */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-600/70 ring-1 ring-white/20 bg-[#29394A]">
        <video
          src={frontVideo}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-auto block rounded-2xl sm:rounded-3xl pointer-events-none select-none"
        >
          <source src={frontVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
