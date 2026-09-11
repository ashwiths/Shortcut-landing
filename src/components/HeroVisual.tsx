import React from 'react';
import frontVideo from '../assets/front.mp4';

export const HeroVisual: React.FC = () => {
  return (
    <div id="hero-media-container" className="relative w-full max-w-4xl mx-auto mt-8 lg:mt-12 group">
      {/* Subtle ambient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-cyan-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Video Container (seamless GIF-like presentation without player controls) */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-white/40 backdrop-blur-sm">
        <video
          src={frontVideo}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-auto block rounded-2xl pointer-events-none select-none"
        >
          <source src={frontVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
