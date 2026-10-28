/**
 * Smooth scrolling engine with custom cubic-bezier easing, dynamic navbar offset,
 * interrupt handling, and navigation transition events.
 */

export interface SmoothScrollOptions {
  offset?: number;
  duration?: number;
  updateHash?: boolean;
  highlightTarget?: boolean;
  onStart?: () => void;
  onComplete?: () => void;
}

// Global active animation tracker to cancel prior runs cleanly
let activeAnimationId: number | null = null;

export const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const dispatchNavTransition = (isNavigating: boolean, targetId?: string) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('nav-transition-change', {
        detail: { isNavigating, targetId },
      })
    );
  }
};

export const smoothScrollTo = (
  target: string | HTMLElement,
  options: SmoothScrollOptions = {}
): Promise<void> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve();
      return;
    }

    const targetId = typeof target === 'string' ? target.replace(/^#/, '') : target.id;
    const element = typeof target === 'string' ? document.getElementById(targetId) : target;

    if (!element) {
      resolve();
      return;
    }

    const {
      offset = 85,
      duration = 850,
      updateHash = true,
      highlightTarget = true,
      onStart,
      onComplete,
    } = options;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      const top = Math.max(0, element.getBoundingClientRect().top + window.pageYOffset - offset);
      window.scrollTo({ top, behavior: 'auto' });
      if (updateHash && targetId) {
        history.pushState(null, '', `#${targetId}`);
      }
      onStart?.();
      onComplete?.();
      resolve();
      return;
    }

    // Cancel any ongoing smooth scroll
    if (activeAnimationId !== null) {
      cancelAnimationFrame(activeAnimationId);
      activeAnimationId = null;
    }

    const startPosition = window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const targetPosition = Math.min(
      maxScroll,
      Math.max(0, element.getBoundingClientRect().top + window.pageYOffset - offset)
    );
    const distance = targetPosition - startPosition;

    if (Math.abs(distance) < 2) {
      resolve();
      return;
    }

    dispatchNavTransition(true, targetId);
    onStart?.();

    let startTime: number | null = null;
    let userInterrupted = false;

    // Interrupt listener: cancel if user starts scrolling manually
    const cancelOnUserScroll = (e: Event) => {
      // Ignore programmatic scroll events
      if (e.isTrusted) {
        userInterrupted = true;
        cleanup();
      }
    };

    window.addEventListener('wheel', cancelOnUserScroll, { passive: true });
    window.addEventListener('touchmove', cancelOnUserScroll, { passive: true });

    const cleanup = () => {
      window.removeEventListener('wheel', cancelOnUserScroll);
      window.removeEventListener('touchmove', cancelOnUserScroll);
      dispatchNavTransition(false, targetId);
      activeAnimationId = null;
    };

    const step = (currentTime: number) => {
      if (userInterrupted) {
        resolve();
        return;
      }

      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (progress < 1) {
        activeAnimationId = requestAnimationFrame(step);
      } else {
        cleanup();

        if (updateHash && targetId) {
          history.pushState(null, '', `#${targetId}`);
        }

        if (highlightTarget) {
          element.classList.remove('section-arrive-pulse');
          // Trigger reflow to restart animation
          void element.offsetWidth;
          element.classList.add('section-arrive-pulse');
        }

        onComplete?.();
        resolve();
      }
    };

    activeAnimationId = requestAnimationFrame(step);
  });
};
