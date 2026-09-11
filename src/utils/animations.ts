/**
 * Smoothly scrolls to a target element or Y coordinate using native hardware-accelerated scrolling
 */
export function smoothScrollTo(target: string | number, offset = 80, _duration = 850) {
  let targetY = 0;

  if (typeof target === 'number') {
    targetY = target;
  } else if (target === '#' || target === '#top') {
    targetY = 0;
  } else {
    const el = document.querySelector(target);
    if (!el) return;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    targetY = Math.max(0, elementPosition - offset);
  }

  // Native smooth scroll runs directly on the browser compositor thread (zero JS lag)
  window.scrollTo({
    top: targetY,
    behavior: 'smooth',
  });
}

/**
 * Attaches smooth scroll listeners to all internal hash anchor links
 */
export function initSmoothScrollLinks() {
  const handleAnchorClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href === '#!') {
      e.preventDefault();
      smoothScrollTo(0);
      return;
    }

    if (href.startsWith('#') && href.length > 1) {
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        smoothScrollTo(href, 80);
      }
    }
  };

  document.addEventListener('click', handleAnchorClick);
  return () => {
    document.removeEventListener('click', handleAnchorClick);
  };
}

/**
 * Initializes IntersectionObserver for buttery-smooth scroll reveal transitions
 */
export function initScrollRevealAnimations() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return () => {};

  const animatedElements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');

  // Check if elements are already in initial viewport to avoid flash
  animatedElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // Already in viewport, show immediately without lagging
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.willChange = 'opacity, transform';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';

          // Clean up willChange after transition ends to free GPU memory
          setTimeout(() => {
            el.style.willChange = 'auto';
          }, 650);

          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px',
    }
  );

  animatedElements.forEach((el) => {
    if (el.style.opacity === '0') {
      observer.observe(el);
    }
  });

  return () => {
    observer.disconnect();
  };
}
