import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ShortcutsSection } from './components/ShortcutsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { DownloadSection } from './components/DownloadSection';
import { InstallationSection } from './components/InstallationSection';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';
import { initSmoothScrollLinks, initScrollRevealAnimations } from './utils/animations';

function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Initialize anime.js smooth scrolling and scroll reveals
  useEffect(() => {
    const cleanupScrollLinks = initSmoothScrollLinks();
    const cleanupScrollReveal = initScrollRevealAnimations();

    return () => {
      cleanupScrollLinks();
      cleanupScrollReveal();
    };
  }, []);

  // Support direct routing via #privacy or /privacy
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy-policy' || window.location.pathname === '/privacy') {
        setPrivacyModalOpen(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openPrivacyModal = () => {
    setPrivacyModalOpen(true);
  };

  const closePrivacyModal = () => {
    setPrivacyModalOpen(false);
    if (window.location.hash === '#privacy-policy') {
      history.replaceState(null, '', ' ');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF6E3] text-slate-900 font-sans selection:bg-blue-600/25 selection:text-blue-900 antialiased">
      {/* Navigation */}
      <Navbar onOpenPrivacy={openPrivacyModal} />

      {/* Main Sections */}
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <ShortcutsSection />
        <HowItWorksSection />
        <DownloadSection />
        <InstallationSection />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacy={openPrivacyModal} />

      {/* Privacy Policy Modal */}
      <PrivacyModal isOpen={privacyModalOpen} onClose={closePrivacyModal} />
    </div>
  );
}

export default App;
