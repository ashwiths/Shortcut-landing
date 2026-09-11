import { animate, stagger } from 'animejs';

/**
 * Smoothly scrolls to a target element or Y coordinate using anime.js animate()
 */
export function smoothScrollTo(target: string | number, offset = 80, duration = 850) {
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

  const scrollContainer = document.scrollingElement || document.documentElement;

  animate(scrollContainer, {
    scrollTop: targetY,
    duration: duration,
    ease: 'inOutCubic',
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
 * Initializes IntersectionObserver to trigger anime.js reveal animations
 * as elements scroll into view
 */
export function initScrollRevealAnimations() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return () => {};

  const animatedElements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');

  // Set initial state
  animatedElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;

          // Check if parent container has staggered children
          const staggerGroup = el.querySelectorAll<HTMLElement>('.stagger-item');

          if (staggerGroup.length > 0) {
            animate(el, {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 700,
              ease: 'outCubic',
            });

            animate(staggerGroup, {
              opacity: [0, 1],
              translateY: [20, 0],
              delay: stagger(90, { start: 150 }),
              duration: 650,
              ease: 'outCubic',
            });
          } else {
            animate(el, {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 750,
              ease: 'outCubic',
            });
          }

          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  animatedElements.forEach((el) => observer.observe(el));

  return () => {
    animatedElements.forEach((el) => observer.unobserve(el));
  };
}
