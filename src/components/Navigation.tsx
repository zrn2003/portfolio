import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { smoothScrollTo } from '@/lib/smoothScroll';

interface NavigationProps {
  onOpenTerminal?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onOpenTerminal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);
  const isNavigatingRef = useRef(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const desktopNavLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#publications', label: 'Research' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const mobileNavLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#publications', label: 'Publications & Research' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
    isNavigatingRef.current = true;

    smoothScrollTo(targetId, {
      offset: 85,
      duration: 850,
      onComplete: () => {
        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 150);
      },
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Don't let observer override active pill while smooth scroll is actively navigating
      if (isNavigatingRef.current) return;

      if (window.scrollY < 120) {
        setActiveSection('home');
      } else if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection('contact');
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isNavigatingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    mobileNavLinks.forEach((link) => {
      const sectionId = link.href.slice(1);
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`fixed top-4 left-1/2 z-50 transition-all duration-300 w-[94%] max-w-fit border-2 border-black dark:border-[#1E293B] bg-white dark:bg-[#0F1626]/95 backdrop-blur-md shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_25px_rgba(0,0,0,0.8)] ${
        scrolled ? 'py-2 px-3 sm:px-4' : 'py-2.5 px-4 sm:px-6'
      }`}
    >
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        {/* Logo with Cyber Accent & smooth scroll to top */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-mono font-black text-xl sm:text-2xl text-black dark:text-white whitespace-nowrap flex items-center hover:translate-x-[2px] transition-transform"
        >
          ZN<span className="text-[#ca8a04] dark:text-[#00FF66] dark:drop-shadow-[0_0_8px_rgba(0,255,102,0.8)]">.</span>
        </a>

        {/* Desktop nav with smooth sliding active pill */}
        <div className="hidden lg:flex items-center gap-1.5 relative">
          {desktopNavLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative isolate px-3 py-1.5 text-xs font-bold font-mono uppercase tracking-wider transition-colors duration-200 border-2 ${
                  isActive
                    ? 'border-transparent text-black font-black'
                    : 'border-transparent text-black dark:text-zinc-300 hover:border-black/30 dark:hover:border-[#1E293B] hover:bg-[#ffff00]/25 dark:hover:bg-[#151f33]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[#ffff00] dark:bg-[#00FF66] border-2 border-black dark:border-[#00FF66] shadow-[2px_2px_0px_rgba(0,0,0,1)] z-0"
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 32,
                    }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right side controls: Theme Switcher */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-1.5 sm:p-2 border-2 border-black dark:border-[#1E293B] bg-[#f0f0f0] dark:bg-[#131d33] text-black dark:text-[#00F0FF] shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#ffff00] hover:text-black dark:hover:bg-[#00FF66] dark:hover:text-black transition-colors"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 font-bold" /> : <Moon className="w-4 h-4 font-bold" />}
            </button>
          )}

          {/* Mobile Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 text-black dark:text-white border-2 border-transparent hover:border-black dark:hover:border-zinc-700 hover:bg-[#ffff00] dark:hover:bg-[#00FF66] hover:text-black dark:hover:text-black transition-colors"
            >
              {isOpen ? <X className="w-5 h-5 font-bold" /> : <Menu className="w-5 h-5 font-bold" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav expanding Island */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-transparent"
          >
            <div className="py-3 mt-2 border-t-2 border-black dark:border-[#1E293B] grid grid-cols-2 gap-1.5 px-0.5">
              {mobileNavLinks.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      setIsOpen(false);
                    }}
                    className={`block px-2.5 py-2 text-[11px] font-bold font-mono uppercase tracking-wider text-center border-2 transition-all truncate ${
                      isActive
                        ? 'bg-[#ffff00] dark:bg-[#00FF66] border-black dark:border-[#00FF66] text-black font-black shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                        : 'bg-transparent border-transparent text-black dark:text-zinc-200 hover:border-black dark:hover:border-[#1E293B] hover:bg-[#ffff00]/25 dark:hover:bg-[#151f33]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
