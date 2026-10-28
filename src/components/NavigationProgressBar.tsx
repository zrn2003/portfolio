import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const NavigationProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleTransition = (e: Event) => {
      const customEvent = e as CustomEvent<{ isNavigating: boolean }>;
      setIsNavigating(Boolean(customEvent.detail?.isNavigating));
    };

    window.addEventListener('nav-transition-change', handleTransition);
    return () => {
      window.removeEventListener('nav-transition-change', handleTransition);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none overflow-hidden bg-transparent">
      {/* Real-time scroll indicator line: pure yellow in light mode, neon gradient in dark mode */}
      <motion.div
        className="h-full bg-[#ffff00] shadow-[0_0_8px_rgba(234,179,8,0.85)] dark:bg-gradient-to-r dark:from-[#00FF66] dark:via-[#00F0FF] dark:to-[#ffff00] dark:shadow-[0_0_10px_rgba(0,255,102,0.9)] origin-left"
        style={{ scaleX }}
      />

      {/* Cyber pulse laser beam active while navigating: yellow in light mode, white/cyan in dark mode */}
      {isNavigating && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            repeat: Infinity,
            duration: 0.75,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#ffff00] dark:via-white to-transparent opacity-95 shadow-[0_0_15px_#ffff00] dark:shadow-[0_0_15px_#ffffff]"
        />
      )}
    </div>
  );
};

export default NavigationProgressBar;
